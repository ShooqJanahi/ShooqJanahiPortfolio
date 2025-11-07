/* ====== Page data ====== */
const PROJECTS = [
  {
    id: "shift-handover",
    title: "Shift Handover",
    summary: "A streamlined shift management tool that allows supervisors to record incidents, manpower usage, and key updates. Closed shifts generate auto-formatted PDF reports for smooth handovers.",
    hero: "assets/img/Shift_Handover_Logo.png",
    thumbFit: "contain",                               // logo – don’t crop
    tags: ["C#/.NET","ASP.NET MVC","SQL Server","QuestPDF"],
    detailsUrl: "https://github.com/ShooqJanahi/ShiftHandover#readme",
    repo: "https://github.com/ShooqJanahi/ShiftHandover",
    linkType: "external",
    createdAt: "2025-03",
    details: { description: "Web system for shift supervisors with PDF report generation.", meta: [["Role","Full-stack"],["Year","2025"]], shots: [] }
  },
  {
    id: "photonest",
    title: "PhotoNest",
    summary: "A lightweight, Firebase-powered photo organizer for storing, managing, and sharing images with ease.",
    hero: "assets/img/PhotoNest.png",
    tags: ["HTML/CSS/JS","Firebase"],
    detailsUrl: "https://onedrive.live.com/?id=FA653E8D72B308DF%21s7fcc0141fc6b48218afc77433d3adeaa&cid=fa653e8d72b308df&ithint=folder&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy9mYTY1M2U4ZDcyYjMwOGRmL0VrRUJ6SDlyX0NGSWl2eDNRejA2M3FvQnMwUXlxeWkyR1RUWUwtLTJIX0NwMmc_ZT1EZ1hrdDY",
    linkType: "external",
    createdAt: "2024-12",
    details: { description: "", meta: [], shots: [] }
  },
  {
    id: "orient-events",
    title: "Orient Event Organizer",
    summary: "Event booking system with admin management, venue reservations, and automated status updates using SQL triggers and procedures.",
    hero: "assets/img/OrientEventOrganizer.png",
    tags: ["Java","SQL"],
     detailsUrl: "https://github.com/ShooqJanahi/OrientEventOrganizer#readme",
    repo: "https://github.com/ShooqJanahi/OrientEventOrganizer",
    linkType: "external",
    createdAt: "2024-05",
    details: { description: "", meta: [], shots: [] }
  },
  {
    id: "labcaught",
    title: "LabCaught",
    summary: "Swift iOS medical lab booking app.",
    hero: "assets/img/LabCaught_Logo.jpeg",
    thumbFit: "contain",
    tags: ["Swift","iOS"],
   detailsUrl: "https://github.com/ShooqJanahi/LabCaught#readme",
    repo: "https://github.com/ShooqJanahi/LabCaught",
    linkType: "external",
    createdAt: "2024-01",
    details: { description: "", meta: [], shots: [] }
  },
  {
    id: "elms",
    title: "eLMS (Electronic Learning Management System)",
    summary: "C# + SQL Server — web system, activity diagrams, admin/teacher/student flows.",
    hero: "assets/img/ELMS_logo.png",
    thumbFit: "contain",
    tags: ["C#/.NET","SQL Server"],
    detailsUrl:" https://github.com/ShooqJanahi/eLMS#readme",
    repo: "https://github.com/ShooqJanahi/eLMS",
    linkType: "external",
    createdAt: "2023-12",
    details: { description: "", meta: [], shots: [] }
  },
  {
    id: "bp-gym",
    title: "Bahrain Polytechnic Gym Application",
    summary: "Java-based gym management system with an intuitive GUI for handling members, employees, and trainer assignments.",
    hero: "assets/img/BPGym_logo.png",
    thumbFit: "contain",
    tags: ["Java"],
     detailsUrl:"https://github.com/ShooqJanahi/GymManagmentApplication#readme",
    repo: "https://github.com/ShooqJanahi/GymManagmentApplication",
    linkType: "external",
    createdAt: "2023-06",
    details: { description: "", meta: [], shots: [] }
  },
  {
    id: "extinct-animal",
    title: "Extinct Animal",
    summary: "Educational website showcasing extinct animal species through informative profiles, illustrations, and interactive content designed to inspire learning and curiosity.",
    hero: "assets/img/EA_logo.png",
    thumbFit: "contain",
    tags: ["HTML","CSS","JavaScript"],
   detailsUrl:" https://shooqjanahi.github.io/ExtinctAnimal/index.html",
    repo: "https://github.com/ShooqJanahi/ExtinctAnimal",
    linkType: "external",
    createdAt: "2022-12",
    details: { description: "", meta: [], shots: [] }
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
  img.src = p.hero; img.alt = p.title;
  const body = el("div","project-card__body");
  const h3 = el("h3","project-card__title",p.title);
  const desc = el("p","project-card__desc",p.summary);
  const tags = el("div","project-card__tags"); (p.tags||[]).forEach(t=>tags.appendChild(tagPill(t)));

  const actions = el("div","project-card__actions");
  const primary = el("a","button button--flex");
  primary.textContent = "Details";


  const repo = el("a","button button--flex is-ghost"); 
  repo.innerHTML='<i class="uil uil-github-alt" style="margin-right:.35rem"></i> GitHub';
 if (p.detailsUrl || p.url) {
  primary.href = p.detailsUrl || p.url;
  primary.target = "_blank";
  primary.rel = "noopener";
}
if (p.repo){
  repo.href = p.repo;
  repo.target = "_blank";
  repo.rel = "noopener";
}
  actions.append(primary, repo);

  // prevent card click from hijacking the anchor clicks
primary.addEventListener("click", (e)=> e.stopPropagation());
repo.addEventListener("click", (e)=> e.stopPropagation());

  body.append(h3, desc, tags, actions);
  card.append(img, body);

  card.addEventListener("click", ()=>{
    if(p.linkType==="external" && p.url){ window.open(p.url,"_blank"); }
    else { openDrawerWith(p); updateHash(p.id); }
  });
  card.addEventListener("keypress",(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); card.click(); }});

  return card;
}

/* ====== drawer ====== */
function openDrawerWith(p){
  drawerTitle.textContent = p.title;
  detailHero.src = p.hero;
  detailDesc.textContent = p.details?.description || p.summary || "";

  detailStack.innerHTML=""; (p.tags||[]).forEach(t=>detailStack.appendChild(tagPill(t)));

  detailMeta.innerHTML=""; (p.details?.meta||[]).forEach(([k,v])=>{
    const li=document.createElement("li"); li.innerHTML=`<strong>${k}:</strong> ${v}`; detailMeta.appendChild(li);
  });

  detailShots.innerHTML=""; (p.details?.shots||[]).forEach(src=>{
    const im=document.createElement("img"); im.src=src; im.alt=`${p.title} preview`; detailShots.appendChild(im);
  });

 if (p.detailsUrl || p.url){
  detailPrimaryBtn.href = p.detailsUrl || p.url;
  detailPrimaryBtn.style.display = "inline-flex";
  detailPrimaryBtn.textContent = "Details";
} else {
  detailPrimaryBtn.style.display = "none";
}
if (p.repo){
  detailRepoBtn.href = p.repo;
  detailRepoBtn.style.display = "inline-flex";
} else {
  detailRepoBtn.style.display = "none";
}
  if (drawer){ drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); }
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
  const h=location.hash||"";
  if(h.startsWith("#/")){
    const id=h.slice(2);
    const p=PROJECTS.find(x=>x.id===id);
    if(p && p.linkType!=="external") openDrawerWith(p);
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
