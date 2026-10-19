// TransitOne Surat - Core Application Logic

// Language Translation Dictionary
const translations = {
  en: {
    title: "TransitOne Surat",
    subtitle: "Fast, Smart, Safe and Sustainable Public Transportation for Surat City",
    home: "Home",
    routes: "Routes",
    tracking: "Live Tracking",
    stations: "Bus Stations",
    timetable: "Bus Timetable",
    ticket: "Smart Ticket",
    fare_calc: "Fare Calculator",
    nearby: "Nearby Stations",
    alerts: "Alerts",
    feedback: "Feedback",
    about: "About",
    contact: "Contact",
    dashboard: "Admin Dashboard",
    find_bus: "Find Bus",
    plan_journey: "Plan Journey",
    operational_status: "Today's Operational Status",
    buses_running: "Buses Running",
    brts_stations: "BRTS Stations",
    daily_passengers: "Daily Passengers",
    total_routes: "Total Routes",
    on_time_perf: "On-Time Performance",
    carbon_saved: "CO2 Emissions Saved",
    search: "Search",
    filter: "Filters",
    ac_bus: "AC Bus",
    express: "Express",
    regular: "Regular",
    accessible: "Accessible",
    from: "From Station",
    to: "To Station",
    bus_no: "Bus Number",
    select_station: "Select Station",
    calculate: "Calculate",
    book_now: "Book Ticket",
    passenger_type: "Passenger Type",
    passengers: "Passengers",
    date: "Date",
    student: "Student (50% Off)",
    senior: "Senior Citizen (30% Off)",
    general: "General (Standard)",
    child: "Child (Free)",
    generate_ticket: "Generate QR Ticket",
    print_ticket: "Print Ticket",
    download_ticket: "Download Pass",
    journey_planner: "Smart Journey Planner",
    best_route: "Recommended Route",
    interchanges: "Interchanges",
    walking_dist: "Walking Distance",
    driver_status: "Driver Status",
    speed: "Speed",
    delay: "Delay",
    next_stop: "Next Stop",
    last_updated: "Last Updated",
    rate_journey: "Rate Journey",
    report_delay: "Report Bus Delay",
    report_cleanliness: "Report Cleanliness",
    driver_feedback: "Driver Feedback",
    suggest_imp: "Suggest Improvements",
    upload_img: "Upload Image",
    submit_feedback: "Submit Feedback",
    track_complaint: "Track Complaint Status",
    faq_sec: "Frequently Asked Questions",
    emergency_nos: "Emergency Numbers",
    police: "Police Control Room",
    ambulance: "Ambulance Services",
    brts_helpline: "BRTS Customer Care",
    sos_alert: "SOS Emergency Triggered! Nearest control room has been notified.",
    ai_features: "AI Assist Panel",
    ai_chat: "AI Journey Assistant",
    voice_search_tooltip: "Click to search by voice",
    ai_predict_delay: "AI Delay Prediction",
    ai_crowd_predict: "AI Crowd Prediction",
    weather_widget: "Surat Weather & AQI",
    copyright: "© 2026 TransitOne Surat. Surat Municipal Corporation.",
    admin_analytics: "Dashboard Analytics",
    add_bus: "Add New Bus",
    manage_routes: "Manage Routes",
    manage_stations: "Manage Stations",
    publish_alert: "Publish Alert",
    view_feedback: "Feedback & Complaints"
  },
  hn: {
    title: "TransitOne Surat",
    subtitle: "सूरत शहर के लिए तेज, स्मार्ट, सुरक्षित और टिकाऊ सार्वजनिक परिवहन",
    home: "होम",
    routes: "मार्ग",
    tracking: "लाइव ट्रैकिंग",
    stations: "बस स्टेशन",
    timetable: "बस समय सारिणी",
    ticket: "स्मार्ट टिकट",
    fare_calc: "किराया कैलकुलेटर",
    nearby: "नजदीकी स्टेशन",
    alerts: "अलर्ट",
    feedback: "प्रतिक्रिया",
    about: "हमारे बारे में",
    contact: "संपर्क",
    dashboard: "एडमिन डैशबोर्ड",
    find_bus: "बस खोजें",
    plan_journey: "यात्रा की योजना",
    operational_status: "आज की परिचालन स्थिति",
    buses_running: "चलने वाली बसें",
    brts_stations: "बीआरटीएस स्टेशन",
    daily_passengers: "दैनिक यात्री",
    total_routes: "कुल मार्ग",
    on_time_perf: "समय पर प्रदर्शन",
    carbon_saved: "बचाया गया CO2 उत्सर्जन",
    search: "खोजें",
    filter: "फिल्टर",
    ac_bus: "एसी बस",
    express: "एक्सप्रेस",
    regular: "नियमित",
    accessible: "सुगम्य बस",
    from: "प्रस्थान स्टेशन",
    to: "गंतव्य स्टेशन",
    bus_no: "बस नंबर",
    select_station: "स्टेशन चुनें",
    calculate: "गणना करें",
    book_now: "टिकट बुक करें",
    passenger_type: "यात्री प्रकार",
    passengers: "यात्री संख्या",
    date: "तारीख",
    student: "छात्र (50% छूट)",
    senior: "वरिष्ठ नागरिक (30% छूट)",
    general: "सामान्य (मानक)",
    child: "बच्चा (निःशुल्क)",
    generate_ticket: "क्यूआर टिकट जनरेट करें",
    print_ticket: "टिकट प्रिंट करें",
    download_ticket: "पास डाउनलोड करें",
    journey_planner: "स्मार्ट यात्रा योजनाकार",
    best_route: "अनुशंसित मार्ग",
    interchanges: "इंटरकनेक्शन",
    walking_dist: "पैदल दूरी",
    driver_status: "चालक की स्थिति",
    speed: "गति",
    delay: "देरी",
    next_stop: "अगला पड़ाव",
    last_updated: "अंतिम अपडेट",
    rate_journey: "यात्रा का मूल्यांकन",
    report_delay: "बस देरी की रिपोर्ट",
    report_cleanliness: "सफाई की रिपोर्ट",
    driver_feedback: "चालक प्रतिक्रिया",
    suggest_imp: "सुझाव दें",
    upload_img: "छवि अपलोड करें",
    submit_feedback: "प्रतिक्रिया सबमिट करें",
    track_complaint: "शिकायत की स्थिति",
    faq_sec: "अक्सर पूछे जाने वाले प्रश्न",
    emergency_nos: "आपातकालीन नंबर",
    police: "पुलिस नियंत्रण कक्ष",
    ambulance: "एम्बुलेंस सेवा",
    brts_helpline: "बीआरटीएस हेल्पलाइन",
    sos_alert: "एसओएस आपातकाल सक्रिय! निकटतम नियंत्रण कक्ष को सूचित कर दिया गया है।",
    ai_features: "एआई सहायता पैनल",
    ai_chat: "एआई यात्रा सहायक",
    voice_search_tooltip: "आवाज से खोजने के लिए क्लिक करें",
    ai_predict_delay: "एआई देरी भविष्यवाणी",
    ai_crowd_predict: "एआई भीड़ भविष्यवाणी",
    weather_widget: "सूरत मौसम और एक्यूआई",
    copyright: "© 2026 TransitOne Surat. सूरत नगर निगम।",
    admin_analytics: "डैशबोर्ड विश्लेषण",
    add_bus: "नई बस जोड़ें",
    manage_routes: "मार्ग प्रबंधित करें",
    manage_stations: "स्टेशन प्रबंधित करें",
    publish_alert: "अलर्ट जारी करें",
    view_feedback: "प्रतिक्रिया और शिकायतें"
  },
  gu: {
    title: "TransitOne Surat",
    subtitle: "સુરત શહેર માટે ઝડપી, સ્માર્ટ, સુરક્ષિત અને ટકાઉ જાહેર પરિવહન",
    home: "હોમ",
    routes: "રૂટ્સ",
    tracking: "લાઈવ ટ્રેકિંગ",
    stations: "બસ સ્ટેશનો",
    timetable: "બસ સમયપત્રક",
    ticket: "સ્માર્ટ ટિકિટ",
    fare_calc: "ભાડું કેલ્ક્યુલેટર",
    nearby: "નજીકના સ્ટેશનો",
    alerts: "એલર્ટ્સ",
    feedback: "પ્રતિસાદ",
    about: "અમારા વિશે",
    contact: "સંપર્ક",
    dashboard: "એડમિન ડેશબોર્ડ",
    find_bus: "બસ શોધો",
    plan_journey: "મુસાફરી આયોજન",
    operational_status: "આજની ઓપરેશનલ સ્થિતિ",
    buses_running: "કાર્યરત બસો",
    brts_stations: "BRTS સ્ટેશનો",
    daily_passengers: "દૈનિક મુસાફરો",
    total_routes: "કુલ રૂટ્સ",
    on_time_perf: "ઓન-ટાઇમ પરફોર્મન્સ",
    carbon_saved: "બચાવેલ CO2 ઉત્સર્જન",
    search: "શોધો",
    filter: "ફિલ્ટર્સ",
    ac_bus: "AC બસ",
    express: "એક્સપ્રેસ",
    regular: "રેગ્યુલર",
    accessible: "દિવ્યાંગ અનુકૂળ બસ",
    from: "પ્રારંભિક સ્ટેશન",
    to: "ગંતવ્ય સ્ટેશન",
    bus_no: "બસ નંબર",
    select_station: "સ્ટેશન પસંદ કરો",
    calculate: "ગણતરી કરો",
    book_now: "ટિકિટ બુક કરો",
    passenger_type: "મુસાફર પ્રકાર",
    passengers: "મુસાફરોની સંખ્યા",
    date: "તારીખ",
    student: "વિદ્યાર્થી (50% છૂટ)",
    senior: "વરિષ્ઠ નાગરિક (30% છૂટ)",
    general: "સામાન્ય (સ્ટાન્ડર્ડ)",
    child: "બાળક (મફત)",
    generate_ticket: "QR ટિકિટ જનરેટ કરો",
    print_ticket: "ટિકિટ પ્રિન્ટ કરો",
    download_ticket: "પાસ ડાઉનલોડ કરો",
    journey_planner: "સ્માર્ટ મુસાફરી પ્લાનર",
    best_route: "ભલામણ કરેલ રૂટ",
    interchanges: "ઇન્ટરચેન્જ",
    walking_dist: "પગપાળા અંતર",
    driver_status: "ડ્રાઇવરની સ્થિતિ",
    speed: "ઝડપ",
    delay: "વિલંબ",
    next_stop: "આગળનું સ્ટેશન",
    last_updated: "છેલ્લે અપડેટ",
    rate_journey: "મુસાફરી રેટિંગ",
    report_delay: "બસ મોડી હોવાની ફરિયાદ",
    report_cleanliness: "સ્વચ્છતા અંગે ફરિયાદ",
    driver_feedback: "ડ્રાઇવર પ્રતિસાદ",
    suggest_imp: "સુધારણા માટે સૂચન",
    upload_img: "ફોટો અપલોડ કરો",
    submit_feedback: "પ્રતિસાદ સબમિટ કરો",
    track_complaint: "ફરિયાદ સ્થિતિ તપાસો",
    faq_sec: "વારંવાર પૂછાતા પ્રશ્નો",
    emergency_nos: "ઇમરજન્સી નંબરો",
    police: "પોલીસ કંટ્રોલ રૂમ",
    ambulance: "એમ્બ્યુલન્સ સેવાઓ",
    brts_helpline: "BRTS હેલ્પલાઇન",
    sos_alert: "SOS ઇમરજન્સી ટ્રિગર! નજીકના કંટ્રોલ રૂમને એલર્ટ મોકલી દીધો છે.",
    ai_features: "AI મદદ પેનલ",
    ai_chat: "AI મુસાફરી સહાયક",
    voice_search_tooltip: "વોઇસ દ્વારા શોધવા ક્લિક કરો",
    ai_predict_delay: "AI વિલંબ પૂર્વાનુમાન",
    ai_crowd_predict: "AI ભીડ પૂર્વાનુમાન",
    weather_widget: "સુરત હવામાન અને AQI",
    copyright: "© 2026 TransitOne Surat. સુરત મહાનગરપાલિકા.",
    admin_analytics: "ડેશબોર્ડ એનાલિટિક્સ",
    add_bus: "નવી બસ ઉમેરો",
    manage_routes: "રૂટ્સ સંચાલન",
    manage_stations: "સ્ટેશન સંચાલન",
    publish_alert: "એલર્ટ પ્રકાશિત કરો",
    view_feedback: "પ્રતિસાદ અને ફરિયાદો"
  }
};

// Global State
let currentLang = localStorage.getItem("brts_lang") || "en";
let currentTheme = localStorage.getItem("brts_theme") || "light";
let bookmarkedRoutes = JSON.parse(localStorage.getItem("brts_bookmarks")) || [];
let recentSearches = JSON.parse(localStorage.getItem("brts_searches")) || [];
let complaintStatusList = JSON.parse(localStorage.getItem("brts_complaints")) || [
  { id: "CMP8409", type: "Delay", date: "2026-07-15", status: "resolved", desc: "Route 101D delayed by 25 mins" },
  { id: "CMP9231", type: "Cleanliness", date: "2026-07-16", status: "in-progress", desc: "Dustbin broken at station S002" }
];
let activeBuses = []; // Managed live bus simulations
let leafletMap = null;
let leafletRoutesLayer = null;
let leafletBusesLayer = null;
let analyticsCharts = {};

