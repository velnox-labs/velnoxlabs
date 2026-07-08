/* ==========================================================================
   VELNOX LABS — App logic
   ========================================================================== */

const SUPABASE_URL="https://fevujjvpmehimeajbsez.supabase.co";
const SUPABASE_KEY="sb_publishable_f8idRLFwQXZ4FvEdpoIdGA_WSk8jc4o";
const supabase=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

/* ---------------------------- DATA ---------------------------- */

const SERVICES = [
  { n:'01', title:'Website Development', desc:'Custom-built websites engineered from scratch, tuned for speed, structure and long-term maintainability.' },
  { n:'02', title:'Business Websites', desc:'Corporate-grade sites that establish credibility and convert visitors into enquiries.' },
  { n:'03', title:'Educational Portals', desc:'Structured, accessible portals for institutes, coaching centres and e-learning platforms.' },
  { n:'04', title:'Landing Pages', desc:'High-converting single-page experiences built for campaigns and product launches.' },
  { n:'05', title:'Portfolio Websites', desc:'Elegant, visual-first sites for creators, studios and professionals to showcase their work.' },
  { n:'06', title:'Restaurant Websites', desc:'Menu-forward designs with ordering flows, galleries and reservation-ready layouts.' },
  { n:'07', title:'Hospital Websites', desc:'Trustworthy, accessible healthcare sites with clear department and appointment structuring.' },
  { n:'08', title:'School Websites', desc:'Admissions-friendly sites for schools with notices, faculty and academic sections.' },
  { n:'09', title:'Shop Websites', desc:'Product-led storefronts with catalogues, categories and a streamlined checkout journey.' },
  { n:'10', title:'Business Cards', desc:'Digital business cards and micro-sites that put your contact details one tap away.' },
  { n:'11', title:'Graphic Design', desc:'Brand marks, social creatives and visual assets that match your new digital identity.' },
  { n:'12', title:'Website Redesign', desc:'A full teardown and rebuild of your existing site — same brand, an entirely new experience.' },
  { n:'13', title:'Website Optimization', desc:'Performance, SEO and accessibility passes that make an existing site faster and sharper.' },
  { n:'14', title:'Maintenance', desc:'Ongoing updates, monitoring and support so your site keeps running flawlessly.' },
];

const PORTFOLIO = [
  { cat:'Creative Agency', title:'Nimbus Studio', desc:'A bold portfolio site for a design collective, built around large-format case studies.', tech:['HTML','Tailwind','GSAP'], grad:'linear-gradient(135deg,#4f46e5,#9333ea)' },
  { cat:'Banking', title:'Trustline Bank', desc:'A calm, secure banking interface with clear account flows and compliance-ready layout.', tech:['HTML','Tailwind','JS'], grad:'linear-gradient(135deg,#065f46,#10b981)' },
  { cat:'Restaurant', title:'Basil & Bloom', desc:'A warm restaurant site with an animated menu and reservation call-to-action.', tech:['HTML','Tailwind','JS'], grad:'linear-gradient(135deg,#ec4899,#f59e0b)' },
  { cat:'Education', title:'Aarambh Academy', desc:'An admissions-ready portal for a coaching institute with course and faculty sections.', tech:['HTML','Tailwind','JS'], grad:'linear-gradient(135deg,#4f46e5,#0ea5e9)' },
  { cat:'Healthcare', title:'CarePoint Clinic', desc:'A calming hospital site structured around departments, doctors and appointments.', tech:['HTML','Tailwind','JS'], grad:'linear-gradient(135deg,#0ea5e9,#10b981)' },
  { cat:'E-commerce', title:'Loom & Linen', desc:'A minimal storefront for a home-textiles brand with a fast, filterable catalogue.', tech:['HTML','Tailwind','JS'], grad:'linear-gradient(135deg,#9333ea,#ec4899)' },
];

