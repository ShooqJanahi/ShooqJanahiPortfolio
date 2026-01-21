
let currentShotIndex = 0;
let currentShots = [];




/* ====== Page data ====== */
const PROJECTS = [
{
  id: "savebite",
  title: "SaveBite – Smart Food Donation Platform",
  summary:
    "Cross-platform Flutter app that connects food donors, volunteers, and food banks to reduce food waste and support the UN Zero Hunger goal.",
  hero: "assets/img/SaveBite_Logo.png",
  thumbFit: "contain",
  tags: ["Flutter", "Firebase Auth", "Firestore", "Storage", "Hosting"],
  
  // OneDrive doc / proposal
  detailsUrl:
    "https://1drv.ms/f/c/6a529a65b597eb88/IgDndeJVm0oEQZdEp6l81jyLAUoHBBdYG3ZwCPTNGRLp0xw?e=wIqm5T",
  primaryLabel: "Documentation",

  // Live deployed demo (web)
  repo: "https://savebite-70a65.web.app/",
  repoLabel: "Demo",

  linkType: "external",
  createdAt: "2025-08",

  details: {
    description:
      "SaveBite is a socially impactful food donation platform built with Flutter and Firebase. It connects households and companies with food banks and beneficiaries, enabling donors to submit surplus food, track donation status (Pending, Confirmed, Collected), and manage their profile. Admins can monitor all donations, assign / track pickups, manage users and roles, and optionally enable a Volunteer view for self-assignment of pickups. The system targets individuals, corporate donors, charities, and government entities, directly supporting the UN Zero Hunger (SDG 2) goal.",
    meta: [
      ["Role", "Full-stack Flutter Developer"],
      ["Year", "2025"],
        ["Platforms", "Android, iOS, Web"],
        ["Domain", "Food Donation / Social Impact"]
    ],
    shots: [
    // Onboarding & account
    "assets/screenshots/SaveBite/Onboarding.png",
    "assets/screenshots/SaveBite/CreateAccount.png",

    // User / Donor view
    "assets/screenshots/SaveBite/UserView-Landing.png",
    "assets/screenshots/SaveBite/UserView-Donate.png",
    "assets/screenshots/SaveBite/UserView-DonationHistory.png",
    "assets/screenshots/SaveBite/UserView-DonationHistory2.png",
    "assets/screenshots/SaveBite/UserView-EditDonation.png",
    "assets/screenshots/SaveBite/UserView-Setting.png",

    // Admin view
    "assets/screenshots/SaveBite/AdminUser-Dashboard.png",
    "assets/screenshots/SaveBite/AdminView_Users.png",
    "assets/screenshots/SaveBite/AdminView-EditDonation.png",
    "assets/screenshots/SaveBite/AdminView-EditDonation2.png",
    "assets/screenshots/SaveBite/AdminView-EditDonation3.png",
    "assets/screenshots/SaveBite/AdminView-PendingDonation.png",
    "assets/screenshots/SaveBite/AdminView-TotalDonation.png",

    // Volunteer view
    "assets/screenshots/SaveBite/VolunteerView-DonationHistory.png"
  ]
}
},

{
  id: "Credit-Card-Fraud-Detection",
  title: "SupTech Fraud Monitoring Dashboard (Credit Card Transactions)",
  summary:
    "Interactive SupTech-style dashboard that monitors transaction trends, highlights peak-risk months, and ranks alerts using risk scoring and explainability visuals.",
  hero: "assets/img/Credit-Card-Fraud-Detection.png",
  thumbFit: "contain",
  tags: ["HTML", "CSS", "JavaScript", "Chart.js", "Python", "Pandas", "Kaggle"],

  
  detailsUrl: "https://shooqjanahi.github.io/CreditCardFraudDetectionDashboard/",     // e.g. GitHub Pages link
  primaryLabel: "Demo",

 
  repo: "https://github.com/ShooqJanahi/CreditCardFraudDetectionDashboard",
  repoLabel: "GitHub",

  // (Optional) used only for the card GitHub button
  

  linkType: "external",
  createdAt: "2026-01",

  details: {
    description:
      "A SupTech early-warning dashboard built to monitor fraud signals in credit card transactions. The dashboard summarizes monthly KPIs (fraud rate, fraud volume, peak-risk periods) and shows a ranked alert table based on risk scoring. Data is aggregated in Python (Pandas) and exported to JSON, then visualized with Chart.js for a clean supervisory view.",

    meta: [
      ["Role", "Data Analytics & Dashboard Developer"],
      ["Year", "2026"],
      ["Data Source", "Kaggle — simulated credit card transactions"],
      ["Pipeline", "Python aggregation → JSON export → Chart.js dashboard"],
      ["Focus", "Trends, anomalies, early-warning indicators"]
    ],

    shots: [
      "assets/screenshots/Credit-Card-Fraud-Detection/Dashboards1.png",
      "assets/screenshots/Credit-Card-Fraud-Detection/Dashboards2.png",
      "assets/screenshots/Credit-Card-Fraud-Detection/Dashboards3.png",
      "assets/screenshots/Credit-Card-Fraud-Detection/Dashboards4.png"
    ]
  }
},





  {
    id: "shift-handover",
    title: "Shift Handover",
    summary:  "ASP.NET MVC web system that helps shift supervisors record incidents, manpower, and key updates with auto-generated PDF reports.",
    hero: "assets/img/Shift_Handover_Logo.png",
    thumbFit: "contain",                               
     tags: ["C#", "ASP.NET MVC", "SQL Server", "QuestPDF"],
    detailsUrl: "https://github.com/ShooqJanahi/ShiftHandover#README",
    primaryLabel: "Details",
    repo: "https://github.com/ShooqJanahi/ShiftHandover",
    linkType: "external",
    createdAt: "2025-03",
    details: { description:  "Shift Handover is a C# / ASP.NET MVC web application designed for shift-based environments. Supervisors can claim shifts, log incidents and accidents, track manpower usage, and close shifts through a structured workflow. When a shift is closed, the system generates a formatted PDF report using QuestPDF, ensuring consistency and traceability. The solution focuses on usability, data integrity, and smooth communication between consecutive shifts.",
      meta: [
        ["Role", "Full-stack .NET Developer"],
        ["Year", "2025"],
        ["Tech", "C#, ASP.NET MVC, SQL Server, QuestPDF"],
        ["Domain", "Operations / Shift Management"]
      ],
       shots: [
        // Login
        "assets/screenshots/ShiftHandover/Login.png",

        // Admin – overview & shifts
        "assets/screenshots/ShiftHandover/AdminView-Dashboard.png",
        "assets/screenshots/ShiftHandover/AdminView-AllShifts.png",
        "assets/screenshots/ShiftHandover/AdminView-AllShiftsSearch.png",
        "assets/screenshots/ShiftHandover/AdminView-ShiftFilter.png",

        // Admin – create shift flow
        "assets/screenshots/ShiftHandover/AdminView-CreateShift.png",
        "assets/screenshots/ShiftHandover/AdminView-CreateShift2.png",
        "assets/screenshots/ShiftHandover/AdminView-CreateShift3.png",

        // Admin – users & reporting
        "assets/screenshots/ShiftHandover/AdminView-AllUsers.png",
        "assets/screenshots/ShiftHandover/AdminView-UserDetails.png",
        "assets/screenshots/ShiftHandover/AdminView-CreateUser.png",
        "assets/screenshots/ShiftHandover/AdminView-GenerateUserReport.png",

        // Supervisor – overview & shift details
        "assets/screenshots/ShiftHandover/SupervisorView-Dashboard.png",
        "assets/screenshots/ShiftHandover/SupervisorView-MyShift.png",
        "assets/screenshots/ShiftHandover/SupervisorView-ShiftDetails.png",
        "assets/screenshots/ShiftHandover/SupervisorView-ShiftDetails2.png",
        "assets/screenshots/ShiftHandover/SupervisorView-ShiftDetails3.png",
        "assets/screenshots/ShiftHandover/SupervisorView-GenerateShiftReport.png"
      ]
    }
  },

{
  id: "bahrain-air-transport",
  title: "Bahrain Air Transport Analytics Dashboard",
  summary:
    "Interactive web dashboard that visualizes key aviation traffic indicators for Bahrain International Airport using open data.",
  hero: "assets/img/Bahrain-Air-Transport-Analytics_Logo.png",   
  thumbFit: "contain",
  tags: ["HTML","CSS","JavaScript","Chart.js","REST APIs"],
                   
  
  detailsUrl: "https://shooqjanahi.github.io/CreditCardFraudDetectionDashboard/",     // e.g. GitHub Pages link
  primaryLabel: "Demo",
 
  repo: "https://github.com/ShooqJanahi/Bahrain-Air-Transport-Dashboard",
  repoLabel: "GitHub",


  linkType: "external",
  createdAt: "2025-03",
  details: {
    description:
      "This project is a web-based analytics dashboard built with vanilla HTML, CSS, and JavaScript. It consumes Bahrain’s Open Data Portal APIs to visualize aviation traffic indicators such as passenger movements, aircraft movements, and cargo trends. Using Chart.js for data visualization, the dashboard provides interactive charts and cards that help decision-makers quickly understand patterns and seasonal changes in traffic at Bahrain International Airport.",
    meta: [
      ["Role", "Front-end & Data Analytics"],
      ["Year", "2025"],
        ["Tech", "HTML, CSS, JavaScript, Chart.js, REST APIs"],
        ["Data Source", "Bahrain Open Data Portal"]
    ],
    shots: [
      "assets/screenshots/Bahrain-Air-Transport-Analytics/Dashboard.png" // <-- point to your screenshot
    ]
  }
},



  {
    id: "photonest",
    title: "PhotoNest",
    summary: "Photo organizer web app with social-style feed, private vaults, and hashtag search built on Firebase.",
    hero: "assets/img/PhotoNest.png",
     tags: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Firestore", "Storage"],
    detailsUrl: "https://onedrive.live.com/?id=FA653E8D72B308DF%21s7fcc0141fc6b48218afc77433d3adeaa&cid=fa653e8d72b308df&ithint=folder&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9mYTY1M2U4ZDcyYjMwOGRmL0VrRUJ6SDlyX0NGSWl2eDNRejA2M3FvQnMwUXlxeWkyR1RUWUwtLTJIX0NwMmc_ZT1EZ1hrdDY",
    primaryLabel: "Documentation",
     repo: "https://photonest-a16aa.web.app/",
    repoLabel: "Demo" ,

     //  NEW: used only on the card GitHub button
    cardRepo: "https://github.com/ShooqJanahi/PhotoNest",

    linkType: "external",
    
    details: { 
      description:
        "PhotoNest is a Firebase-backed photo organizer web application inspired by social media feeds. Users can upload images, browse a home feed, explore posts by hashtags, and store sensitive photos in a private vault. The platform is built with HTML, CSS, and JavaScript on top of Firebase Authentication, Firestore, and Storage. It is designed to be lightweight, secure, and easily extendable with admin and moderation features.",
      meta: [
        ["Role", "Full-stack Web Developer"],
        ["Year", "2024"],
        ["Tech", "HTML, CSS, JavaScript, Firebase (Auth, Firestore, Storage)"],
        ["Domain", "Photo Management / Social"]
      ],

  shots: [
    "assets/screenshots/PhotoNest/SplashScreen.png",
    "assets/screenshots/PhotoNest/LandingPage.png",
    "assets/screenshots/PhotoNest/LandingPage2.png",
    "assets/screenshots/PhotoNest/LandingPage3.png",
    "assets/screenshots/PhotoNest/Login.png",
    "assets/screenshots/PhotoNest/SignUp.png",

    

    "assets/screenshots/PhotoNest/UserView-Dashboard.png",
    "assets/screenshots/PhotoNest/UserView-PostView.png",
    "assets/screenshots/PhotoNest/UserView-AddAlbum.png",
    "assets/screenshots/PhotoNest/UserView-CreateAlbum.png",

    "assets/screenshots/PhotoNest/UserView-AddMessage.png",
    "assets/screenshots/PhotoNest/UserView-Messages.png",
    "assets/screenshots/PhotoNest/UserView-MessageSettings.png",
    "assets/screenshots/PhotoNest/UserView-ViewMessages.png",
  
    "assets/screenshots/PhotoNest/UserView-MoveToVault.png",
    
    "assets/screenshots/PhotoNest/UserView-Profile.png",
    "assets/screenshots/PhotoNest/UserView-Settings.png",
    "assets/screenshots/PhotoNest/UserView-Settings2.png",
    "assets/screenshots/PhotoNest/UserView-SharePhoto.png",
    "assets/screenshots/PhotoNest/UserView-UploadPhoto.png",
    "assets/screenshots/PhotoNest/UserView-Vault.png",
    "assets/screenshots/PhotoNest/UserView-ViewAlbum.png",

    "assets/screenshots/PhotoNest/AdminView-Dashboard.png",
        "assets/screenshots/PhotoNest/AdminView-Reports.png",
        "assets/screenshots/PhotoNest/AdminView-UserActivity.png",
        "assets/screenshots/PhotoNest/AdminView-Users.png",
        "assets/screenshots/PhotoNest/AminView-ViewUser.png",

    
  ]
}
  },
  {
    id: "orient-events",
    title: "Orient Event Organizer",
    summary: "PHP & MySQL event booking system that streamlines venue reservations and client status tracking using SQL triggers.",
    hero: "assets/img/OrientEventOrganizer.png",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
     detailsUrl: "https://github.com/ShooqJanahi/OrientEventOrganizer#readme",
    repo: "https://github.com/ShooqJanahi/OrientEventOrganizer",
    linkType: "external",
    createdAt: "2024-05",
    details: {  description:
        "Orient Event Organizer is a full-stack web application developed for a university database course. Built with PHP, HTML, CSS, and MySQL, it allows clients to book venues and events while administrators manage reservations and client data. The system uses stored procedures and triggers to automatically update client status and ensure data consistency. It demonstrates strong relational-database design and practical use of SQL in a real-world scenario.",
      meta: [
        ["Role", "Back-end & Database Developer"],
        ["Year", "2024"],
        ["Tech", "PHP, HTML, CSS, MySQL (procedures & triggers)"],
        ["Domain", "Event Booking / Reservation"]
      ],
       shots: [
      
    ] }
  },
  {
    id: "labcaught",
    title: "LabCaught",
    summary:  "Medical lab booking app where I implemented authentication, error handling, and support flows for a smooth user experience.",
    hero: "assets/img/LabCaught_Logo.jpeg",
    thumbFit: "contain",
    tags: ["Swift","iOS"],
   detailsUrl: "https://github.com/ShooqJanahi/LabCaught#readme",
    repo: "https://github.com/ShooqJanahi/LabCaught",
    linkType: "external",
    createdAt: "2024-01",
    details: { description: "LabCaught is a medical lab booking application developed as a group project. My main contribution focused on the user experience around login, registration, and support flows. I implemented secure authentication, user-friendly error messages, password recovery, and a clear terms & conditions section outlining user responsibilities and booking policies. The goal was to create a reliable and intuitive entry experience for patients accessing lab services.",
         meta: [
        ["Role", "Mobile App & UX Developer"],
        ["Year", "2024"],
        ["Tech", "Flutter, Firebase Auth, Firestore"],
        ["Domain", "Healthcare / Booking"]
      ],
  
       shots: [
      "assets/screenshots/LabCaught/LoginProtoType.png"
    ] }
  },
  {
    id: "elms",
    title: "eLMS (Electronic Learning Management System)",
    summary:  "Custom e-learning management system concept for Bahrain Polytechnic, focusing on structured access for admins, teachers, and students.",
    hero: "assets/img/ELMS_logo.png",
    thumbFit: "contain",
     tags: [".NET", "C#", "SQL Server", "System Design"],
    
    repo: "https://github.com/ShooqJanahi/eLMS",
    linkType: "external",
    createdAt: "2023-12",
    details: { description:
        "The eLMS project proposes a tailored electronic learning management system for Bahrain Polytechnic. Using tools like Visual Studio and SQL Server, the system is designed to support three key user groups: administrators, teachers, and students. It focuses on course management, content delivery, enrolment handling, and performance tracking. The project followed a structured software-engineering methodology and emphasizes usability and accessibility in an academic environment.",
      meta: [
        ["Role", "System Designer & Developer"],
        ["Year", "2023"],
        ["Tech", "C#, .NET, SQL Server, UML / EA"],
        ["Domain", "Education / e-Learning"]
      ],
    shots: [] }
  },
  {
    id: "bp-gym",
    title: "Bahrain Polytechnic Gym Application",
    summary:  "Java desktop system that manages members, staff, and trainer assignments for Bahrain Polytechnic’s gym.",
    hero: "assets/img/BPGym_logo.png",
    thumbFit: "contain",
    tags: ["Java"],
     
    repo: "https://github.com/ShooqJanahi/GymManagmentApplication",
    linkType: "external",
    createdAt: "2023-06",
    details: { description:
        "This Java-based gym management system streamlines operations at Bahrain Polytechnic’s gym. Built with object-oriented design principles, it manages members, employees, and personal trainers, including assigning members to trainers and maintaining their records. The project showcases strong OOP design, a simple Swing-based UI, and integration with a relational database.",
      meta: [
        ["Role", "Java Developer"],
        ["Year", "2023"],
        ["Tech", "Java (OOP), Swing, MySQL"],
        ["Domain", "Gym / Membership Management"]
      ], shots: [] }
  },
  {
    id: "extinct-animal",
    title: "Extinct Animal",
    summary: "Educational website showcasing extinct animal species through informative profiles, illustrations, and interactive content designed to inspire learning and curiosity.",
    hero: "assets/img/EA_logo.png",
    thumbFit: "contain",
    tags: ["HTML","CSS","JavaScript"],
    detailsUrl:" https://shooqjanahi.github.io/ExtinctAnimal/index.html",
    primaryLabel: "Demo",
    repo: "https://github.com/ShooqJanahi/ExtinctAnimal",
    linkType: "external",
    createdAt: "2022-12",
    details: { description: "", meta: [["Role","FrontEnd Developer"],
      ["Year", "2022"]
    ],  shots: [
       "assets/screenshots/ExtinctAnimal/Landing1.png",
       "assets/screenshots/ExtinctAnimal/Landing2.png",
       "assets/screenshots/ExtinctAnimal/Landing3.png",
    ] }
  }
];