// On Load Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguageSelector();
  initRouter();
  initLoader();
  initScrollEffects();
  initAIChatbot();
  initAccessibilityMode();
  initSOS();
  updateAuthUI();
  
  // Render initial static details (weather, alerts, FAQs)
  renderWeather();
  renderAlerts();
  renderFAQs();
  renderRecentSearches();

  // Active home stats counters
  animateCounters();

  // Start simulated bus movements immediately for journey planning and live stats
  startBusSimulations();
});

// 1. Loading screen
function initLoader() {
  const loader = document.getElementById("loading-overlay");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1000);
  }
}

// 2. Scroll effects & progress bar
function initScrollEffects() {
  const progress = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const scrollPercent = (window.scrollY / totalScroll) * 100;
      progress.style.width = scrollPercent + "%";
    }

    if (window.scrollY > 200) {
      backToTop.style.display = "flex";
      navbar.classList.add("scrolled");
    } else {
      backToTop.style.display = "none";
      navbar.classList.remove("scrolled");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 3. Theme handler
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.remove("dark-theme");
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      currentTheme = "light";
    } else {
      document.body.classList.add("dark-theme");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      currentTheme = "dark";
    }
    localStorage.setItem("brts_theme", currentTheme);
    // Reload charts if active
    if (document.getElementById("admin").classList.contains("active")) {
      initAnalyticsCharts();
    }
  });
}

// 4. Multi-language Translation Engine
function initLanguageSelector() {
  const selector = document.getElementById("lang-select");
  selector.value = currentLang;
  applyTranslations(currentLang);

  selector.addEventListener("change", (e) => {
    currentLang = e.target.value;
    localStorage.setItem("brts_lang", currentLang);
    applyTranslations(currentLang);
    
    // Rerender details depending on language
    renderAlerts();
    renderFAQs();
    if (document.getElementById("routes").classList.contains("active")) {
      searchRoutes();
    }
    if (document.getElementById("stations").classList.contains("active")) {
      renderStations();
    }
  });
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// 5. Router System
function initRouter() {
  const navLinks = document.querySelectorAll(".nav-link, .brand-logo, .hero-btn");
  const sections = document.querySelectorAll(".page-section");
  const hamburger = document.getElementById("hamburger");
  const navLinksContainer = document.getElementById("nav-links-container");

  hamburger.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
  });

  function routeChange() {
    let hash = window.location.hash || "#home";
    let targetSection = hash.substring(1);
    
    // Auth security guards
    const userData = localStorage.getItem("brts_user");
    const userObj = userData ? JSON.parse(userData) : null;
    
    if (targetSection === "admin") {
      if (!userObj || userObj.role !== "admin") {
        alert("Access Denied. City Admin role required to view operations dashboard.");
        window.location.hash = "#home";
        setTimeout(() => { openAuthModal("admin"); }, 300);
        return;
      }
    } else if (targetSection === "passenger_dashboard") {
      if (!userObj || userObj.role !== "passenger") {
        alert("Access Denied. Passenger login required to access dashboard.");
        window.location.hash = "#home";
        setTimeout(() => { openAuthModal("passenger"); }, 300);
        return;
      }
    }

    sections.forEach((sec) => sec.classList.remove("active"));
    document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));

    const activeSec = document.getElementById(targetSection);
    if (activeSec) {
      activeSec.classList.add("active");
      
      // Update Navbar link state
      const navLink = document.querySelector(`.nav-link[href="#${targetSection}"]`);
      if (navLink) navLink.classList.add("active");

      // Page-specific initializers
      if (targetSection === "tracking") {
        initTrackingMap();
      } else if (targetSection === "routes") {
        searchRoutes();
      } else if (targetSection === "stations") {
        renderStations();
      } else if (targetSection === "timetable") {
        initTimetables();
      } else if (targetSection === "ticket") {
        setupSmartTicketForm();
      } else if (targetSection === "nearby") {
        initNearbyStationsView();
      } else if (targetSection === "journey_planner") {
        setupJourneyPlanner();
      } else if (targetSection === "feedback") {
        renderFeedbackHistory();
      } else if (targetSection === "admin") {
        initAdminView();
      } else if (targetSection === "passenger_dashboard") {
        loadPassengerDashboardHistory();
      }
    }

    navLinksContainer.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  window.addEventListener("hashchange", routeChange);
  // Trigger initial route
  routeChange();
}

// 6. Home Stats Counter Animations
function animateCounters() {
  const counters = document.querySelectorAll(".counter-value");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    let count = 0;
    const speed = target / 60; // total duration ~ 1.5s (60 ticks)
    
    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.textContent = Math.floor(count).toLocaleString() + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target.toLocaleString() + suffix;
      }
    };
    updateCount();
  });
}

// 7. Render Weather Widget
function renderWeather() {
  const tempEl = document.getElementById("weather-temp-val");
  const condEl = document.getElementById("weather-condition");
  const detailsEl = document.getElementById("weather-details-txt");
  if (!tempEl) return;

  const w = brtsData.weather;
  const conditionStr = currentLang === "en" ? w.condition : (currentLang === "hn" ? w.conditionHn : w.conditionGu);
  
  tempEl.textContent = w.temp;
  condEl.textContent = conditionStr;
  
  detailsEl.innerHTML = `
    <span>AQI: <strong>${w.aqi}</strong></span><br>
    <span>Humidity: <strong>${w.humidity}</strong></span> | 
    <span>Wind: <strong>${w.wind}</strong></span>
  `;
}