const TESTIMONIALS = [
  { quote:'Velnox Labs rebuilt our site from the ground up and it finally feels as premium as the school itself. Enquiries from the contact form have nearly doubled.', name:'Aarambh Academy', role:'Admissions Office' },
  { quote:'The turnaround was fast and every revision was handled without friction. Our booking page now loads instantly, even on slow mobile networks.', name:'Basil & Bloom', role:'Guest Relations Team' },
  { quote:'We needed a site that felt secure and calm for our customers. The final result balances that trust with a genuinely modern interface.', name:'Trustline Bank', role:'Digital Banking Division' },
  { quote:'From the first call to launch day, communication stayed clear and instant over Instagram DMs — no chasing, no confusion.', name:'Loom & Linen', role:'Founder\'s Office' },
  { quote:'Our old site looked a decade old. What Velnox Labs delivered instead feels like it belongs to a much larger brand.', name:'CarePoint Clinic', role:'Operations Team' },
  { quote:'The pricing calculator alone saved us three back-and-forth calls. We knew our budget before we even filled the order form.', name:'Nimbus Studio', role:'Studio Management' },
];

const FAQS = [
  { q:'How long does a typical project take?', a:'Most business websites are delivered within 7–14 days from the day requirements are finalised. Larger portals or e-commerce builds can take 3–5 weeks depending on scope.' },
  { q:'Do you offer revisions?', a:'Yes. Every package includes structured revision rounds during both the design and development stages, so the final build matches your expectations before launch.' },
  { q:'Can I request a redesign of my current website?', a:'Absolutely. Website Redesign is one of our core services — we rebuild your site from scratch while keeping your brand identity intact.' },
  { q:'How do I get in touch during the project?', a:'All communication happens over Instagram Direct Messages at @velnox.labs, so you get quick, informal updates without waiting on email threads.' },
  { q:'Do you provide hosting and domain setup?', a:'We can guide you through hosting and domain setup, and our Maintenance service keeps everything running smoothly after launch.' },
  { q:'What if I only need a single landing page?', a:'That\'s exactly what our Landing Page service and Starter pricing tier are built for — a fast, focused build for one specific goal.' },
  { q:'Will my website work well on mobile?', a:'Every project is built mobile-first and tested across breakpoints, so your site looks sharp on phones, tablets and desktops alike.' },
  { q:'Can my project be featured in your portfolio?', a:'With your permission, yes — your project can appear as a live demo on our Demo Websites page, and optionally remain in our portfolio after launch.' },
];

const PRICING = [
  { name:'Starter', tag:null, desc:'For a single focused page', price:6999, cycle:'project',
    features:['1 page website','Mobile-responsive layout','Basic on-page SEO','Instagram-linked contact CTA','3-day delivery','1 revision round'] },
  { name:'Growth', tag:'Most Popular', desc:'For growing businesses', price:14999, cycle:'project',
    features:['Up to 5 pages','Custom animations & micro-interactions','Advanced SEO structuring','Contact & enquiry forms','7-day delivery','3 revision rounds','1 month free maintenance'] },
  { name:'Signature', tag:null, desc:'For a complete premium build', price:29999, cycle:'project',
    features:['Up to 10 pages','Glassmorphism & premium UI kit','Interactive pricing / booking tools','Performance & accessibility audit','14-day delivery','Unlimited revisions (build phase)','3 months free maintenance'] },
];

const COMPARE_FEATURES = [
  { label:'Pages included', starter:'1', growth:'Up to 5', signature:'Up to 10' },
  { label:'Custom animations', starter:false, growth:true, signature:true },
  { label:'SEO structuring', starter:'Basic', growth:'Advanced', signature:'Advanced +' },
  { label:'Contact / enquiry forms', starter:false, growth:true, signature:true },
  { label:'Pricing or booking tools', starter:false, growth:false, signature:true },
  { label:'Free maintenance', starter:false, growth:'1 month', signature:'3 months' },
  { label:'Revision rounds', starter:'1', growth:'3', signature:'Unlimited' },
];