/* ====== DOM refs ====== */
const $ = (s)=>document.querySelector(s);
const grid = $("#projectsGrid");
const empty = $("#emptyState");
const drawer = $("#drawer");
const drawerClose = $("#drawerClose");
const drawerTitle = $("#drawerTitle");
const detailHero = $("#detailHero");
const detailDesc = $("#detailDesc");
const detailStack = $("#detailStack");
const detailMeta = $("#detailMeta");
const detailShots = $("#detailShots");
const detailPrimaryBtn = $("#detailPrimaryBtn");
const detailRepoBtn = $("#detailRepoBtn");
const searchInput = $("#projectSearch");
const searchClear = $("#projectClear");


/* ====== helpers ====== */
function el(tag, cls, text){ const n=document.createElement(tag); if(cls) n.className=cls; if(text) n.textContent=text; return n; }
function tagPill(t){ return el("span","tag",t); }

/* ====== cards ====== */
function createCard(p){
  const card = el("article","project-card");
  const img  = el("img","project-card__thumb");
  if (p.thumbFit === "contain") img.classList.add("thumb--contain");
  img.src = p.hero;
  img.alt = p.title;

  const body = el("div","project-card__body");
  const h3 = el("h3","project-card__title",p.title);
  const desc = el("p","project-card__desc",p.summary);
  const tags = el("div","project-card__tags");
  (p.tags||[]).forEach(t => tags.appendChild(tagPill(t)));

  const actions = el("div","project-card__actions");

  // DETAILS button – opens preview drawer
  const primary = el("button","button button--flex");
  primary.type = "button";
  primary.textContent = "Details";
  primary.addEventListener("click",(e)=>{
    e.stopPropagation();
    openDrawerWith(p);
    updateHash(p.id);
  });

// GitHub button (optional)
const repo = el("a","button button--flex is-ghost");
repo.innerHTML = '<i class="uil uil-github-alt" style="margin-right:.35rem"></i> GitHub';

// use cardRepo for the card; fall back to repo if cardRepo not provided
const cardRepoUrl = p.cardRepo || p.repo;

if (cardRepoUrl) {
  repo.href = cardRepoUrl;
  repo.target = "_blank";
  repo.rel = "noopener";
} else {
  repo.style.display = "none";
}
repo.addEventListener("click",(e)=> e.stopPropagation());


  actions.append(primary, repo);

  body.append(h3, desc, tags, actions);
  card.append(img, body);

  // Clicking anywhere on the card also opens the drawer
  card.addEventListener("click", ()=>{
    openDrawerWith(p);
    updateHash(p.id);
  });
  card.tabIndex = 0;
  card.addEventListener("keypress",(e)=>{
    if(e.key==="Enter" || e.key===" "){
      e.preventDefault();
      card.click();
    }
  });

  return card;
}