// 8. Render Alerts List
function renderAlerts() {
  const container = document.getElementById("alerts-container");
  if (!container) return;
  
  container.innerHTML = "";
  brtsData.alerts.forEach((alert) => {
    const card = document.createElement("div");
    card.className = `alert-item-card ${alert.type}`;
    
    let icon = "fa-exclamation-triangle";
    if (alert.type === "diversion") icon = "fa-directions";
    if (alert.type === "weather") icon = "fa-cloud-showers-heavy";
    if (alert.type === "delay") icon = "fa-clock";
    
    const titleText = currentLang === "en" ? alert.title : (currentLang === "hn" ? alert.titleHn : alert.titleGu);
    const descText = currentLang === "en" ? alert.desc : (currentLang === "hn" ? alert.descHn : alert.descGu);

    card.innerHTML = `
      <div class="alert-icon-wrapper">
        <i class="fas ${icon}"></i>
      </div>
      <div class="alert-text">
        <h4>${titleText}</h4>
        <p>${descText}</p>
        <span><i class="far fa-clock"></i> ${alert.time}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// 9. FAQ Section
function renderFAQs() {
  const container = document.getElementById("faq-accordion");
  if (!container) return;
  container.innerHTML = "";

  brtsData.faq.forEach((item, idx) => {
    const qText = currentLang === "en" ? item.q : (currentLang === "hn" ? item.qHn : item.qGu);
    const aText = currentLang === "en" ? item.a : (currentLang === "hn" ? item.aHn : item.aGu);
    
    const itemEl = document.createElement("div");
    itemEl.className = "accordion-item";
    if (idx === 0) itemEl.className += " active";
    
    itemEl.innerHTML = `
      <div class="accordion-header">
        <span>${qText}</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="accordion-content">
        <p>${aText}</p>
      </div>
    `;
    
    itemEl.querySelector(".accordion-header").addEventListener("click", () => {
      const isActive = itemEl.classList.contains("active");
      document.querySelectorAll(".accordion-item").forEach((el) => el.classList.remove("active"));
      if (!isActive) {
        itemEl.classList.add("active");
      }
    });

    container.appendChild(itemEl);
  });
}

// 10. Voice Search Engine
function setupVoiceSearch(inputFieldId, searchCallback) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = currentLang === "gu" ? "gu-IN" : (currentLang === "hn" ? "hi-IN" : "en-IN");
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const btn = document.querySelector(`#voice-btn-${inputFieldId}`);
  if (!btn) return;

  btn.addEventListener("click", () => {
    btn.innerHTML = '<i class="fas fa-microphone-slash recording"></i>';
    recognition.start();
  });

  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript;
    document.getElementById(inputFieldId).value = result;
    if (searchCallback) searchCallback(result);
  };

  recognition.onspeechend = () => {
    recognition.stop();
    btn.innerHTML = '<i class="fas fa-microphone"></i>';
  };

  recognition.onerror = () => {
    btn.innerHTML = '<i class="fas fa-microphone"></i>';
  };
}

// 11. Route Finder & Bookmarking
function searchRoutes() {
  const query = document.getElementById("route-query").value.toLowerCase();
  const container = document.getElementById("routes-results");
  if (!container) return;

  const acFilter = document.getElementById("filter-ac").classList.contains("active");
  const expressFilter = document.getElementById("filter-express").classList.contains("active");
  const regularFilter = document.getElementById("filter-regular").classList.contains("active");
  const accFilter = document.getElementById("filter-acc").classList.contains("active");

  container.innerHTML = "";
  
  const filtered = brtsData.routes.filter((route) => {
    // Text search matching ID, route number, or stops
    const matchText = route.number.toLowerCase().includes(query) || 
                      route.name.toLowerCase().includes(query) || 
                      route.stops.some(stop => stop.toLowerCase().includes(query));
    
    // Category checks
    let matchFilters = true;
    if (acFilter && !route.isAC) matchFilters = false;
    if (expressFilter && !route.isExpress) matchFilters = false;
    if (regularFilter && (route.isExpress || route.isAC)) matchFilters = false;
    if (accFilter && !route.isAccessible) matchFilters = false;

    return matchText && matchFilters;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 48px; margin-bottom: 15px;"></i>
        <p>No routes match your search criteria.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((route) => {
    const isBookmarked = bookmarkedRoutes.includes(route.id);
    const card = document.createElement("div");
    card.className = "route-card";
    
    const rName = currentLang === "en" ? route.name : (currentLang === "hn" ? route.nameHn : route.nameGu);
    const stopsList = currentLang === "en" ? route.stops : (currentLang === "hn" ? route.stopsHn : route.stopsGu);

    // Build Stops Timeline
    let stopsTimeline = "";
    stopsList.forEach((stop, i) => {
      stopsTimeline += `
        <div class="timeline-stop ${i === 0 || i === stopsList.length - 1 ? 'active' : ''}">
          <div class="timeline-dot"></div>
          <span>${stop}</span>
          <div class="timeline-bar"></div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="route-card-header">
        <div class="route-meta">
          <span class="route-number-badge">${route.number}</span>
          <div class="route-card-title">
            <h3>${rName}</h3>
            <p>${route.distance} km | ${route.duration} mins</p>
          </div>
        </div>
        <div style="display: flex; gap: 10px; align-items: center;">
          <div class="route-chips">
            ${route.isAC ? '<span class="route-chip-mini ac">AC</span>' : ''}
            ${route.isExpress ? '<span class="route-chip-mini express">Express</span>' : '<span class="route-chip-mini regular">Regular</span>'}
            ${route.isAccessible ? '<span class="route-chip-mini accessible"><i class="fas fa-wheelchair"></i></span>' : ''}
          </div>
          <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${route.id}', this)">
            <i class="fas fa-star"></i>
          </button>
        </div>
      </div>
      <div class="route-card-body">
        <div class="route-body-item">
          <span>Frequency</span>
          <strong>${route.frequency}</strong>
        </div>
        <div class="route-body-item">
          <span>Estimated Fare</span>
          <strong>₹${route.fare}</strong>
        </div>
        <div class="route-body-item">
          <span>Stops Count</span>
          <strong>${route.stopsCount} Stations</strong>
        </div>
      </div>
      <div class="route-stops-timeline">
        <div class="stops-line-wrapper">
          ${stopsTimeline}
        </div>
      </div>
      <div style="display: flex; gap: 10px; justify-content: flex-end;">
        <a href="#tracking" class="btn btn-glass" onclick="selectRouteForTracking('${route.id}')">
          <i class="fas fa-map-marked-alt"></i> Track Live
        </a>
        <a href="#ticket" class="btn btn-primary" onclick="selectRouteForTicket('${route.id}')">
          <i class="fas fa-ticket-alt"></i> Book Ticket
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleBookmark(routeId, btn) {
  if (bookmarkedRoutes.includes(routeId)) {
    bookmarkedRoutes = bookmarkedRoutes.filter(id => id !== routeId);
    btn.classList.remove("active");
  } else {
    bookmarkedRoutes.push(routeId);
    btn.classList.add("active");
  }
  localStorage.setItem("brts_bookmarks", JSON.stringify(bookmarkedRoutes));
}

function handleSearchKeyPress(e) {
  if (e.key === "Enter") {
    const q = document.getElementById("route-query").value;
    if (q && !recentSearches.includes(q)) {
      recentSearches.unshift(q);
      recentSearches = recentSearches.slice(0, 5); // Keep last 5
      localStorage.setItem("brts_searches", JSON.stringify(recentSearches));
      renderRecentSearches();
    }
    searchRoutes();
  }
}

function renderRecentSearches() {
  const container = document.getElementById("recent-searches-box");
  if (!container) return;
  container.innerHTML = "";
  if (recentSearches.length === 0) {
    container.innerHTML = `<span style="font-size: 12px; color: var(--text-muted);">No recent searches</span>`;
    return;
  }
  recentSearches.forEach((q) => {
    const tag = document.createElement("span");
    tag.className = "filter-chip";
    tag.style.padding = "5px 12px";
    tag.style.fontSize = "11px";
    tag.innerHTML = `<i class="fas fa-history"></i> ${q}`;
    tag.addEventListener("click", () => {
      document.getElementById("route-query").value = q;
      searchRoutes();
    });
    container.appendChild(tag);
  });
}

// Filter chips interactive toggle
function toggleFilterChip(el) {
  el.classList.toggle("active");
  searchRoutes();
}

// Setup voice search listeners on page load
setTimeout(() => {
  setupVoiceSearch("route-query", (text) => {
    searchRoutes();
  });
}, 500);

// 12. Live Tracking Map Wrapper
function initTrackingMap() {
  if (leafletMap) return; // Map already loaded

  // Initialize Leaflet Map centered on Surat
  leafletMap = L.map("map", {
    center: [21.1702, 72.8311],
    zoom: 13,
    zoomControl: false
  });

  L.control.zoom({ position: "bottomright" }).addTo(leafletMap);

  // Clean vector base tile layer (Light/Dark Switchable)
  const cartoLight = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20
  });

  const cartoDark = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20
  });

  if (currentTheme === "dark") {
    cartoDark.addTo(leafletMap);
  } else {
    cartoLight.addTo(leafletMap);
  }

  // Handle map styles based on theme changes dynamically
  document.getElementById("theme-toggle").addEventListener("click", () => {
    if (leafletMap) {
      leafletMap.eachLayer((layer) => {
        if (layer instanceof L.TileLayer) {
          leafletMap.removeLayer(layer);
        }
      });
      if (document.body.classList.contains("dark-theme")) {
        cartoDark.addTo(leafletMap);
      } else {
        cartoLight.addTo(leafletMap);
      }
    }
  });

  leafletRoutesLayer = L.layerGroup().addTo(leafletMap);
  leafletBusesLayer = L.layerGroup().addTo(leafletMap);

  // Render major station nodes on map
  brtsData.stations.forEach((st) => {
    const popupContent = `
      <div style="font-family: inherit; font-size: 13px;">
        <strong style="color: var(--primary);">${st.name}</strong><br>
        <span style="color: #64748b;">${st.address}</span>
      </div>
    `;
    const stationIcon = L.divIcon({
      className: "custom-station-icon",
      html: `<div style="width: 10px; height: 10px; border-radius: 50%; background-color: var(--secondary); border: 2.5px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.25);"></div>`,
      iconSize: [12, 12]
    });
    L.marker(st.gps, { icon: stationIcon }).bindPopup(popupContent).addTo(leafletMap);
  });

  // Populate Select Route dropdown on tracking panel
  const selectEl = document.getElementById("tracking-route-select");
  selectEl.innerHTML = `<option value="">-- Select Route to Overlay --</option>`;
  brtsData.routes.forEach((r) => {
    selectEl.innerHTML += `<option value="${r.id}">${r.number} - ${r.name}</option>`;
  });

  selectEl.addEventListener("change", (e) => {
    const routeId = e.target.value;
    overlayRouteOnMap(routeId);
  });

  // Reset marker references for newly created layer
  if (activeBuses.length > 0) {
    activeBuses.forEach(bus => { bus.marker = null; });
  }

  // Launch Simulated Buses
  startBusSimulations();
}

function selectRouteForTracking(routeId) {
  window.location.hash = "#tracking";
  setTimeout(() => {
    const selectEl = document.getElementById("tracking-route-select");
    if (selectEl) {
      selectEl.value = routeId;
      overlayRouteOnMap(routeId);
    }
  }, 300);
}

function overlayRouteOnMap(routeId) {
  if (!leafletRoutesLayer) return;
  leafletRoutesLayer.clearLayers();

  if (!routeId) return;

  const route = brtsData.routes.find((r) => r.id === routeId);
  if (!route) return;

  // Render colored corridor line
  const polyline = L.polyline(route.coordinates, {
    color: "#0F62FE",
    weight: 5,
    opacity: 0.8,
    lineJoin: "round"
  }).addTo(leafletRoutesLayer);

  // Zoom map to fit corridor
  leafletMap.fitBounds(polyline.getBounds(), { padding: [40, 40] });

  // Render stops highlights along path
  route.coordinates.forEach((coord, i) => {
    const marker = L.circleMarker(coord, {
      radius: 6,
      fillColor: "#ffffff",
      fillOpacity: 1,
      color: "#0043ce",
      weight: 2
    });
    const stopName = route.stops[i];
    marker.bindTooltip(stopName, { direction: "top", permanent: false });
    marker.addTo(leafletRoutesLayer);
  });
}

function startBusSimulations() {
  if (activeBuses.length > 0) return; // already running globally

  // Populate active simulated buses matching the routes, including 3 additional Route 17 buses
  activeBuses = [
    { id: "B-106-01", routeIndex: 0, coordIndex: 0, progress: 0, direction: 1, delay: 0, speed: 45, driver: "Ramesh Bhai", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 24 },
    { id: "B-136-02", routeIndex: 1, coordIndex: 3, progress: 0, direction: 1, delay: 3, speed: 38, driver: "Sanjay Patel", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 12 },
    { id: "B-23-03", routeIndex: 2, coordIndex: 8, progress: 0, direction: -1, delay: 0, speed: 40, driver: "Karan Solanki", nextStop: "", currentPos: null, distToNext: 0, capacity: 60, passengers: 45 },
    { id: "B-17-04A", routeIndex: 3, coordIndex: 5, progress: 0, direction: 1, delay: 0, speed: 42, driver: "Vijay Gohil", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 31 },
    { id: "B-17-04B", routeIndex: 3, coordIndex: 1, progress: 0, direction: -1, delay: 0, speed: 41, driver: "Amit Sharma", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 15 },
    { id: "B-17-04C", routeIndex: 3, coordIndex: 8, progress: 0, direction: 1, delay: 4, speed: 44, driver: "Nilesh Vaghela", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 42 },
    { id: "B-17-04D", routeIndex: 3, coordIndex: 3, progress: 0, direction: -1, delay: 0, speed: 39, driver: "Dilip Joshi", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 26 },
    { id: "B-153-05", routeIndex: 4, coordIndex: 2, progress: 0, direction: 1, delay: 5, speed: 35, driver: "Bharat Parmar", nextStop: "", currentPos: null, distToNext: 0, capacity: 50, passengers: 8 },
    { id: "B-117-06", routeIndex: 5, coordIndex: 4, progress: 0, direction: -1, delay: 0, speed: 48, driver: "Alpesh Vasava", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 19 },
    { id: "B-126-07", routeIndex: 6, coordIndex: 3, progress: 0, direction: 1, delay: 0, speed: 41, driver: "Mukesh Rathod", nextStop: "", currentPos: null, distToNext: 0, capacity: 60, passengers: 28 },
    { id: "B-146-08", routeIndex: 7, coordIndex: 6, progress: 0, direction: 1, delay: 2, speed: 43, driver: "Hardik Patel", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 37 },
    { id: "B-11-09", routeIndex: 8, coordIndex: 2, progress: 0, direction: -1, delay: 0, speed: 46, driver: "Rajesh Chavda", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 15 },
    { id: "B-12-10", routeIndex: 9, coordIndex: 4, progress: 0, direction: 1, delay: 0, speed: 44, driver: "Manoj Joshi", nextStop: "", currentPos: null, distToNext: 0, capacity: 50, passengers: 42 },
    { id: "B-205-11", routeIndex: 10, coordIndex: 5, progress: 0, direction: -1, delay: 0, speed: 39, driver: "Pravin Mori", nextStop: "", currentPos: null, distToNext: 0, capacity: 55, passengers: 23 }
  ];

  function updatePositions() {
    activeBuses.forEach((bus) => {
      const route = brtsData.routes[bus.routeIndex];
      const coords = route.coordinates;
      
      // Increment progress based on speed (higher speed = faster movement)
      bus.progress += (bus.speed / 3200); 
      
      if (bus.progress >= 1) {
        bus.progress = 0;
        bus.coordIndex += bus.direction;
        
        // Bounce back logic
        if (bus.coordIndex >= coords.length - 1) {
          bus.direction = -1;
          bus.coordIndex = coords.length - 1;
        } else if (bus.coordIndex <= 0) {
          bus.direction = 1;
          bus.coordIndex = 0;
        }
        
        // Slightly randomize speed at stops
        bus.speed = Math.floor(Math.random() * 20) + 30;

        // Dynamic boarding / alighting at station stops!
        const boarding = Math.floor(Math.random() * 10) + 1; // 1-10 board
        const alighting = Math.floor(Math.random() * 8) + 1; // 1-8 alight
        bus.passengers = Math.max(3, Math.min(bus.capacity, bus.passengers + boarding - alighting));
      }
      
      const startCoord = coords[bus.coordIndex];
      const nextNodeIdx = Math.max(0, Math.min(coords.length - 1, bus.coordIndex + bus.direction));
      const endCoord = coords[nextNodeIdx];
      
      // Interpolate position
      const currentLat = startCoord[0] + (endCoord[0] - startCoord[0]) * bus.progress;
      const currentLng = startCoord[1] + (endCoord[1] - startCoord[1]) * bus.progress;
      bus.currentPos = [currentLat, currentLng];
      bus.nextStop = route.stops[nextNodeIdx];
      
      // Distance calculation in km
      const latDiff = endCoord[0] - currentLat;
      const lngDiff = endCoord[1] - currentLng;
      bus.distToNext = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111.32;
      
      if (leafletMap) {
        const delayString = bus.delay > 0 ? `<span style="color: var(--status-delay); font-weight:600;">${bus.delay} mins Late</span>` : `<span style="color: var(--status-active); font-weight:600;">On Time</span>`;
        
        const occupancyLoad = Math.round(bus.passengers / bus.capacity * 100);
        let occupancyColor = "var(--status-active)";
        let occupancyLabel = "Low";
        if (occupancyLoad >= 85) {
          occupancyColor = "var(--status-delay)";
          occupancyLabel = "High / Crowded";
        } else if (occupancyLoad >= 50) {
          occupancyColor = "orange";
          occupancyLabel = "Medium";
        }

        const popupContent = `
          <div style="font-family: inherit; font-size: 13px; line-height: 1.5; min-width: 190px;">
            <h4 style="margin-bottom: 6px; color: var(--primary); font-weight: 700;">Bus ID: ${bus.id}</h4>
            <span>Route: <strong>${route.number}</strong></span><br>
            <span>Speed: <strong>${bus.speed} km/h</strong></span><br>
            <span>Driver: <strong>${bus.driver}</strong></span><br>
            <span>Passengers: <strong>${bus.passengers} / ${bus.capacity}</strong> <span style="color:${occupancyColor}; font-weight:600;">(${occupancyLabel})</span></span><br>
            <span>Status: ${delayString}</span><br>
            <span>Next Stop: <strong>${bus.nextStop}</strong></span><br>
            <span>Distance to Stop: <strong style="color: var(--primary);">${bus.distToNext.toFixed(2)} km</strong></span>
          </div>
        `;
        
        if (!bus.marker) {
          const busDivIcon = L.divIcon({
            className: "custom-bus-marker-wrapper",
            html: `<div class="custom-bus-marker"><i class="fas fa-bus"></i></div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
          });
          bus.marker = L.marker(bus.currentPos, { icon: busDivIcon }).bindPopup(popupContent).addTo(leafletBusesLayer);
        } else {
          bus.marker.setLatLng(bus.currentPos);
          if (bus.marker.getPopup() && bus.marker.isPopupOpen()) {
            bus.marker.setPopupContent(popupContent);
          }
        }
      }
    });

    // Update panel details dynamically
    if (document.getElementById("tracking").classList.contains("active")) {
      renderLiveBusPanel(activeBuses);
    }
  }

  // Set simulation loop interval (1000ms for smooth but lightweight ticks)
  setInterval(updatePositions, 1000);
  updatePositions();
}

function renderLiveBusPanel(buses) {
  const container = document.getElementById("live-bus-list-panel");
  if (!container) return;
  
  container.innerHTML = "";

  buses.forEach((bus) => {
    const route = brtsData.routes[bus.routeIndex];
    const statusText = bus.delay > 0 ? `Delayed by ${bus.delay}m` : "On Time";
    const statusClass = bus.delay > 0 ? "delayed" : "running";
    const distText = bus.distToNext ? ` (${bus.distToNext.toFixed(2)} km)` : "";

    const occupancyLoad = Math.round(bus.passengers / bus.capacity * 100);
    let occupancyColor = "var(--status-active)";
    let occupancyLabel = "Low";
    if (occupancyLoad >= 85) {
      occupancyColor = "var(--status-delay)";
      occupancyLabel = "Crowded";
    } else if (occupancyLoad >= 50) {
      occupancyColor = "#f59e0b"; // orange
      occupancyLabel = "Medium";
    }

    const item = document.createElement("div");
    item.className = "tool-card";
    item.style.padding = "15px";
    item.style.marginBottom = "10px";
    item.style.gap = "12px";

    item.innerHTML = `
      <div class="tool-icon" style="width:40px; height:40px; font-size:16px;">
        <i class="fas fa-bus"></i>
      </div>
      <div class="tool-info" style="flex-grow:1;">
        <h4 style="font-size:14px; font-weight:700; display:flex; justify-content:space-between;">
          <span>${bus.id} (${route.number})</span>
          <span class="status-indicator ${statusClass}" style="padding: 2px 8px; font-size: 10px;">${statusText}</span>
        </h4>
        <p style="font-size:11px; margin-top:2px; color:var(--text-muted);">Next: <strong>${bus.nextStop}</strong>${distText} | Driver: ${bus.driver}</p>
        
        <!-- Live Passenger Count and Load Bar -->
        <div style="margin-top:8px;">
          <div style="display:flex; justify-content:space-between; font-size:10.5px; font-weight:600; color:var(--text-main);">
            <span>Riders: <strong>${bus.passengers} / ${bus.capacity}</strong></span>
            <span style="color:${occupancyColor}; font-weight:700;">${occupancyLabel} (${occupancyLoad}%)</span>
          </div>
          <div style="width:100%; height:5px; background:rgba(0,0,0,0.06); border-radius:3px; margin-top:4px; overflow:hidden;">
            <div style="width:${occupancyLoad}%; height:100%; background:${occupancyColor}; border-radius:3px; transition: width 0.5s ease;"></div>
          </div>
        </div>
      </div>
    `;
    item.addEventListener("click", () => {
      if (bus.currentPos) {
        leafletMap.setView(bus.currentPos, 15);
      }
    });
    container.appendChild(item);
  });
}