const PROCESS = [
  { title:'Discovery Call', desc:'We start on Instagram DM — understanding your business, audience and goals before a single pixel is designed.', meta:['1–2 days'] },
  { title:'Design Concept', desc:'A tailored visual direction — palette, type and layout — built specifically around your brand, not a template.', meta:['2–3 days'] },
  { title:'Development', desc:'The approved concept is engineered into a fast, responsive, animated website using lightweight code.', meta:['3–7 days'] },
  { title:'Review & Refine', desc:'You review the live build and request adjustments across the included revision rounds.', meta:['2–3 days'] },
  { title:'Launch', desc:'Final checks on performance, accessibility and SEO, then your website goes live.', meta:['1 day'] },
  { title:'Ongoing Support', desc:'Optional maintenance keeps your site updated, secure and fast long after launch.', meta:['Ongoing'] },
];

const ICONS = {
  code:'<path d="M9 18l-6-6 6-6M15 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  bolt:'<path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
  shield:'<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
  layers:'<path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
  check:'<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  spark:'<path d="M12 2l1.9 6.6L20 10l-6.1 1.4L12 18l-1.9-6.6L4 10l6.1-1.4L12 2z" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/>',
  chat:'<path d="M21 11.5a8.5 8.5 0 01-8.5 8.5 8.4 8.4 0 01-3.9-.9L3 21l1.9-5.6A8.4 8.4 0 013.5 11.5 8.5 8.5 0 0112 3a8.5 8.5 0 019 8.5z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
  mail:'<path d="M4 4h16v16H4V4z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M4 6l8 7 8-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  pin:'<path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2" fill="none"/>',
  clock:'<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  gauge:'<path d="M12 12l4-4M4 20a8 8 0 1116 0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>',
  target:'<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>',
  insta:'<rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/>',
};
function icon(name,cls){ return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none">${ICONS[name]||''}</svg>`; }

const TECH_STACK = ['HTML5','CSS3','Tailwind CSS','JavaScript','GSAP-style Motion','Figma','SEO Toolkit','Responsive Grid','WebP Imaging','Accessibility (A11y)'];

const FEATURES = [
  { icon:'bolt', title:'Built for Speed', desc:'Lightweight code with no bloated frameworks — pages load fast on any connection.' },
  { icon:'layers', title:'Pixel-Perfect UI', desc:'Every spacing, gradient and shadow is tuned by hand, not auto-generated.' },
  { icon:'shield', title:'Reliable & Secure', desc:'Clean, semantic code that\'s easy to maintain and safe to extend over time.' },
  { icon:'gauge', title:'SEO Optimised', desc:'Structured markup and metadata so your business is easy to discover.' },
  { icon:'eye', title:'Accessible by Default', desc:'Keyboard navigation, focus states and contrast checked at every step.' },
  { icon:'target', title:'Conversion Focused', desc:'Every layout is designed around a clear next step for your visitor.' },
];

/* ---------------------------- ROUTING ---------------------------- */

const ROUTES = ['home','services','portfolio','demos','pricing','process','faq','about','contact','order'];

function currentRoute(){
  const h = (location.hash || '#home').replace('#','').split('?')[0];
  return ROUTES.includes(h) ? h : '404';
}

function navigate(route){
  location.hash = '#' + route;
}

function renderRoute(){
  const route = currentRoute();
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const target = document.getElementById('page-' + route);
  if(target){ target.classList.add('active'); }
  document.querySelectorAll('.nav-link, .mobile-link').forEach(el=>{
    el.classList.toggle('active', el.dataset.route === route);
  });
  window.scrollTo({ top:0, behavior:'instant' in window ? 'instant' : 'auto' });
  closeMobileMenu();
  if(route === 'home') setTimeout(animateCounters, 250);
  initRevealObserver();
  document.title = route === 'home'
    ? 'Velnox Labs | Engineering Premium Digital Experiences'
    : `${route.charAt(0).toUpperCase()+route.slice(1)} | Velnox Labs`;
}

/* ---------------------------- BUILD STATIC SECTIONS FROM DATA ---------------------------- */

function buildServiceGrid(container){
  container.innerHTML = SERVICES.map(s => `
    <div class="card service-card reveal">
      <span class="service-num">${s.n}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <span class="service-tag">Learn more ${icon('bolt','')}</span>
    </div>`).join('');
}

function buildPortfolio(container, limit){
  const items = limit ? PORTFOLIO.slice(0,limit) : PORTFOLIO;
  container.innerHTML = items.map(p => `
    <div class="card port-card reveal">
      <div class="port-thumb" style="background:${p.grad}">
        <div class="port-chrome"><span></span><span></span><span></span></div>
      </div>
      <div class="port-body">
        <span class="port-cat">${p.cat}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="port-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="port-actions">
          <button class="btn btn-ghost btn-sm magnetic" onclick="navigate('demos')">Preview</button>
          <button class="btn btn-primary btn-sm magnetic" onclick="navigate('order')">Request Similar</button>
        </div>
      </div>
    </div>`).join('');
}

function buildTestimonials(container){
  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="card testi-card reveal">
      <div class="testi-stars">${'★★★★★'.split('').map(()=>icon('spark','')).join('')}</div>
      <p class="testi-quote">"${t.quote}"</p>
      <div class="testi-foot">
        <div class="testi-avatar">${t.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </div>`).join('');
}

function buildFaq(container, items){
  container.innerHTML = items.map((f,i) => `
    <div class="faq-item reveal">
      <button class="faq-q" onclick="toggleFaq(this)">
        <span>${f.q}</span>
        <span class="plus">${icon('spark','')}</span>
      </button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join('');
}

function toggleFaq(btn){
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  item.parentElement.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!wasOpen) item.classList.add('open');
}

function buildFeatures(container){
  container.innerHTML = FEATURES.map(f => `
    <div class="card feature-card reveal">
      <div class="feature-icon">${icon(f.icon,'')}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>`).join('');
}

function buildTechMarquee(container){
  const items = TECH_STACK.concat(TECH_STACK);
  container.innerHTML = items.map(t => `<div class="tech-pill">${icon('code','')} ${t}</div>`).join('');
}

function buildProcess(container, compact){
  const items = compact ? PROCESS.slice(0,3) : PROCESS;
  container.innerHTML = items.map((p,i) => `
    <div class="process-row reveal">
      <div class="process-line">
        <div class="process-dot">${String(i+1).padStart(2,'0')}</div>
        ${i < items.length-1 ? '<div class="process-track"></div>' : ''}
      </div>
      <div class="process-item">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="process-meta">${p.meta.map(m=>`<span>${m}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

function buildPricingCards(container){
  container.innerHTML = PRICING.map(p => `
    <div class="card price-card reveal ${p.tag ? 'pop' : ''}">
      ${p.tag ? `<span class="price-badge">${p.tag}</span>` : ''}
      <h3>${p.name}</h3>
      <span class="desc">${p.desc}</span>
      <div class="price-amount">₹${p.price.toLocaleString('en-IN')}<sup>/${p.cycle}</sup></div>
      <ul class="price-list">${p.features.map(f=>`<li>${icon('check','')}<span>${f}</span></li>`).join('')}</ul>
      <button class="btn btn-primary btn-block magnetic" onclick="navigate('order')">Choose ${p.name}</button>
    </div>`).join('');
}

function buildCompareTable(container){
  const rows = COMPARE_FEATURES.map(f => `
    <tr>
      <td>${f.label}</td>
      <td>${cell(f.starter)}</td>
      <td>${cell(f.growth)}</td>
      <td>${cell(f.signature)}</td>
    </tr>`).join('');
  function cell(v){
    if(v === true) return icon('check','');
    if(v === false) return '<span class="no">—</span>';
    return v;
  }
  container.innerHTML = `
    <table class="compare-table">
      <thead><tr><th>Feature</th><th>Starter</th><th>Growth</th><th>Signature</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

/* ---------------------------- REVEAL ON SCROLL ---------------------------- */

let revealObserver;
function initRevealObserver(){
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
  }, { threshold:0.12 });
  document.querySelectorAll('.page.active .reveal').forEach(el=>revealObserver.observe(el));
}

/* ---------------------------- COUNTERS ---------------------------- */

let countersDone = false;
function animateCounters(){
  if(countersDone) return;
  const counters = document.querySelectorAll('[data-count]');
  if(!counters.length) return;
  countersDone = true;
  counters.forEach(el=>{
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 50;
    const timer = setInterval(()=>{
      current += step;
      if(current >= target){ current = target; clearInterval(timer); }
      el.textContent = (target % 1 !== 0 ? current.toFixed(1) : Math.floor(current)) + suffix;
    }, 24);
  });
}

/* ---------------------------- TYPING ANIMATION ---------------------------- */

function initTyping(){
  const el = document.getElementById('typing-target');
  if(!el) return;
  const phrases = ['Business Websites.','Educational Portals.','Restaurant Websites.','Hospital Websites.','Shop Websites.','Premium Landing Pages.'];
  let pi=0, ci=0, deleting=false;
  function tick(){
    const phrase = phrases[pi];
    if(!deleting){
      ci++;
      el.textContent = phrase.slice(0,ci);
      if(ci === phrase.length){ deleting = true; setTimeout(tick, 1300); return; }
    } else {
      ci--;
      el.textContent = phrase.slice(0,ci);
      if(ci === 0){ deleting = false; pi = (pi+1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 30 : 55);
  }
  tick();
}

/* ---------------------------- PARTICLE / NODE CANVAS ---------------------------- */

function initCanvas(){
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize);
  resize();

  class P{
    constructor(){
      this.x = Math.random()*canvas.width;
      this.y = Math.random()*canvas.height;
      this.size = Math.random()*1.6+0.6;
      this.sx = (Math.random()-0.5)*0.28;
      this.sy = (Math.random()-0.5)*0.28;
    }
    update(){
      this.x += this.sx; this.y += this.sy;
      if(this.x > canvas.width) this.x = 0; if(this.x < 0) this.x = canvas.width;
      if(this.y > canvas.height) this.y = 0; if(this.y < 0) this.y = canvas.height;
    }
    draw(){
      ctx.fillStyle = 'rgba(79,70,229,0.16)';
      ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill();
    }
  }
  const count = Math.min(60, Math.floor(window.innerWidth/22));
  for(let i=0;i<count;i++) particles.push(new P());

  function connect(){
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx = particles[i].x-particles[j].x, dy = particles[i].y-particles[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 110){
          ctx.strokeStyle = `rgba(147,51,234,${0.08*(1-dist/110)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.stroke();
        }
      }
    }
  }

  let reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{ p.update(); p.draw(); });
    connect();
    if(!reduced) requestAnimationFrame(frame);
  }
  frame();
}