/* ====== drawer ====== */
function openDrawerWith(p){
  drawerTitle.textContent = p.title;
  detailHero.src = p.hero;
  detailDesc.textContent = p.details?.description || p.summary || "";

  detailStack.innerHTML = "";
  (p.tags || []).forEach(t => detailStack.appendChild(tagPill(t)));

  detailMeta.innerHTML = "";
  (p.details?.meta || []).forEach(([k,v])=>{
    const li = document.createElement("li");
    li.innerHTML = `<strong>${k}:</strong> ${v}`;
    detailMeta.appendChild(li);
  });

  // Screenshots
detailShots.innerHTML = "";
currentShots = p.details?.shots || [];

detailShots.innerHTML = "";
currentShots.forEach((src, i) => {
  const im = document.createElement("img");
  im.src = src;
  im.alt = `${p.title} preview ${i+1}`;
  im.className = "detail__shot-img";
  im.addEventListener("click", () => openLightbox(i));
  detailShots.appendChild(im);
});


// Primary button (Demo / Documentation / Details)
if (p.detailsUrl || p.url) {
  const label = p.primaryLabel || "Details";

  // choose icon based on label
  let iconClass = "uil uil-external-link-alt";
  if (label.toLowerCase() === "demo") {
    iconClass = "uil uil-play";                        // 🔹 play icon
  } else if (label.toLowerCase().includes("doc")) {
    iconClass = "uil uil-file-alt";                    // optional: docs icon
  }

  detailPrimaryBtn.href = p.detailsUrl || p.url;
  detailPrimaryBtn.style.display = "inline-flex";
  detailPrimaryBtn.innerHTML = `${label} <i class="${iconClass} button__icon"></i>`;
} else {
  detailPrimaryBtn.style.display = "none";
}


 // Secondary button (GitHub / Demo / etc.)
if (p.repo) {
  const repoLabel = p.repoLabel || "GitHub";

  let repoIcon = "uil uil-external-link-alt";
  if (repoLabel.toLowerCase().includes("git")) {
    repoIcon = "uil uil-github-alt";
  } else if (repoLabel.toLowerCase() === "demo") {
    repoIcon = "uil uil-play";                         // 🔹 play icon for Demo
  }

  detailRepoBtn.href = p.repo;
  detailRepoBtn.style.display = "inline-flex";
  detailRepoBtn.innerHTML = `${repoLabel} <i class="${repoIcon} button__icon"></i>`;
} else {
  detailRepoBtn.style.display = "none";
}



  if (drawer){
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden","false");
  }
}