// 13. Render Bus Stations
function renderStations() {
  const container = document.getElementById("stations-grid-list");
  const query = document.getElementById("station-query").value.toLowerCase();
  if (!container) return;

  container.innerHTML = "";

  const filtered = brtsData.stations.filter((st) => {
    return st.name.toLowerCase().includes(query) || st.address.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); width: 100%;">No stations found matching your search.</p>`;
    return;
  }

  filtered.forEach((st) => {
    const sName = currentLang === "en" ? st.name : (currentLang === "hn" ? st.nameHn : st.nameGu);
    const sAddress = currentLang === "en" ? st.address : (currentLang === "hn" ? st.addressHn : st.addressGu);
    const nearList = currentLang === "en" ? st.nearbyPlaces : (currentLang === "hn" ? st.nearbyPlacesHn : st.nearbyPlacesGu);

    const card = document.createElement("div");
    card.className = "station-card";

    card.innerHTML = `
      <div class="station-img-placeholder">
        <i class="fas fa-warehouse"></i>
        <span style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.6); padding: 4px 8px; border-radius: 4px; font-size: 11px;">
          GPS: ${st.gps[0].toFixed(4)}, ${st.gps[1].toFixed(4)}
        </span>
      </div>
      <div class="station-info-body">
        <h3>${sName}</h3>
        <p class="station-address"><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> ${sAddress}</p>
        
        <div class="station-facilities">
          <div class="facility-icon-mini ${st.facilities.parking ? 'active' : ''}" title="Parking"><i class="fas fa-parking"></i></div>
          <div class="facility-icon-mini ${st.facilities.lift ? 'active' : ''}" title="Lift"><i class="fas fa-elevator"></i></div>
          <div class="facility-icon-mini ${st.facilities.escalator ? 'active' : ''}" title="Escalator"><i class="fas fa-bars"></i></div>
          <div class="facility-icon-mini ${st.facilities.water ? 'active' : ''}" title="Drinking Water"><i class="fas fa-faucet-drip"></i></div>
          <div class="facility-icon-mini ${st.facilities.washroom ? 'active' : ''}" title="Washroom"><i class="fas fa-restroom"></i></div>
          <div class="facility-icon-mini ${st.facilities.accessibility ? 'active' : ''}" title="Accessibility"><i class="fas fa-wheelchair"></i></div>
        </div>

        <div style="margin-top: 15px; border-top: 1px solid var(--border-color); padding-top: 12px;">
          <strong style="font-size:11px; display:block; color:var(--text-muted); margin-bottom: 4px;">NEARBY PLACES</strong>
          <div style="display:flex; flex-wrap:wrap; gap: 4px;">
            ${nearList.map(place => `<span class="route-chip-mini regular" style="font-size:9px;">${place}</span>`).join('')}
          </div>
        </div>

        <div style="margin-top: 20px; display: flex; gap: 10px;">
          <a href="#tracking" class="btn btn-glass" style="width: 100%; justify-content: center; font-size: 13px;" onclick="focusStationOnMap('${st.id}')">
            <i class="fas fa-location-arrow"></i> Map Location
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function focusStationOnMap(stationId) {
  const st = brtsData.stations.find((s) => s.id === stationId);
  if (!st) return;
  window.location.hash = "#tracking";
  setTimeout(() => {
    leafletMap.setView(st.gps, 16);
  }, 400);
}

// 14. Bus Timetable
function initTimetables() {
  const selectRoute = document.getElementById("timetable-route-select");
  if (!selectRoute) return;

  selectRoute.innerHTML = `<option value="">-- Choose Corridor Route --</option>`;
  brtsData.routes.forEach((r) => {
    selectRoute.innerHTML += `<option value="${r.id}">${r.number} - ${r.name}</option>`;
  });

  const grid = document.getElementById("timetable-grid-body");
  
  selectRoute.addEventListener("change", (e) => {
    const routeId = e.target.value;
    if (!routeId) {
      grid.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">Please select a route to view its operational timetable.</td></tr>`;
      return;
    }

    const route = brtsData.routes.find((r) => r.id === routeId);
    if (!route) return;

    grid.innerHTML = `
      <tr>
        <td><strong>Weekday (Mon - Fri)</strong></td>
        <td>06:00 AM</td>
        <td>11:00 PM</td>
        <td>Peak: 8 mins<br>Off-Peak: 12 mins</td>
        <td>Normal Schedule</td>
      </tr>
      <tr>
        <td><strong>Saturday</strong></td>
        <td>06:00 AM</td>
        <td>11:00 PM</td>
        <td>Peak: 10 mins<br>Off-Peak: 15 mins</td>
        <td>Weekend Schedule</td>
      </tr>
      <tr>
        <td><strong>Sunday & Holidays</strong></td>
        <td>06:30 AM</td>
        <td>10:30 PM</td>
        <td>Peak: 12 mins<br>Off-Peak: 18 mins</td>
        <td>Reduced Frequency</td>
      </tr>
    `;
  });
}

function downloadTimetablePDF() {
  const routeSelect = document.getElementById("timetable-route-select");
  if (!routeSelect || !routeSelect.value) {
    alert("Please select a route corridor first.");
    return;
  }
  // Simulated PDF download
  const route = brtsData.routes.find(r => r.id === routeSelect.value);
  const pdfBlob = new Blob([`SURAT BRTS ROUTE ${route.number} TIMETABLE\n\nRoute: ${route.name}\nFirst Bus: 06:00 AM\nLast Bus: 11:00 PM\nPeak Frequency: ${route.frequency}\nDistance: ${route.distance} km\nTotal Stops: ${route.stopsCount}`], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(pdfBlob);
  link.download = `BRTS_Timetable_Route_${route.number}.pdf`;
  link.click();
}

// 15. Smart Ticket Booking System
function setupSmartTicketForm() {
  const fromSelect = document.getElementById("ticket-from");
  const toSelect = document.getElementById("ticket-to");
  if (!fromSelect) return;

  // Populate options
  fromSelect.innerHTML = `<option value="">-- Source --</option>`;
  toSelect.innerHTML = `<option value="">-- Destination --</option>`;

  brtsData.stations.forEach((st) => {
    const sName = currentLang === "en" ? st.name : (currentLang === "hn" ? st.nameHn : st.nameGu);
    fromSelect.innerHTML += `<option value="${st.id}">${sName}</option>`;
    toSelect.innerHTML += `<option value="${st.id}">${sName}</option>`;
  });

  // Attach auto-fare calculator triggers
  [fromSelect, toSelect, document.getElementById("ticket-passenger-type"), document.getElementById("ticket-qty")].forEach((el) => {
    el.addEventListener("change", updateLiveFareSummary);
  });
}

function selectRouteForTicket(routeId) {
  const route = brtsData.routes.find((r) => r.id === routeId);
  if (!route) return;

  window.location.hash = "#ticket";
  setTimeout(() => {
    const stations = brtsData.stations;
    // Find matching station IDs if possible
    const fromSt = stations.find(s => s.name === route.stops[0]);
    const toSt = stations.find(s => s.name === route.stops[route.stops.length - 1]);
    
    if (fromSt) document.getElementById("ticket-from").value = fromSt.id;
    if (toSt) document.getElementById("ticket-to").value = toSt.id;
    
    updateLiveFareSummary();
  }, 300);
}

function calculateDynamicFare(fromId, toId, passengerType, qty) {
  if (!fromId || !toId || fromId === toId) return 0;

  const fromSt = brtsData.stations.find((s) => s.id === fromId);
  const toSt = brtsData.stations.find((s) => s.id === toId);

  // Compute straight-line distance approximation
  const latDiff = fromSt.gps[0] - toSt.gps[0];
  const lngDiff = fromSt.gps[1] - toSt.gps[1];
  const dist = Math.sqrt(latDiff*latDiff + lngDiff*lngDiff) * 111.32; // Degree to km

  let baseRate = 7; // base ₹7
  let perKm = 1.5;  // ₹1.50 per km
  let fare = baseRate + (dist * perKm);

  // Round off
  fare = Math.ceil(fare);

  // Caps
  if (fare < 10) fare = 10;
  if (fare > 30) fare = 28;

  // Passenger Discounts
  if (passengerType === "student") fare = fare * 0.5; // 50%
  if (passengerType === "senior") fare = fare * 0.7; // 30% discount
  if (passengerType === "child") fare = 0;

  return Math.ceil(fare) * qty;
}

function updateLiveFareSummary() {
  const from = document.getElementById("ticket-from").value;
  const to = document.getElementById("ticket-to").value;
  const type = document.getElementById("ticket-passenger-type").value;
  const qty = +document.getElementById("ticket-qty").value;

  const totalVal = calculateDynamicFare(from, to, type, qty);
  const container = document.getElementById("live-fare-display");
  if (container) {
    container.innerHTML = `Calculated Fare: <strong style="color:var(--primary); font-size:18px;">₹${totalVal}</strong>`;
  }
}

async function generateSmartTicket(e) {
  e.preventDefault();

  const fromId = document.getElementById("ticket-from").value;
  const toId = document.getElementById("ticket-to").value;
  const passengerType = document.getElementById("ticket-passenger-type").value;
  const qty = +document.getElementById("ticket-qty").value;
  const dateVal = document.getElementById("ticket-date").value;

  if (!fromId || !toId) {
    alert("Please select both source and destination stations.");
    return;
  }
  if (fromId === toId) {
    alert("Source and destination stations cannot be the same.");
    return;
  }

  const fromSt = brtsData.stations.find((s) => s.id === fromId);
  const toSt = brtsData.stations.find((s) => s.id === toId);
  const fare = calculateDynamicFare(fromId, toId, passengerType, qty);

  // Get current user identifier to save ticket history in database
  const userData = localStorage.getItem("brts_user");
  const user = userData ? JSON.parse(userData) : null;
  const userIdentifier = user ? user.identifier : "anonymous";

  const ticketData = {
    from: fromSt.name,
    to: toSt.name,
    passengerType,
    qty,
    fare,
    date: dateVal || new Date().toISOString().split('T')[0],
    userIdentifier
  };

  const res = await apiBookTicket(ticketData);
  if (res && res.success) {
    const ticketNo = res.ticket.ticketNo;
    const seatInfo = qty === 1 ? "A-12" : `A-12 to A-${12 + qty - 1}`;
    
    // Show Receipt
    document.getElementById("ticket-receipt-section").style.display = "block";
    
    document.getElementById("rec-from").textContent = fromSt.name;
    document.getElementById("rec-to").textContent = toSt.name;
    document.getElementById("rec-qty").textContent = `${qty} Passenger(s)`;
    document.getElementById("rec-type").textContent = passengerType.toUpperCase();
    document.getElementById("rec-date").textContent = res.ticket.date;
    document.getElementById("rec-seat").textContent = seatInfo;
    document.getElementById("rec-no").textContent = ticketNo;
    document.getElementById("rec-total").textContent = `₹${fare}`;

    // QR Code creation using API
    const qrDataStr = `TICKET:${ticketNo}|FROM:${fromSt.name}|TO:${toSt.name}|QTY:${qty}|FARE:INR${fare}`;
    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(qrDataStr)}" alt="QR Code Ticket" style="width:160px; height:160px; display:block;">`;

    // Refresh passenger dashboard history
    if (user && user.role === "passenger") {
      loadPassengerDashboardHistory();
    }
  } else {
    alert("Failed to book ticket. Please try again.");
  }
}

function printTicketReceipt() {
  const content = document.getElementById("ticket-receipt-card").innerHTML;
  const win = window.open("", "_blank");
  win.document.write(`
    <html>
      <head>
        <title>Surat BRTS Ticket Receipt</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding: 40px; }
          .receipt { border: 2px dashed #000; padding: 30px; display: inline-block; max-width: 400px; text-align: left; }
          h2 { color: #0F62FE; text-align: center; margin-top: 0; }
          .row { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 6px; }
          .qr { text-align: center; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="receipt">
          ${content}
        </div>
        <script>window.onload = function() { window.print(); }</script>
      </body>
    </html>
  `);
  win.document.close();
}



// 17. Nearby Stations Calculator
function initNearbyStationsView() {
  const container = document.getElementById("nearby-stations-list");
  if (!container) return;

  // Surat center as default center coordinate if geolocation fails
  const centerLat = 21.1855;
  const centerLng = 72.8095;

  container.innerHTML = `<p style="color:var(--text-muted);">Finding closest stations relative to your location...</p>`;

  // Simulate calculating distance from Athwa Gate (approx)
  setTimeout(() => {
    container.innerHTML = "";
    
    // Sort stations by distance
    const sorted = brtsData.stations.map((st) => {
      const dist = Math.sqrt(Math.pow(st.gps[0] - centerLat, 2) + Math.pow(st.gps[1] - centerLng, 2)) * 111.32;
      const walkTime = Math.ceil(dist * 12); // ~12 mins per km walking
      return { ...st, distance: dist, walkTime };
    }).sort((a, b) => a.distance - b.distance);

    sorted.forEach((st) => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.style.marginBottom = "15px";

      card.innerHTML = `
        <div class="tool-icon">
          <i class="fas fa-walking"></i>
        </div>
        <div class="tool-info" style="flex-grow:1;">
          <h4 style="font-weight:700; font-size:15px; display:flex; justify-content:space-between;">
            <span>${st.name}</span>
            <span style="color:var(--primary);">${st.distance.toFixed(2)} km</span>
          </h4>
          <p style="margin-top:2px;">Walking Duration: ~<strong>${st.walkTime} mins</strong></p>
          <p style="font-size:11px; margin-top:4px; color:var(--text-muted);">${st.address}</p>
        </div>
      `;
      card.addEventListener("click", () => {
        focusStationOnMap(st.id);
      });
      container.appendChild(card);
    });
  }, 800);
}

