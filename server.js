// TransitOne Surat - Express backend (JSON file database)
// Run:  npm install  &&  npm start     -> http://localhost:3000
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ---------- tiny JSON "database" ----------
const DB_FILE = path.join(process.env.VERCEL ? "/tmp" : __dirname, "db.json");
function loadDB() {
  try { return JSON.parse(fs.readFileSync(DB_FILE, "utf8")); }
  catch {
    return {
      users: [], otps: [], feedback: [],
      tickets: [{
        id: "T8482", ticketNo: "TXN94819482",
        from: "Surat Railway Station BRTS", to: "Abhwa Gaam Terminal",
        passengerType: "general", qty: 1, fare: 22,
        date: new Date().toISOString().split("T")[0],
        userIdentifier: "+91 9876543210", bookedAt: new Date().toISOString()
      }],
      logs: [{ id: "L001", timestamp: new Date().toISOString(),
               action: "SYSTEM_START", details: "Surat BRTS backend database initialized." }]
    };
  }
}
function saveDB(db) { try { fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2)); } catch (e) { console.error(e); } }
const uid = (p) => p + Math.floor(10000 + Math.random() * 90000);
function log(db, action, details) {
  db.logs.unshift({ id: uid("L"), timestamp: new Date().toISOString(), action, details });
  db.logs = db.logs.slice(0, 200);
}

// ---------- AUTH ----------
// Send OTP. The code is returned so the frontend can show it on screen (demo).
// In production: send it with an SMS provider (MSG91/Twilio) and REMOVE `code` from the response.
app.post("/api/auth/send-otp", (req, res) => {
  const { phone, name, role } = req.body || {};
  if (!phone) return res.status(400).json({ error: "Phone number required." });
  const db = loadDB();
  const code = String(Math.floor(100000 + Math.random() * 900000));
  db.otps = db.otps.filter((o) => o.phone !== phone);
  db.otps.push({ phone, name, role, code, expiresAt: Date.now() + 10 * 60 * 1000 });
  saveDB(db);
  res.json({ success: true, code });
});

app.post("/api/auth/verify-otp", (req, res) => {
  const { phone, code } = req.body || {};
  const db = loadDB();
  const rec = db.otps.find((o) => o.phone === phone && o.code === code);
  if (!rec) return res.json({ error: "Invalid OTP code." });
  if (Date.now() > rec.expiresAt) return res.json({ error: "OTP expired." });

  let user = db.users.find((u) => u.phone === phone);
  if (!user) {
    user = { id: uid("U"), name: rec.name || "Commuter", phone, email: "",
             role: rec.role || "passenger", createdAt: new Date().toISOString() };
    db.users.push(user);
    log(db, "USER_REGISTERED", `New user ${user.name} (${user.role}) registered via OTP.`);
  }
  db.otps = db.otps.filter((o) => o.phone !== phone);
  saveDB(db);
  res.json({ success: true, user });
});

app.post("/api/auth/email-register", (req, res) => {
  const { email, password, name, role } = req.body || {};
  if (!email || !password) return res.json({ error: "Email and password required." });
  const db = loadDB();
  if (db.users.some((u) => u.email === email)) return res.json({ error: "User already exists with this email." });
  const user = { id: uid("U"), name: name || "Commuter", email, password, phone: "",
                 role: role || "passenger", createdAt: new Date().toISOString() };
  db.users.push(user);
  log(db, "USER_REGISTERED", `New user ${user.name} (${user.role}) registered via Email.`);
  saveDB(db);
  const { password: _p, ...safe } = user;
  res.json({ success: true, user: safe });
});

app.post("/api/auth/email-login", (req, res) => {
  const { email, password } = req.body || {};
  const db = loadDB();
  let user = db.users.find((u) => u.email === email);
  if (!user) { // demo behaviour: auto-register, same as the frontend fallback
    user = { id: uid("U"), name: (email || "user").split("@")[0], email, password,
             phone: "", role: "passenger", createdAt: new Date().toISOString() };
    db.users.push(user);
    log(db, "USER_REGISTERED", `User ${user.name} registered and signed in via Email.`);
    saveDB(db);
  } else if (user.password && user.password !== password) {
    return res.json({ error: "Incorrect password." });
  }
  const { password: _p, ...safe } = user;
  res.json({ success: true, user: safe });
});

// ---------- TICKETS ----------
app.post("/api/tickets/book", (req, res) => {
  const db = loadDB();
  const ticketNo = "TXN" + Math.floor(10000000 + Math.random() * 90000000);
  const ticket = { id: uid("T"), ticketNo, ...req.body, bookedAt: new Date().toISOString() };
  db.tickets.push(ticket);
  log(db, "TICKET_BOOKED", `Ticket ${ticketNo} booked by ${ticket.userIdentifier} for ₹${ticket.fare}.`);
  saveDB(db);
  res.json({ success: true, ticket });
});

app.get("/api/tickets/history", (req, res) => {
  const db = loadDB();
  res.json({ success: true, history: db.tickets.filter((t) => t.userIdentifier === req.query.userIdentifier) });
});

// ---------- FEEDBACK ----------
app.post("/api/feedback/submit", (req, res) => {
  const db = loadDB();
  db.feedback.push({ id: uid("F"), ...req.body, submittedAt: new Date().toISOString() });
  log(db, "FEEDBACK_SUBMITTED", `Feedback submitted under category: ${req.body.category}.`);
  saveDB(db);
  res.json({ success: true });
});

// ---------- ADMIN ----------
app.get("/api/admin/stats", (req, res) => {
  const db = loadDB();
  res.json({
    success: true,
    stats: {
      totalBookings: db.tickets.length,
      totalRevenue: db.tickets.reduce((s, t) => s + (Number(t.fare) || 0), 0),
      totalUsers: db.users.length,
      totalFeedback: db.feedback.length
    },
    logs: db.logs.slice(0, 15)
  });
});

// ---------- Serve the frontend ----------
app.use(express.static(__dirname, { index: "index.html" }));

const PORT = process.env.PORT || 3000;
if (require.main === module) app.listen(PORT, () => console.log(`TransitOne running on http://localhost:${PORT}`));
module.exports = app; // lets Vercel use it as a serverless function