function closeDrawer(){
  if (!drawer) return;
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  const h=location.hash||""; if(h.startsWith("#/")) history.replaceState(null,"","#");
}
if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
if (drawer) drawer.addEventListener("click",(e)=>{ if(e.target===drawer) closeDrawer(); });
window.addEventListener("keydown",(e)=>{ if(e.key==="Escape") closeDrawer(); });

function updateHash(id){ location.hash = `#/${id}`; }
function handleHash(){
  const h = location.hash || "";
  if(h.startsWith("#/")){
    const id = h.slice(2);
    const p = PROJECTS.find(x => x.id === id);
    if (p) openDrawerWith(p);
  }
}


function filterProjects(q){
  q = q.toLowerCase().trim();
  if(!q) return PROJECTS;
  return PROJECTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.summary.toLowerCase().includes(q) ||
    (p.tags||[]).some(t => t.toLowerCase().includes(q))
  );
}

function applySearch(){
  const q = searchInput.value;
  renderGridFiltered(filterProjects(q));
  searchClear.hidden = !q;
}

function renderGridFiltered(list){
  grid.innerHTML = "";
  if(!list.length){ empty.hidden = false; return; }
  empty.hidden = true;
  list.forEach(p => grid.appendChild(createCard(p)));
}

searchInput?.addEventListener("input", applySearch);
searchClear?.addEventListener("click", () => { searchInput.value=""; applySearch(); });