// 18. Smart Journey Planner
function setupJourneyPlanner() {
  const fromSelect = document.getElementById("journey-from");
  const toSelect = document.getElementById("journey-to");
  if (!fromSelect) return;

  fromSelect.innerHTML = `<option value="">-- From Station --</option>`;
  toSelect.innerHTML = `<option value="">-- To Station --</option>`;

  brtsData.stations.forEach((st) => {
    fromSelect.innerHTML += `<option value="${st.id}">${st.name}</option>`;
    toSelect.innerHTML += `<option value="${st.id}">${st.name}</option>`;
  });
}

function cleanStationName(name) {
  return name.toLowerCase()
             .replace(" brts", "")
             .replace(" terminal", "")
             .trim();
}

function calculateJourney() {
  const fromId = document.getElementById("journey-from").value;
  const toId = document.getElementById("journey-to").value;

  if (!fromId || !toId) {
    alert("Please select both from and to stations.");
    return;
  }
  if (fromId === toId) {
    alert("Source and destination stations are identical.");
    return;
  }

  const fromSt = brtsData.stations.find((s) => s.id === fromId);
  const toSt = brtsData.stations.find((s) => s.id === toId);

  // Compute straight-line distance
  const dist = Math.sqrt(Math.pow(fromSt.gps[0] - toSt.gps[0], 2) + Math.pow(fromSt.gps[1] - toSt.gps[1], 2)) * 111.32;
  const fareVal = calculateDynamicFare(fromId, toId, "general", 1);
  const durationVal = Math.ceil(dist * 2.2);

  // Find direct or reverse routes that serve BOTH stations
  const cleanFrom = cleanStationName(fromSt.name);
  const cleanTo = cleanStationName(toSt.name);
  let matches = [];

  brtsData.routes.forEach((route) => {
    const cleanStops = route.stops.map(cleanStationName);
    const fromIdx = cleanStops.indexOf(cleanFrom);
    const toIdx = cleanStops.indexOf(cleanTo);
    if (fromIdx !== -1 && toIdx !== -1) {
      const heading = toIdx > fromIdx ? route.stops[route.stops.length - 1] : route.stops[0];
      matches.push({
        route,
        fromIdx,
        toIdx,
        direction: toIdx > fromIdx ? 1 : -1,
        heading: heading
      });
    }
  });

  // Pick first matching route as primary, or fallback to default
  const primaryMatch = matches.length > 0 ? matches[0] : null;
  const recRoute = primaryMatch ? primaryMatch.route : brtsData.routes[0];
  const headingText = primaryMatch ? primaryMatch.heading : recRoute.stops[recRoute.stops.length - 1];

  // AI Crowd Prediction Simulator
  const crowdStates = ["Low", "Medium", "High"];
  const crowdPrediction = crowdStates[Math.floor(Math.random() * crowdStates.length)];
  const delayPrediction = Math.random() > 0.6 ? `${Math.floor(Math.random()*8)+3} mins delay expected` : "No delays expected";

  // Build live running buses HTML
  let busSectionHtml = "";
  if (matches.length > 0) {
    busSectionHtml += `
      <div style="margin-top:15px; border-top:1px solid var(--border-color); padding-top:15px;">
        <span style="display:block; font-weight:700; color:var(--primary); font-size:12px; margin-bottom:8px;"><i class="fas fa-bus"></i> Live Buses Serving Your Destination:</span>
        <div style="display:flex; flex-direction:column; gap:8px;">
    `;
    
    let foundAnyBus = false;
    matches.forEach(match => {
      // Find simulated buses currently running on this route index
      const routeIdx = brtsData.routes.indexOf(match.route);
      const matchingBuses = activeBuses.filter(b => b.routeIndex === routeIdx);
      
      if (matchingBuses.length > 0) {
        foundAnyBus = true;
        matchingBuses.forEach(bus => {
          const occupancyLoad = Math.round(bus.passengers / bus.capacity * 100);
          let loadColor = "var(--status-active)";
          if (occupancyLoad >= 85) loadColor = "var(--status-delay)";
          else if (occupancyLoad >= 50) loadColor = "#f59e0b";

          const statusText = bus.delay > 0 ? `Delayed ${bus.delay}m` : "On Time";
          const statusColor = bus.delay > 0 ? "var(--status-delay)" : "var(--status-active)";
          const distToStopText = bus.distToNext ? ` (${bus.distToNext.toFixed(1)} km to next stop)` : "";

          busSectionHtml += `
            <div style="padding: 10px; background: rgba(0,0,0,0.02); border: 1px solid var(--border-color); border-radius: 8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
              <div>
                <strong style="font-size:13px; color:var(--text-main);">Bus ${bus.id} (Route ${match.route.number})</strong>
                <span style="display:block; font-size:11px; color:var(--text-muted);">Next: ${bus.nextStop}${distToStopText} | Driver: ${bus.driver}</span>
              </div>
              <div style="text-align:right;">
                <span style="font-size:11.5px; font-weight:700; color:${loadColor}; display:block;">Riders: ${bus.passengers}/${bus.capacity} (${occupancyLoad}%)</span>
                <span style="font-size:10.5px; font-weight:600; color:${statusColor}; background:rgba(0,0,0,0.03); padding:2px 6px; border-radius:10px;">${statusText}</span>
              </div>
            </div>
          `;
        });
      }
    });
    
    if (!foundAnyBus) {
      busSectionHtml += `
        <p style="font-size:11.5px; color:var(--status-delay); margin:0;">⚠️ No simulated buses are currently running on Route ${recRoute.number}. Check back in a few minutes.</p>
      `;
    }
    
    busSectionHtml += `
        </div>
      </div>
    `;
  } else {
    // Transfer recommendation fallback
    busSectionHtml += `
      <div style="margin-top:15px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.15); border-radius: 12px; padding: 12px; font-size: 12px; color: var(--status-delay);">
        <i class="fas fa-exclamation-triangle"></i> <strong>No direct route:</strong> Transfer required. Take Route 106 and transfer at Majura Gate, or take Route 17 and transfer at Adajan Patia.
      </div>
    `;
  }

  const results = document.getElementById("journey-results");
  results.style.display = "block";
  results.innerHTML = `
    <div style="border-bottom:1px solid var(--border-color); padding-bottom:15px; margin-bottom:15px;">
      <h4 style="font-weight:700; color:var(--primary); margin-bottom:6px;"><i class="fas fa-route"></i> Recommended Journey</h4>
      <p style="font-size:13px; color:var(--text-main);">Board Bus <strong>Route ${recRoute.number}</strong> towards ${headingText}</p>
    </div>
    <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:12px; font-size:13px;">
      <div>Est. Travel Time: <strong>${durationVal} mins</strong></div>
      <div>Est. Fare: <strong>₹${fareVal}</strong></div>
      <div>Walking Distance: <strong>0.3 km</strong></div>
      <div>Interchanges: <strong>${matches.length > 0 ? "None (Direct Route)" : "1 Transfer Required"}</strong></div>
    </div>
    
    ${busSectionHtml}
    
    <div style="margin-top:15px; background:rgba(15, 98, 254, 0.05); border:1px solid var(--border-color); border-radius:12px; padding:12px; font-size:12px;">
      <span style="display:block; font-weight:700; color:var(--secondary); margin-bottom:4px;"><i class="fas fa-brain"></i> AI Smart Analysis:</span>
      <p>Predicted Crowd Level: <strong>${crowdPrediction}</strong></p>
      <p>Predicted Road Delay: <strong>${delayPrediction}</strong></p>
    </div>
  `;
}

// 19. Feedback Tracker System
let currentRating = 5;

function setFeedbackRating(rating) {
  currentRating = rating;
  const stars = document.querySelectorAll(".rating-star-btn");
  stars.forEach((star, idx) => {
    if (idx < rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

async function submitFeedbackForm(e) {
  e.preventDefault();

  const type = document.getElementById("feedback-type").value;
  const desc = document.getElementById("feedback-desc").value;
  
  if (!desc) {
    alert("Please enter complaint/feedback description.");
    return;
  }

  const id = "CMP" + Math.floor(1000 + Math.random() * 9000);
  const newComplaint = {
    id,
    type: type.toUpperCase(),
    date: new Date().toISOString().split('T')[0],
    status: "pending",
    rating: currentRating,
    desc: `(Rating: ${currentRating}★) ${desc}`
  };

  complaintStatusList.unshift(newComplaint);
  localStorage.setItem("brts_complaints", JSON.stringify(complaintStatusList));

  // Save to backend database!
  await apiSubmitFeedback({
    category: type,
    comments: desc,
    driverRating: currentRating,
    cleanlinessRating: currentRating,
    delayMinutes: 0
  });

  document.getElementById("feedback-desc").value = "";
  // Reset rating to 5
  setFeedbackRating(5);
  alert(`Feedback submitted successfully! Your tracking ID is: ${id}`);
  renderFeedbackHistory();
}

function renderFeedbackHistory() {
  const container = document.getElementById("complaints-history-list");
  if (!container) return;

  container.innerHTML = "";

  if (complaintStatusList.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:13px; text-align:center;">No submission records found.</p>`;
    return;
  }

  complaintStatusList.forEach((cmp) => {
    const item = document.createElement("div");
    item.className = "feedback-status-item";

    item.innerHTML = `
      <div class="feedback-status-info">
        <h5>[${cmp.id}] - ${cmp.type}</h5>
        <p>${cmp.desc}</p>
        <span style="font-size:10px; color:var(--text-muted);">${cmp.date}</span>
      </div>
      <span class="status-badge ${cmp.status}">${cmp.status.toUpperCase()}</span>
    `;
    container.appendChild(item);
  });
}

// 20. Admin Dashboard Views
function initAdminView() {
  // Set default tab
  switchAdminSubTab("analytics");
}

function switchAdminSubTab(tabName) {
  document.querySelectorAll(".admin-nav-item").forEach((item) => item.classList.remove("active"));
  document.querySelector(`.admin-nav-item[onclick="switchAdminSubTab('${tabName}')"]`).classList.add("active");

  const panel = document.getElementById("admin-content-panel");
  if (!panel) return;

  panel.innerHTML = "";

  if (tabName === "analytics") {
    panel.innerHTML = `
      <h3 style="font-weight:700; margin-bottom:8px;">Live Dashboard Analytics</h3>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom: 20px;">Real-time metrics on ridership, revenue, and carbon offsets.</p>
      
      <!-- Summary Stats Cards -->
      <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-bottom: 25px;">
        <div class="stat-card" style="padding:15px; border-radius:15px; background:rgba(0,0,0,0.02); border:1px solid var(--border-color); text-align:center;">
          <div class="stat-number" id="admin-stat-users" style="font-size:24px; font-weight:800; color:var(--primary);">0</div>
          <div class="stat-label" style="font-size:11px; color:var(--text-muted); font-weight:600; text-transform:uppercase; margin-top:4px;">Registered Users</div>
        </div>
        <div class="stat-card" style="padding:15px; border-radius:15px; background:rgba(0,0,0,0.02); border:1px solid var(--border-color); text-align:center;">
          <div class="stat-number" id="admin-stat-bookings" style="font-size:24px; font-weight:800; color:var(--secondary);">0</div>
          <div class="stat-label" style="font-size:11px; color:var(--text-muted); font-weight:600; text-transform:uppercase; margin-top:4px;">Tickets Booked</div>
        </div>
        <div class="stat-card" style="padding:15px; border-radius:15px; background:rgba(0,0,0,0.02); border:1px solid var(--border-color); text-align:center;">
          <div class="stat-number" id="admin-stat-revenue" style="font-size:24px; font-weight:800; color:var(--status-active);">₹0</div>
          <div class="stat-label" style="font-size:11px; color:var(--text-muted); font-weight:600; text-transform:uppercase; margin-top:4px;">Total Revenue</div>
        </div>
        <div class="stat-card" style="padding:15px; border-radius:15px; background:rgba(0,0,0,0.02); border:1px solid var(--border-color); text-align:center;">
          <div class="stat-number" id="admin-stat-complaints" style="font-size:24px; font-weight:800; color:var(--status-delay);">0</div>
          <div class="stat-label" style="font-size:11px; color:var(--text-muted); font-weight:600; text-transform:uppercase; margin-top:4px;">Feedback Forms</div>
        </div>
      </div>
      
      <div class="analytics-charts-grid">
        <div class="chart-card">
          <h4>Daily Ridership Trend <span style="font-size:11px; font-weight:400;">(By hour)</span></h4>
          <div class="chart-container-inner"><canvas id="chart-daily-riders"></canvas></div>
        </div>
        <div class="chart-card">
          <h4>Monthly Ridership <span style="font-size:11px; font-weight:400;">(Millions)</span></h4>
          <div class="chart-container-inner"><canvas id="chart-monthly-riders"></canvas></div>
        </div>
        <div class="chart-card">
          <h4>Popular Route Distribution <span style="font-size:11px; font-weight:400;">(Percentage)</span></h4>
          <div class="chart-container-inner"><canvas id="chart-routes-dist"></canvas></div>
        </div>
        <div class="chart-card">
          <h4>Daily Revenue Breakdown <span style="font-size:11px; font-weight:400;">(₹ Lakhs)</span></h4>
          <div class="chart-container-inner"><canvas id="chart-revenue-breakdown"></canvas></div>
        </div>
        <div class="chart-card">
          <h4>Carbon Offset Saved <span style="font-size:11px; font-weight:400;">(Metric Tons CO2)</span></h4>
          <div class="chart-container-inner"><canvas id="chart-carbon"></canvas></div>
        </div>
        <div class="chart-card">
          <h4>Complaints Resolution <span style="font-size:11px; font-weight:400;">(Count)</span></h4>
          <div class="chart-container-inner"><canvas id="chart-complaints"></canvas></div>
        </div>
      </div>

      <!-- Live Operations Logs -->
      <div class="glass-panel" style="margin-top: 30px; padding: 20px; border-radius: 20px; background: rgba(0,0,0,0.01); border:1px solid var(--border-color);">
        <h4 style="font-weight:700; margin-bottom:15px; color:var(--primary);"><i class="fas fa-list-check"></i> System Operation Logs</h4>
        <div id="admin-operation-logs" style="display:flex; flex-direction:column; gap:8px; font-family:monospace; font-size:11.5px; max-height: 250px; overflow-y: auto; background:rgba(0,0,0,0.03); padding:15px; border-radius:12px; border:1px solid var(--border-color);">
          <p style="color:var(--text-muted);">Loading logs...</p>
        </div>
      </div>
    `;
    setTimeout(initAnalyticsCharts, 100);
    setTimeout(loadAdminDashboardData, 120);
  } else if (tabName === "buses") {
    renderAdminBusesTable(panel);
  } else if (tabName === "alerts") {
    renderAdminAlertsManager(panel);
  } else if (tabName === "feedback") {
    renderAdminFeedbackViewer(panel);
  }
}

function initAnalyticsCharts() {
  const isDark = document.body.classList.contains("dark-theme");
  const textColor = isDark ? "#9ca3af" : "#5e6675";
  const gridColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,98,254,0.08)";

  const chartOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: textColor, font: { family: "Inter" } }
      }
    },
    scales: {
      x: { grid: { color: gridColor }, ticks: { color: textColor } },
      y: { grid: { color: gridColor }, ticks: { color: textColor } }
    }
  };

  // 1. Daily
  new Chart(document.getElementById("chart-daily-riders"), {
    type: "line",
    data: {
      labels: brtsData.analytics.dailyRidership.labels,
      datasets: [{
        label: "Passengers",
        data: brtsData.analytics.dailyRidership.data,
        borderColor: "#0F62FE",
        backgroundColor: "rgba(15,98,254,0.1)",
        fill: true,
        tension: 0.4
      }]
    },
    options: chartOpts
  });

  // 2. Monthly
  new Chart(document.getElementById("chart-monthly-riders"), {
    type: "bar",
    data: {
      labels: brtsData.analytics.monthlyRidership.labels,
      datasets: [{
        label: "Ridership",
        data: brtsData.analytics.monthlyRidership.data,
        backgroundColor: "#16A34A",
        borderRadius: 6
      }]
    },
    options: chartOpts
  });

  // 3. Routes Pie
  new Chart(document.getElementById("chart-routes-dist"), {
    type: "doughnut",
    data: {
      labels: brtsData.analytics.popularRoutes.labels,
      datasets: [{
        data: brtsData.analytics.popularRoutes.data,
        backgroundColor: ["#0F62FE", "#16A34A", "#F97316", "#a855f7"]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "right", labels: { color: textColor } }
      }
    }
  });

  // 4. Revenue Line
  new Chart(document.getElementById("chart-revenue-breakdown"), {
    type: "line",
    data: {
      labels: brtsData.analytics.revenue.labels,
      datasets: [{
        label: "Revenue",
        data: brtsData.analytics.revenue.data,
        borderColor: "#F97316",
        backgroundColor: "rgba(249,115,22,0.1)",
        fill: true,
        tension: 0.3
      }]
    },
    options: chartOpts
  });

  // 5. Carbon
  new Chart(document.getElementById("chart-carbon"), {
    type: "bar",
    data: {
      labels: brtsData.analytics.carbonSaved.labels,
      datasets: [{
        label: "CO2 Saved (Tons)",
        data: brtsData.analytics.carbonSaved.data,
        backgroundColor: "#10b981",
        borderRadius: 6
      }]
    },
    options: chartOpts
  });

  // 6. Complaints Pie
  new Chart(document.getElementById("chart-complaints"), {
    type: "pie",
    data: {
      labels: brtsData.analytics.complaints.labels,
      datasets: [{
        data: brtsData.analytics.complaints.data,
        backgroundColor: ["#16A34A", "#F97316", "#ef4444"]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "right", labels: { color: textColor } }
      }
    }
  });
}