/* ---------------------------- CURSOR GLOW + MAGNETIC BUTTONS ---------------------------- */

function initCursor(){
  const glow = document.getElementById('cursor-glow');
  if(!glow) return;
  window.addEventListener('mousemove', e=>{
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

function initMagnetic(){
  document.addEventListener('mousemove', e=>{
    document.querySelectorAll('.magnetic').forEach(btn=>{
      const r = btn.getBoundingClientRect();
      const cx = r.left + r.width/2, cy = r.top + r.height/2;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if(dist < 90){
        btn.style.transform = `translate(${dx*0.16}px, ${dy*0.16}px)`;
      } else {
        btn.style.transform = '';
      }
    });
  });
}

/* ---------------------------- NAV / SCROLL PROGRESS / MOBILE MENU ---------------------------- */

function initNavScroll(){
  const navGlass = document.getElementById('nav-glass');
  const progress = document.getElementById('scroll-progress');
  window.addEventListener('scroll', ()=>{
    navGlass.classList.toggle('scrolled', window.scrollY > 12);
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = (isFinite(pct) ? pct : 0) + '%';
  });
}

function toggleMobileMenu(){
  document.getElementById('mobile-menu').classList.toggle('open');
  document.getElementById('nav-burger').classList.toggle('open');
}
function closeMobileMenu(){
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('nav-burger').classList.remove('open');
}

/* ---------------------------- PRICING CALCULATOR ---------------------------- */

const calcState = { category:'business', pages:5, timeline:'standard', budgetFeatures:new Set() };

const CALC_CATEGORY_BASE = {
  business:1400, education:1600, landing:900, portfolio:1200,
  restaurant:1500, hospital:1900, school:1700, shop:2200
};
const CALC_TIMELINE_MULT = { rush:1.35, standard:1, relaxed:0.9 };
const CALC_FEATURES = {
  animations:1200, forms:600, seo:900, multilang:1500, ecommerce:3500, cms:2200
};

function initCalculator(){
  const pagesInput = document.getElementById('calc-pages');
  const categorySelect = document.getElementById('calc-category');
  const timelineButtons = document.querySelectorAll('[data-timeline]');
  const featureChips = document.querySelectorAll('[data-feature]');
  if(!pagesInput) return;

  pagesInput.addEventListener('input', ()=>{ calcState.pages = parseInt(pagesInput.value); updateCalc(); });
  categorySelect.addEventListener('change', ()=>{ calcState.category = categorySelect.value; updateCalc(); });
  timelineButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      timelineButtons.forEach(b=>b.classList.remove('on'));
      btn.classList.add('on');
      calcState.timeline = btn.dataset.timeline;
      updateCalc();
    });
  });
  featureChips.forEach(chip=>{
    chip.addEventListener('click', ()=>{
      const f = chip.dataset.feature;
      chip.classList.toggle('on');
      if(calcState.budgetFeatures.has(f)) calcState.budgetFeatures.delete(f); else calcState.budgetFeatures.add(f);
      updateCalc();
    });
  });
  updateCalc();
}