/* ====== init ====== */
function renderGrid(){
  if (!grid || !empty) return;
  grid.innerHTML="";
  if(!PROJECTS.length){ empty.hidden=false; return; }
  empty.hidden=true;
  PROJECTS.forEach(p=>grid.appendChild(createCard(p)));
}
renderGrid();
window.addEventListener("hashchange", handleHash);
handleHash();


//Screenshot preview
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");


function openLightbox(index){
  currentShotIndex = index;
  lightboxImg.src = currentShots[currentShotIndex];
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden","false");
}

function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
}

function showNext(){
  currentShotIndex = (currentShotIndex + 1) % currentShots.length;
  lightboxImg.src = currentShots[currentShotIndex];
}

function showPrev(){
  currentShotIndex = (currentShotIndex - 1 + currentShots.length) % currentShots.length;
  lightboxImg.src = currentShots[currentShotIndex];
}



document.getElementById("lightboxClose").addEventListener("click", closeLightbox);

document.querySelector(".lightbox__next").addEventListener("click", showNext);
document.querySelector(".lightbox__prev").addEventListener("click", showPrev);

lightbox.addEventListener("click", (e)=>{
  if(e.target === lightbox) closeLightbox(); // click outside to close
});

window.addEventListener("keydown",(e)=>{
  if(e.key === "Escape") closeLightbox();
  if(e.key === "ArrowRight") showNext();
  if(e.key === "ArrowLeft") showPrev();
});