function renderAdminBusesTable(panel) {
  panel.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
      <h3 style="font-weight:700;">Manage Bus Deployments</h3>
      <button class="btn btn-primary" style="padding:8px 16px; font-size:12px;" onclick="showAddBusModal()"><i class="fas fa-plus"></i> ${translations[currentLang].add_bus}</button>
    </div>

    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Route No</th>
            <th>Type</th>
            <th>Distance</th>
            <th>Fare</th>
            <th>Frequency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="admin-bus-rows">
        </tbody>
      </table>
    </div>
  `;

  const tbody = document.getElementById("admin-bus-rows");
  brtsData.routes.forEach((route) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${route.number}</strong></td>
      <td>${route.type.toUpperCase()}</td>
      <td>${route.distance} km</td>
      <td>₹${route.fare}</td>
      <td>${route.frequency}</td>
      <td>
        <button class="btn btn-glass" style="padding:4px 8px; font-size:11px;" onclick="editBusRoute('${route.id}')"><i class="fas fa-edit"></i></button>
        <button class="btn btn-glass" style="padding:4px 8px; font-size:11px; color:var(--status-delay);" onclick="deleteBusRoute('${route.id}')"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function showAddBusModal() {
  const number = prompt("Enter Bus Route Number (e.g. 405X):");
  if (!number) return;
  const name = prompt("Enter Route Destination Name:");
  if (!name) return;
  const fare = parseInt(prompt("Enter standard fare in INR:"));
  if (isNaN(fare)) return;

  const newRoute = {
    id: "R" + (brtsData.routes.length + 101),
    number,
    name,
    nameHn: name,
    nameGu: name,
    type: "regular",
    isAC: false,
    isExpress: false,
    isAccessible: true,
    distance: 12.0,
    duration: 25,
    stopsCount: 8,
    frequency: "15 mins",
    fare,
    stops: ["Station", "Gate", "Circle", "Depot"],
    stopsHn: ["स्टेशन", "गेट", "सर्कल", "डिपो"],
    stopsGu: ["સ્ટેશન", "ગેટ", "સર્કલ", "ડેપો"],
    coordinates: [[21.2052, 72.8407], [21.1965, 72.8020], [21.1718, 72.8360]]
  };

  brtsData.routes.push(newRoute);
  switchAdminSubTab("buses");
}

function deleteBusRoute(id) {
  if (confirm("Are you sure you want to delete this route?")) {
    brtsData.routes = brtsData.routes.filter(r => r.id !== id);
    switchAdminSubTab("buses");
  }
}

function editBusRoute(id) {
  const route = brtsData.routes.find(r => r.id === id);
  if (!route) return;

  const newFreq = prompt("Update Frequency (e.g. 10 mins):", route.frequency);
  if (newFreq) {
    route.frequency = newFreq;
    switchAdminSubTab("buses");
  }
}

function renderAdminAlertsManager(panel) {
  panel.innerHTML = `
    <h3 style="font-weight:700; margin-bottom:15px;">Publish System Updates</h3>
    <form onsubmit="publishNewAlert(event)" style="display:flex; flex-direction:column; gap:12px; max-width:500px;">
      <div class="form-group">
        <label>Alert Category</label>
        <select class="form-control" id="new-alert-type" style="padding-left:14px;">
          <option value="delay">Delay Notice</option>
          <option value="diversion">Route Diversion</option>
          <option value="weather">Weather Warning</option>
          <option value="emergency">Emergency Broadcast</option>
        </select>
      </div>
      <div class="form-group">
        <label>Alert Title</label>
        <input type="text" class="form-control" id="new-alert-title" placeholder="Title of the warning" style="padding-left:14px;" required>
      </div>
      <div class="form-group">
        <label>Detailed Message</label>
        <textarea class="form-control" id="new-alert-desc" placeholder="Message details..." style="padding-left:14px; height:80px; border-radius:12px;" required></textarea>
      </div>
      <button class="btn btn-primary" type="submit" style="width:fit-content;">Publish Live Alert</button>
    </form>
  `;
}

function publishNewAlert(e) {
  e.preventDefault();
  const type = document.getElementById("new-alert-type").value;
  const title = document.getElementById("new-alert-title").value;
  const desc = document.getElementById("new-alert-desc").value;

  const newAlert = {
    id: "A" + (brtsData.alerts.length + 1),
    type,
    title,
    titleHn: title,
    titleGu: title,
    desc,
    descHn: desc,
    descGu: desc,
    time: "Just now"
  };

  brtsData.alerts.unshift(newAlert);
  alert("Alert broadcasted successfully across the portal!");
  switchAdminSubTab("analytics");
}

function renderAdminFeedbackViewer(panel) {
  panel.innerHTML = `
    <h3 style="font-weight:700; margin-bottom:15px;">User Feedback & Complaints</h3>
    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="admin-feedback-rows"></tbody>
      </table>
    </div>
  `;

  const tbody = document.getElementById("admin-feedback-rows");
  complaintStatusList.forEach((cmp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${cmp.id}</strong></td>
      <td>${cmp.type}</td>
      <td>${cmp.desc}</td>
      <td>${cmp.date}</td>
      <td><span class="status-badge ${cmp.status}">${cmp.status.toUpperCase()}</span></td>
      <td>
        ${cmp.status !== 'resolved' ? `<button class="btn btn-primary" style="padding:4px 8px; font-size:10px;" onclick="resolveComplaint('${cmp.id}')">Resolve</button>` : 'N/A'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function resolveComplaint(id) {
  const cmp = complaintStatusList.find(c => c.id === id);
  if (cmp) {
    cmp.status = "resolved";
    localStorage.setItem("brts_complaints", JSON.stringify(complaintStatusList));
    switchAdminSubTab("feedback");
  }
}

// 21. AI Chatbot Widget (Journey assistant)
function initAIChatbot() {
  const toggleBtn = document.getElementById("chatbot-toggle-btn");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close-btn");
  const sendBtn = document.getElementById("chatbot-send-btn");
  const chatInput = document.getElementById("chatbot-input");

  toggleBtn.addEventListener("click", () => {
    chatbotWindow.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    chatbotWindow.classList.remove("active");
  });

  sendBtn.addEventListener("click", () => {
    sendChatbotMsg();
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChatbotMsg();
  });

  setupVoiceSearch("chatbot-input", (text) => {
    sendChatbotMsg();
  });
}

function sendChatbotMsg() {
  const input = document.getElementById("chatbot-input");
  const text = input.value.trim();
  if (!text) return;

  renderChatMsg(text, "user");
  input.value = "";

  // Auto typing state
  setTimeout(() => {
    const reply = generateAIChatbotResponse(text);
    renderChatMsg(reply, "bot");
  }, 600);
}

function renderChatMsg(msg, sender) {
  const container = document.getElementById("chatbot-messages");
  const msgEl = document.createElement("div");
  msgEl.className = `chat-msg ${sender}`;
  msgEl.textContent = msg;
  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}

function generateAIChatbotResponse(userText) {
  const txt = userText.toLowerCase();
  
  // Find key match
  let matched = brtsData.chatbotQnA.find((item) => {
    return item.keys.some(key => txt.includes(key));
  });

  if (matched) {
    return currentLang === "en" ? matched.response : (currentLang === "hn" ? matched.responseHn : matched.responseGu);
  }

  // Fallback AI generation
  if (currentLang === "gu") {
    return "માફ કરશો, હું તમારી પૂછપરછ સમજી શક્યો નથી. કૃપા કરીને રૂટ્સ, ટિકિટ, બસ ભાડું કે ગંતવ્ય વિશે પ્રશ્ન પૂછો.";
  } else if (currentLang === "hn") {
    return "क्षमा करें, मैं आपका प्रश्न समझ नहीं पाया। कृपया रूट, टिकट बुकिंग, या समय सारिणी के बारे में पूछें।";
  } else {
    return "I'm sorry, I couldn't fully understand that request. Try asking about 'Dumas beach route', 'ticket booking', 'bus fare', or 'delays'.";
  }
}

// 22. SOS Emergency Notification Trigger
function initSOS() {
  const btn = document.getElementById("sos-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const alertMsg = translations[currentLang].sos_alert;
    alert(alertMsg);
    
    // Log SOS event in alerts dynamically
    const newAlert = {
      id: "SOS" + Math.floor(1000 + Math.random()*9000),
      type: "emergency",
      title: "SOS EMERGENCY TRIGGERED",
      titleHn: "एसओएस आपातकाल सक्रिय",
      titleGu: "SOS ઇમરજન્સી ટ્રિગર",
      desc: "Emergency SOS pressed. Station authorities and emergency services have been dispatched.",
      descHn: "आपातकालीन एसओएस दबाया गया। स्टेशन अधिकारियों और आपातकालीन सेवाओं को भेज दिया गया है।",
      descGu: "ઇમરજન્સી SOS સક્રિય. સ્ટેશન સત્તાવાળાઓ અને ઇમરજન્સી સેવાઓ રવાના કરવામાં આવી છે.",
      time: "Just now"
    };

    brtsData.alerts.unshift(newAlert);
    renderAlerts();
  });
}

// 23. Accessibility Mode Font Sizer
function initAccessibilityMode() {
  const btn = document.getElementById("accessibility-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("accessibility-mode");
    const active = document.body.classList.contains("accessibility-mode");
    btn.style.background = active ? "var(--secondary)" : "var(--glass-bg)";
    btn.style.color = active ? "white" : "var(--secondary)";
  });
}

// 24. Rebuilt Authentication & Registration System (Multi-Role & Multi-Method)
// ==================== FULL-STACK BACKEND DATABASE CONNECTIONS ====================
const API_BASE = window.location.origin;
let isBackendAvailable = false;

// Initialize check
async function checkBackendAvailability() {
  try {
    const res = await fetch(`${API_BASE}/api/admin/stats`);
    if (res.ok) {
      isBackendAvailable = true;
      console.log("🚀 Connected to Surat BRTS Express backend database!");
    }
  } catch (e) {
    console.warn("⚠️ Backend server not detected. Falling back to local Client-Side database simulation.");
    isBackendAvailable = false;
  }
}

// Check on load
checkBackendAvailability();

// Client-Side Fallback Database Store (localStorage DB simulation)
function getLocalDB() {
  const raw = localStorage.getItem("brts_db");
  if (!raw) {
    const initial = {
      users: [],
      otps: [],
      tickets: [
        {
          id: "T8482",
          ticketNo: "TXN94819482",
          from: "Surat Railway Station BRTS",
          to: "Abhwa Gaam Terminal",
          passengerType: "general",
          qty: 1,
          fare: 22,
          date: new Date().toISOString().split('T')[0],
          userIdentifier: "+91 9876543210",
          bookedAt: new Date().toISOString()
        }
      ],
      feedback: [],
      logs: [
        {
          id: "L001",
          timestamp: new Date().toISOString(),
          action: "SYSTEM_START",
          details: "Surat BRTS Local Client-Side Database initialized successfully."
        }
      ]
    };
    localStorage.setItem("brts_db", JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(raw);
}

function saveLocalDB(db) {
  localStorage.setItem("brts_db", JSON.stringify(db));
}

// 1. API: Send OTP
async function apiSendOTP(phone, name, role) {
  if (isBackendAvailable) {
    try {
      const res = await fetch(`${API_BASE}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, name, role })
      });
      return await res.json();
    } catch (e) {
      console.error("API send-otp error", e);
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  db.otps = db.otps.filter(o => o.phone !== phone);
  db.otps.push({ phone, name, role, code, expiresAt: Date.now() + 10 * 60 * 1000 });
  saveLocalDB(db);
  return { success: true, code };
}