function updateCalc(){
  const pagesLabel = document.getElementById('calc-pages-val');
  if(pagesLabel) pagesLabel.textContent = calcState.pages + (calcState.pages > 1 ? ' pages' : ' page');
  const base = CALC_CATEGORY_BASE[calcState.category] || 1400;
  let total = base * calcState.pages;
  calcState.budgetFeatures.forEach(f=>{ total += CALC_FEATURES[f] || 0; });
  total *= CALC_TIMELINE_MULT[calcState.timeline] || 1;
  total = Math.round(total / 100) * 100;
  const totalEl = document.getElementById('calc-total');
  if(totalEl) totalEl.textContent = '₹' + total.toLocaleString('en-IN');
  const igLink = document.getElementById('calc-insta-link');
  if(igLink){
    const msg = `Hi Velnox Labs! I'd like a quote for a ${calcState.category} website, ${calcState.pages} page(s), estimated around ₹${total.toLocaleString('en-IN')}.`;
    igLink.href = 'https://instagram.com/velnox.labs';
    igLink.dataset.prefill = msg;
  }
}

/* ---------------------------- ORDER FORM ---------------------------- */

function initOrderForm(){
  const form = document.getElementById('order-form');
  if(!form) return;

  const featureChips = document.querySelectorAll('[data-order-feature]');
  const orderState = { features:new Set() };
  featureChips.forEach(chip=>{
    chip.addEventListener('click', ()=>{
      chip.classList.toggle('on');
      const f = chip.dataset.orderFeature;
      if(orderState.features.has(f)) orderState.features.delete(f); else orderState.features.add(f);
      updateOrderEstimate();
    });
  });

  ['order-pages','order-category','order-timeline','order-budget'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener('input', updateOrderEstimate);
  });

  function updateOrderEstimate(){
    const pages = parseInt(document.getElementById('order-pages').value) || 1;
    const category = document.getElementById('order-category').value;
    const base = CALC_CATEGORY_BASE[category] || 1400;
    let total = base * pages;
    orderState.features.forEach(f=>{ total += CALC_FEATURES[f] || 500; });
    total = Math.round(total/100)*100;
    document.getElementById('order-estimate').textContent = '₹' + total.toLocaleString('en-IN');
    document.getElementById('order-pages-val').textContent = pages + (pages > 1 ? ' pages' : ' page');
  }
  updateOrderEstimate();

  const fields = {
    'order-name': v => v.trim().length >= 2 || 'Please enter your full name.',
    'order-email': v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter a valid email address.',
    'order-phone': v => /^[0-9+\-\s]{7,15}$/.test(v) || 'Enter a valid phone number.',
    'order-category': v => v !== '' || 'Please select a project category.',
    'order-timeline': v => v !== '' || 'Please select a timeline.',
    'order-budget': v => v !== '' || 'Please select a budget range.',
  };

  function validateField(id){
    const el = document.getElementById(id);
    const wrap = el.closest('.form-field');
    const result = fields[id](el.value);
    if(result === true){ wrap.classList.remove('invalid'); wrap.classList.add('valid'); return true; }
    wrap.classList.add('invalid'); wrap.classList.remove('valid');
    wrap.querySelector('.form-error').textContent = result;
    return false;
  }

  Object.keys(fields).forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('blur', ()=>validateField(id));
    el.addEventListener('input', ()=>{ if(el.closest('.form-field').classList.contains('invalid')) validateField(id); });
  });

  form.addEventListener('submit', async e=>{
    e.preventDefault();
    let allValid = true;
    Object.keys(fields).forEach(id=>{ if(!validateField(id)) allValid = false; });
    if(!allValid){
      const firstInvalid = form.querySelector('.form-field.invalid');
      if(firstInvalid) firstInvalid.scrollIntoView({ behavior:'smooth', block:'center' });
      return;
    }
    const data={full_name:document.getElementById("order-name").value.trim(),email:document.getElementById("order-email").value.trim(),phone:document.getElementById("order-phone").value.trim(),category:document.getElementById("order-category").value,timeline:document.getElementById("order-timeline").value,budget:document.getElementById("order-budget").value,pages:Number(document.getElementById("order-pages").value),features:[...orderState.features],project_details:document.getElementById("order-message").value.trim(),estimate:document.getElementById("order-estimate").textContent};
    const {error}=await supabase.from("order_requests").insert([data]);
    if(error){console.error(error);alert("Unable to submit your request. Please try again.");return;}
    openSuccessModal();
    form.reset();
    document.querySelectorAll('[data-order-feature].on').forEach(c=>c.classList.remove('on'));
    orderState.features.clear();
    document.querySelectorAll('#order-form .form-field').forEach(f=>f.classList.remove('valid','invalid'));
    updateOrderEstimate();
  });
}