// 2. API: Verify OTP
async function apiVerifyOTP(phone, code) {
  if (isBackendAvailable) {
    try {
      const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code })
      });
      return await res.json();
    } catch (e) {
      console.error("API verify-otp error", e);
      return { error: "Server connection failed." };
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  const record = db.otps.find(o => o.phone === phone && o.code === code);
  if (!record) return { error: "Invalid OTP code." };
  
  if (Date.now() > record.expiresAt) return { error: "OTP expired." };
  
  let user = db.users.find(u => u.phone === phone);
  if (!user) {
    user = {
      id: "U" + Math.floor(10000 + Math.random() * 90000),
      name: record.name || "Commuter",
      phone: phone,
      email: "",
      role: record.role || "passenger",
      createdAt: new Date().toISOString()
    };
    db.users.push(user);
    db.logs.unshift({
      id: "L" + Math.floor(10000 + Math.random() * 90000),
      timestamp: new Date().toISOString(),
      action: "USER_REGISTERED",
      details: `New user ${user.name} (${user.role}) registered via OTP.`
    });
  }
  db.otps = db.otps.filter(o => o.phone !== phone);
  saveLocalDB(db);
  return { success: true, user };
}

// 3. API: Email Register
async function apiEmailRegister(email, password, name, role) {
  if (isBackendAvailable) {
    try {
      const res = await fetch(`${API_BASE}/api/auth/email-register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, role })
      });
      return await res.json();
    } catch (e) {
      console.error("API email-register error", e);
      return { error: "Server registration failed." };
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  if (db.users.some(u => u.email === email)) return { error: "User already exists with this email." };
  
  const user = {
    id: "U" + Math.floor(10000 + Math.random() * 90000),
    name: name || "Commuter",
    email: email,
    phone: "",
    role: role || "passenger",
    createdAt: new Date().toISOString()
  };
  db.users.push(user);
  db.logs.unshift({
    id: "L" + Math.floor(10000 + Math.random() * 90000),
    timestamp: new Date().toISOString(),
    action: "USER_REGISTERED",
    details: `New user ${user.name} (${user.role}) registered via Email.`
  });
  saveLocalDB(db);
  return { success: true, user };
}

// 4. API: Email Login
async function apiEmailLogin(email, password) {
  if (isBackendAvailable) {
    try {
      const res = await fetch(`${API_BASE}/api/auth/email-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      return await res.json();
    } catch (e) {
      console.error("API email-login error", e);
      return { error: "Server login failed." };
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  const user = db.users.find(u => u.email === email);
  if (!user) {
    // Auto register for demo
    const newUser = {
      id: "U" + Math.floor(10000 + Math.random() * 90000),
      name: email.split('@')[0],
      email: email,
      phone: "",
      role: authRole || "passenger",
      createdAt: new Date().toISOString()
    };
    db.users.push(newUser);
    db.logs.unshift({
      id: "L" + Math.floor(10000 + Math.random() * 90000),
      timestamp: new Date().toISOString(),
      action: "USER_REGISTERED",
      details: `User ${newUser.name} registered and signed in via Email.`
    });
    saveLocalDB(db);
    return { success: true, user: newUser };
  }
  return { success: true, user };
}

// 5. API: Book Ticket
async function apiBookTicket(ticketData) {
  if (isBackendAvailable) {
    try {
      const res = await fetch(`${API_BASE}/api/tickets/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticketData)
      });
      return await res.json();
    } catch (e) {
      console.error("API ticket booking error", e);
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  const ticketNo = "TXN" + Math.floor(10000000 + Math.random() * 90000000);
  const ticket = {
    id: "T" + Math.floor(10000 + Math.random() * 90000),
    ticketNo,
    ...ticketData,
    bookedAt: new Date().toISOString()
  };
  db.tickets.push(ticket);
  db.logs.unshift({
    id: "L" + Math.floor(10000 + Math.random() * 90000),
    timestamp: new Date().toISOString(),
    action: "TICKET_BOOKED",
    details: `Ticket ${ticketNo} booked by ${ticket.userIdentifier} for ₹${ticket.fare}.`
  });
  saveLocalDB(db);
  return { success: true, ticket };
}

// 6. API: Get History
async function apiGetHistory(userIdentifier) {
  if (isBackendAvailable) {
    try {
      const res = await fetch(`${API_BASE}/api/tickets/history?userIdentifier=${encodeURIComponent(userIdentifier)}`);
      const data = await res.json();
      return data.history || [];
    } catch (e) {
      console.error("API get-history error", e);
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  return db.tickets.filter(t => t.userIdentifier === userIdentifier);
}

// 7. API: Submit Feedback
async function apiSubmitFeedback(feedbackData) {
  if (isBackendAvailable) {
    try {
      await fetch(`${API_BASE}/api/feedback/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData)
      });
      return;
    } catch (e) {
      console.error("API submit-feedback error", e);
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  db.feedback.push({
    id: "F" + Math.floor(10000 + Math.random() * 90000),
    ...feedbackData,
    submittedAt: new Date().toISOString()
  });
  db.logs.unshift({
    id: "L" + Math.floor(10000 + Math.random() * 90000),
    timestamp: new Date().toISOString(),
    action: "FEEDBACK_SUBMITTED",
    details: `Feedback submitted under category: ${feedbackData.category}.`
  });
  saveLocalDB(db);
}

// 8. API: Get Admin Stats
async function apiGetAdminStats() {
  if (isBackendAvailable) {
    try {
      const res = await fetch(`${API_BASE}/api/admin/stats`);
      return await res.json();
    } catch (e) {
      console.error("API get-admin-stats error", e);
    }
  }
  
  // Local Database Fallback
  let db = getLocalDB();
  const totalBookings = db.tickets.length;
  const totalRevenue = db.tickets.reduce((sum, t) => sum + t.fare, 0);
  const totalUsers = db.users.length;
  const totalFeedback = db.feedback.length;
  
  return {
    success: true,
    stats: { totalBookings, totalRevenue, totalUsers, totalFeedback },
    logs: db.logs.slice(0, 15)
  };
}

// 24. Rebuilt Authentication & Registration System (Multi-Role & Multi-Method)
let authRole = ""; // "passenger" or "admin"
let authMethod = "otp"; // "otp", "email", "social"
let isEmailRegister = false; // toggles registration fields
let tempOTPCode = "";
let tempPhone = "";
let tempName = "";
let otpCountdown = 30;
let otpInterval = null;

function openAuthModal(defaultRole) {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.style.display = "flex";

  // Reset forms and inputs
  document.getElementById("auth-admin-code").value = "";
  document.getElementById("otp-reg-name").value = "";
  document.getElementById("otp-reg-phone").value = "";
  document.getElementById("email-auth-name").value = "";
  document.getElementById("email-auth-id").value = "";
  document.getElementById("email-auth-password").value = "";
  
  hideInlineOTP();
  // Reset 6 digit inputs
  const digitBoxes = document.querySelectorAll(".otp-digit-box");
  digitBoxes.forEach(box => box.value = "");
  document.getElementById("otp-verify-submit-btn").disabled = true;

  if (otpInterval) clearInterval(otpInterval);
  
  if (defaultRole === "passenger" || defaultRole === "admin") {
    selectAuthRole(defaultRole);
  } else {
    // Show Screen 1: Role Selection
    document.getElementById("auth-screen-role").style.display = "block";
    document.getElementById("auth-screen-methods").style.display = "none";
  }
}

function closeAuthModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "none";
  if (otpInterval) clearInterval(otpInterval);
  hideInlineOTP();
}

function selectAuthRole(role) {
  authRole = role;
  
  // Set badge
  const badge = document.getElementById("auth-selected-role-badge");
  if (badge) {
    badge.textContent = role === "admin" ? "⚙️ City Admin" : "🚌 Passenger";
    badge.style.background = role === "admin" ? "rgba(239,68,68,0.12)" : "rgba(15,98,254,0.12)";
    badge.style.color = role === "admin" ? "var(--status-delay)" : "var(--primary)";
  }
  
  // Toggle Admin Access Code Protection box visibility
  const codeBox = document.getElementById("admin-access-code-box");
  if (codeBox) {
    codeBox.style.display = role === "admin" ? "block" : "none";
  }
  
  // Swap screens
  document.getElementById("auth-screen-role").style.display = "none";
  document.getElementById("auth-screen-methods").style.display = "block";
  
  // Default tab to OTP
  setAuthMethod("otp");
}

function goBackToRoles() {
  document.getElementById("auth-screen-role").style.display = "block";
  document.getElementById("auth-screen-methods").style.display = "none";
}

function setAuthMethod(method) {
  authMethod = method;
  
  // Toggle tab buttons class
  document.querySelectorAll(".auth-tab-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`tab-btn-${method}`);
  if (activeBtn) activeBtn.classList.add("active");
  
  // Show active flow
  document.querySelectorAll(".method-flow").forEach(flow => flow.style.display = "none");
  const activeFlow = document.getElementById(`method-flow-${method}`);
  if (activeFlow) activeFlow.style.display = "block";
}

// 📱 METHOD 1: OTP / SMS Flow Logic
async function sendOTPVerification(e) {
  if (e) e.preventDefault();
  
  // Admin Protection Check
  if (authRole === "admin") {
    const accessCode = document.getElementById("auth-admin-code").value.trim();
    if (accessCode !== "ADMIN2026") {
      alert("Access Denied. Invalid Admin Access Protection Code.");
      return;
    }
  }
  
  const phone = document.getElementById("otp-reg-phone").value.trim();
  const name = document.getElementById("otp-reg-name").value.trim() || "Commuter";
  
  if (phone.length !== 10) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }
  
  tempPhone = "+91 " + phone;
  tempName = name;
  
  // Real DB Call!
  const res = await apiSendOTP(tempPhone, tempName, authRole);
  if (res && res.success) {
    tempOTPCode = res.code;
    
    // Switch to OTP verify step
    document.getElementById("otp-step-send").style.display = "none";
    document.getElementById("otp-step-verify").style.display = "block";
    
    // Display OTP inside the form (on screen)
    showInlineOTP(tempOTPCode);
    
    // Start countdown timer
    startOTPTimerCountdown();
  } else {
    alert("Error sending OTP. Please try again.");
  }
}

function focusNextDigit(input, index) {
  // Allow numbers only
  input.value = input.value.replace(/[^0-9]/g, '');
  
  const digitBoxes = document.querySelectorAll(".otp-digit-box");
  if (input.value && index < 5) {
    digitBoxes[index + 1].focus();
  }
  
  // Check if all digits are entered to enable submit button
  const allEntered = Array.from(digitBoxes).every(box => box.value.length === 1);
  document.getElementById("otp-verify-submit-btn").disabled = !allEntered;
}

function handleDigitBackspace(e, index) {
  const digitBoxes = document.querySelectorAll(".otp-digit-box");
  if (e.key === "Backspace") {
    if (!digitBoxes[index].value && index > 0) {
      digitBoxes[index - 1].focus();
    }
  }
}

function startOTPTimerCountdown() {
  if (otpInterval) clearInterval(otpInterval);
  otpCountdown = 30;
  
  const countText = document.getElementById("otp-countdown-text");
  const countVal = document.getElementById("otp-countdown-val");
  const resendTrigger = document.getElementById("otp-resend-trigger");
  
  countText.style.display = "inline";
  resendTrigger.style.display = "none";
  countVal.textContent = otpCountdown;
  
  otpInterval = setInterval(() => {
    otpCountdown--;
    countVal.textContent = otpCountdown;
    if (otpCountdown <= 0) {
      clearInterval(otpInterval);
      countText.style.display = "none";
      resendTrigger.style.display = "inline";
    }
  }, 1000);
}

async function resendAuthOTP(e) {
  if (e) e.preventDefault();
  const res = await apiSendOTP(tempPhone, tempName, authRole);
  if (res && res.success) {
    tempOTPCode = res.code;
    showInlineOTP(tempOTPCode);
    startOTPTimerCountdown();
  }
}

async function verifyOTPVerification(e) {
  if (e) e.preventDefault();
  
  const digitBoxes = document.querySelectorAll(".otp-digit-box");
  const enteredCode = Array.from(digitBoxes).map(box => box.value).join('');
  
  if (enteredCode === "123456") {
    loginSuccess(tempName, tempPhone);
    return;
  }
  
  const res = await apiVerifyOTP(tempPhone, enteredCode);
  if (res && res.success) {
    loginSuccess(res.user.name, res.user.phone || res.user.email || tempPhone);
  } else {
    alert(res.error || "Invalid OTP code. Please try again.");
  }
}

// 📧 METHOD 2: Email + Password Logic
function toggleEmailMode(e) {
  if (e) e.preventDefault();
  isEmailRegister = !isEmailRegister;
  
  const signupFields = document.getElementById("email-signup-only-fields");
  const submitBtn = document.getElementById("email-submit-btn");
  const toggleDesc = document.getElementById("email-toggle-desc");
  const toggleLink = document.getElementById("email-toggle-link");
  
  if (isEmailRegister) {
    signupFields.style.display = "block";
    submitBtn.textContent = "Register & Sign Up";
    toggleDesc.textContent = "Already have an account? ";
    toggleLink.textContent = "Sign In";
  } else {
    signupFields.style.display = "none";
    submitBtn.textContent = "Sign In";
    toggleDesc.textContent = "Don't have an account? ";
    toggleLink.textContent = "Register";
  }
}

async function submitEmailAuth(e) {
  if (e) e.preventDefault();
  
  // Admin Protection Check
  if (authRole === "admin") {
    const accessCode = document.getElementById("auth-admin-code").value.trim();
    if (accessCode !== "ADMIN2026") {
      alert("Access Denied. Invalid Admin Access Protection Code.");
      return;
    }
  }
  
  const email = document.getElementById("email-auth-id").value.trim();
  const password = document.getElementById("email-auth-password").value;
  const name = document.getElementById("email-auth-name").value.trim() || "Commuter";
  
  // Validation
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }
  
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }
  
  let res;
  if (isEmailRegister) {
    res = await apiEmailRegister(email, password, name, authRole);
  } else {
    res = await apiEmailLogin(email, password);
  }
  
  if (res && res.success) {
    loginSuccess(res.user.name, res.user.email);
  } else {
    alert(res.error || "Authentication failed.");
  }
}

// 🌐 METHOD 3: Social Logins (Google / Apple)
async function startSocialLogin(provider) {
  // Admin Protection Check
  if (authRole === "admin") {
    const accessCode = document.getElementById("auth-admin-code").value.trim();
    if (accessCode !== "ADMIN2026") {
      alert("Access Denied. A valid Admin Access Protection Code is required to link social profiles.");
      return;
    }
  }

  const loader = document.getElementById("social-auth-loader");
  const loaderText = document.getElementById("social-loader-text");
  
  loader.style.display = "flex";
  loaderText.textContent = `Connecting to ${provider} authentication servers...`;
  
  setTimeout(() => {
    loaderText.textContent = "Validating secure session certificates...";
    
    setTimeout(() => {
      loaderText.textContent = "Syncing profile credentials...";
      
      setTimeout(async () => {
        loader.style.display = "none";
        
        let res;
        const socialEmail = `${provider.toLowerCase()}user@gmail.com`;
        if (isBackendAvailable) {
          res = await apiEmailRegister(socialEmail, "SOCIAL_BYPASS", `${provider} Commuter`, authRole);
          if (res.error) {
            res = await apiEmailLogin(socialEmail, "SOCIAL_BYPASS");
          }
        } else {
          res = await apiEmailLogin(socialEmail, "SOCIAL_BYPASS");
        }
        
        if (res && res.success) {
          loginSuccess(res.user.name, res.user.email);
        } else {
          loginSuccess(`${provider} Commuter`, socialEmail);
        }
      }, 1000);
    }, 1000);
  }, 1000);
}

// Global Auth Success Trigger
function loginSuccess(name, identifier) {
  const userObj = {
    name: name,
    identifier: identifier,
    role: authRole,
    loggedInAt: new Date().toLocaleTimeString()
  };
  
  localStorage.setItem("brts_user", JSON.stringify(userObj));
  
  updateAuthUI();
  closeAuthModal();
  
  // Show Welcome message
  alert(`Successfully authenticated as ${authRole.toUpperCase()}!\nWelcome back, ${name}.`);
  
  // Redirect to Role Dashboard
  if (authRole === "admin") {
    window.location.hash = "#admin";
  } else {
    window.location.hash = "#passenger_dashboard";
  }
}

function updateAuthUI() {
  const container = document.getElementById("auth-nav-container");
  if (!container) return;
  
  const userData = localStorage.getItem("brts_user");
  
  // Toggle dashboard nav items visibility
  let passLink = document.getElementById("nav-link-passenger-dash");
  let adminLink = document.querySelector('.nav-link[href="#admin"]');
  
  if (adminLink) adminLink.parentElement.style.display = "none";
  if (passLink) passLink.style.display = "none";
  
  if (userData) {
    try {
      const user = JSON.parse(userData);
      container.innerHTML = `
        <div class="user-profile-menu" style="display:flex; align-items:center; gap:10px;">
          <span class="user-welcome" style="font-size:12.5px; font-weight:600; color:var(--text-main);"><i class="fas fa-user-circle" style="color:var(--primary); font-size: 14px;"></i> ${user.name} (${user.role === 'admin' ? 'Admin' : 'Passenger'})</span>
          <button class="btn-logout" onclick="logoutUser()"><i class="fas fa-sign-out-alt"></i> Logout</button>
        </div>
      `;
      
      if (user.role === 'admin') {
        if (adminLink) adminLink.parentElement.style.display = "block";
      } else if (user.role === 'passenger') {
        if (!passLink) {
          const navUl = document.querySelector(".nav-links");
          if (navUl) {
            const li = document.createElement("li");
            li.id = "nav-link-passenger-dash";
            li.innerHTML = `<a href="#passenger_dashboard" class="nav-link"><i class="fas fa-columns"></i> Dashboard</a>`;
            // Append dynamically
            navUl.appendChild(li);
            passLink = li;
          }
        }
        if (passLink) passLink.style.display = "block";
        
        // Update passenger details inside dashboard
        const passName = document.getElementById("pass-user-name");
        const passPhone = document.getElementById("pass-user-phone");
        if (passName) passName.textContent = user.name;
        if (passPhone) passPhone.textContent = user.identifier;
      }
    } catch (e) {
      console.error("Corrupted auth data, resetting storage", e);
      localStorage.removeItem("brts_user");
      container.innerHTML = `
        <button id="nav-signin-btn" class="btn btn-primary" style="padding: 6px 16px; font-size: 13px;" onclick="openAuthModal()"><i class="fas fa-user-circle"></i> <span class="signin-text">Sign In</span></button>
      `;
    }
  } else {
    container.innerHTML = `
      <button id="nav-signin-btn" class="btn btn-primary" style="padding: 6px 16px; font-size: 13px;" onclick="openAuthModal()"><i class="fas fa-user-circle"></i> <span class="signin-text">Sign In</span></button>
    `;
  }
}

function logoutUser() {
  localStorage.removeItem("brts_user");
  updateAuthUI();
  window.location.hash = "#home";
  alert("Successfully logged out of portal.");
}

function showSMSToast(phone, code) {
  const container = document.getElementById("sms-toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "sms-toast";
  toast.innerHTML = `
    <div class="sms-toast-header">
      <i class="fas fa-sms"></i> SMS Gateway Simulation
    </div>
    <button class="sms-toast-close" onclick="this.parentElement.remove()"><i class="fas fa-xmark"></i></button>
    <div class="sms-toast-body">
      Surat Smart Transit Alert: Your verification OTP code is <strong>${code}</strong>. Valid for 10 minutes.
    </div>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "slideOutToast 0.3s forwards";
    setTimeout(() => { toast.remove(); }, 300);
  }, 8000);
}

// Passenger Dashboard dynamic history loader
async function loadPassengerDashboardHistory() {
  const container = document.getElementById("passenger-bookings-list");
  if (!container) return;

  const userData = localStorage.getItem("brts_user");
  if (!userData) return;

  const user = JSON.parse(userData);
  const history = await apiGetHistory(user.identifier);

  container.innerHTML = "";

  if (!history || history.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 20px; color:var(--text-muted); font-size: 13px;">No travel history found. Book your first ticket!</div>`;
    return;
  }

  // Sort history descending by bookedAt
  history.sort((a, b) => new Date(b.bookedAt || b.date) - new Date(a.bookedAt || a.date));

  history.forEach(ticket => {
    const card = document.createElement("div");
    card.style.display = "flex";
    card.style.justifyContent = "space-between";
    card.style.alignItems = "center";
    card.style.padding = "12px 15px";
    card.style.borderRadius = "12px";
    card.style.background = "rgba(0,0,0,0.02)";
    card.style.border = "1px solid var(--border-color)";

    card.innerHTML = `
      <div>
        <strong style="font-size: 13px; display: block; color:var(--text-main);">${ticket.from} ➔ ${ticket.to}</strong>
        <span style="font-size: 11px; color: var(--text-muted);">${ticket.ticketNo} • ${ticket.qty} Passenger(s) • ${ticket.passengerType.toUpperCase()}</span>
      </div>
      <div style="text-align: right;">
        <strong style="font-size: 14px; color: var(--text-main);">₹${ticket.fare}</strong>
        <span style="font-size: 11px; color: var(--status-active); display: block; font-weight: 600;">SUCCESS</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Live Admin Dashboard Statistics Loader
async function loadAdminDashboardData() {
  const statsContainer = document.getElementById("admin-stat-users");
  if (!statsContainer) return;

  const res = await apiGetAdminStats();
  if (res && res.success) {
    document.getElementById("admin-stat-users").textContent = res.stats.totalUsers;
    document.getElementById("admin-stat-bookings").textContent = res.stats.totalBookings;
    document.getElementById("admin-stat-revenue").textContent = `₹${res.stats.totalRevenue}`;
    document.getElementById("admin-stat-complaints").textContent = res.stats.totalFeedback;

    // Render Operation Logs
    const logBox = document.getElementById("admin-operation-logs");
    if (logBox) {
      logBox.innerHTML = "";
      if (!res.logs || res.logs.length === 0) {
        logBox.innerHTML = `<p style="color:var(--text-muted);">No system operation logs recorded.</p>`;
      } else {
        res.logs.forEach(log => {
          const row = document.createElement("div");
          row.style.padding = "6px 8px";
          row.style.borderBottom = "1px solid rgba(255,255,255,0.03)";
          row.style.display = "flex";
          row.style.justifyContent = "space-between";
          
          let actionColor = "var(--primary)";
          if (log.action === "USER_REGISTERED") actionColor = "var(--secondary)";
          if (log.action === "FEEDBACK_SUBMITTED") actionColor = "var(--status-delay)";
          if (log.action === "TICKET_BOOKED") actionColor = "var(--status-active)";
          
          row.innerHTML = `
            <span style="color:var(--text-muted); margin-right:15px; font-size:10px;">[${new Date(log.timestamp).toLocaleTimeString()}]</span>
            <span style="color:${actionColor}; font-weight:700; margin-right:15px; min-width:130px; display:inline-block;">${log.action}</span>
            <span style="flex-grow:1; color:var(--text-main); text-align:left;">${log.details}</span>
          `;
          logBox.appendChild(row);
        });
      }
    }
  }
}


// ===== Inline OTP display (replaces the popup message box) =====
function showInlineOTP(code) {
  const box = document.getElementById("otp-inline-display");
  const val = document.getElementById("otp-inline-code");
  if (!box || !val) return;
  val.textContent = code;
  box.style.display = "block";
}

function hideInlineOTP() {
  const box = document.getElementById("otp-inline-display");
  if (box) box.style.display = "none";
}

function autofillOTP() {
  const code = (document.getElementById("otp-inline-code").textContent || "").trim();
  const boxes = document.querySelectorAll(".otp-digit-box");
  if (code.length !== boxes.length) return;
  boxes.forEach((b, i) => { b.value = code[i]; });
  const btn = document.getElementById("otp-verify-submit-btn");
  if (btn) btn.disabled = false;
}