function openSuccessModal(){
  document.getElementById('success-modal').classList.add('open');
}
function closeSuccessModal(){
  document.getElementById('success-modal').classList.remove('open');
  navigate('home');
}

/* ---------------------------- INIT ---------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  buildServiceGrid(document.getElementById('services-grid-full'));
  buildServiceGrid(document.getElementById('services-grid-home'));
  buildPortfolio(document.getElementById('portfolio-grid-full'));
  buildPortfolio(document.getElementById('portfolio-grid-home'), 3);
  buildTestimonials(document.getElementById('testimonials-grid-home'));
  buildFaq(document.getElementById('faq-list-full'), FAQS);
  buildFaq(document.getElementById('faq-list-home'), FAQS.slice(0,4));
  buildFeatures(document.getElementById('features-grid'));
  buildTechMarquee(document.getElementById('tech-marquee'));
  buildProcess(document.getElementById('process-list-full'));
  buildProcess(document.getElementById('process-list-home'), true);
  buildProcess(document.getElementById('process-list-about'));
  buildPricingCards(document.getElementById('pricing-cards'));
  buildCompareTable(document.getElementById('compare-table-wrap'));

  initCanvas();
  initCursor();
  initMagnetic();
  initNavScroll();
  initTyping();
  initCalculator();
  initOrderForm();

  document.getElementById('nav-burger').addEventListener('click', toggleMobileMenu);

  window.addEventListener('hashchange', renderRoute);
  renderRoute();

  setTimeout(()=>{ document.getElementById('loader').classList.add('hide'); }, 900);
});
