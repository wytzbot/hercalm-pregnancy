console.log("HerCalm loading...");

let page = 'splash';
let currentSlug = '';
let currentCategory = '';
let country = localStorage.getItem('hercalm_country') || 'default'; // ADD DEFAULT HERE

// SAFETY CHECK: If data.js didn't load
if(typeof GUIDES === 'undefined' || typeof COUNTRY_DATA === 'undefined') {
  document.getElementById('app').innerHTML = `<div style="padding:40px;text-align:center"><h1>Error: data.js not found</h1><p>Please check that data.js is in the same folder as index.html</p></div>`;
}

function render() {
  try {
    const app = document.getElementById('app');
    if(!app) return;

    if(page === 'splash') app.innerHTML = Splash();
    if(page === 'country') app.innerHTML = Country();
    if(page === 'home') app.innerHTML = Home();
    if(page === 'category') app.innerHTML = Category(currentCategory);
    if(page === 'guide') app.innerHTML = Guide(currentSlug);
  } catch(e) {
    document.getElementById('app').innerHTML = `<div style="padding:40px"><h1>App Error</h1><p>${e.message}</p><button onclick="location.reload()">Reload</button></div>`;
    console.error(e);
  }
}

function t(obj) {
  if(!obj) return "";
  return obj[country] || obj['default'] || "";
}

function randomGreeting() {
  if(typeof GREETINGS === 'undefined') return "Welcome Mama!";
  return GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
}

function Splash() {
  setTimeout(() => { page = country && country!== 'default'? 'home' : 'country'; render(); }, 2500);
  return `<div class="splash"><div class="bounce">🫄</div><h1 style="font-size:48px;color:#F472B6;margin:20px 0">HerCalm</h1><p style="font-size:18px">Pregnancy guidance that feels like your best friend</p><button class="btn" onclick="page='country';render()">Get Started</button></div>`;
}

function Country() {
  return `<div class="modal"><div class="card" style="max-width:500px"><h2>Where are you? 🤰</h2><p>We'll show you food and advice available in your country.</p>${Object.keys(COUNTRY_DATA).map(c => `<button class="card" style="width:100%;margin:10px 0;text-align:left" onclick="localStorage.setItem('hercalm_country','${c}'); country='${c}'; page='home'; render()">${COUNTRY_DATA[c].flag} ${COUNTRY_DATA[c].name}</button>`).join('')}</div></div>`;
}

function Home() {
  const categories = ['Food','Activities','Symptoms','Posture','Mental Health'];
  const icons = {'Food':'🍎','Activities':'🏃','Symptoms':'🤒','Posture':'🧘','Mental Health':'🧠'};
  const countryName = COUNTRY_DATA[country]?.name || 'You'; // SAFETY?
  const countryFlag = COUNTRY_DATA[country]?.flag || '🌍';

  return `
    <div class="header"><div class="logo">HerCalm</div><button class="btn" style="padding:8px 16px" onclick="page='country';render()">${countryFlag}</button></div>
    <div class="container">
      <h1>${randomGreeting()}</h1>
      <p style="color:#6b7280;margin-bottom:20px">200+ guides adapted for ${countryName}</p>
      <div class="grid">${categories.map(cat => `
        <div class="category-card card" onclick="page='category';currentCategory='${cat}';render()">
          <div class="category-icon">${icons[cat]}</div>
          <h3>${cat}</h3><p>40+ Guides</p>
        </div>`).join('')}
      </div>
      <div class="ad-slot">Ad Space</div>
      <div class="footer"><a href="privacy.html">Privacy Policy</a> • <span>Medically Reviewed</span></div>
    </div>`;
}

function Category(cat) {
  const filtered = GUIDES.filter(g => g.category === cat);
  return `
    <div class="container">
      <button class="btn" style="background:#6b7280;margin-bottom:20px" onclick="page='home';render()">← Back</button>
      <h1>${cat}</h1>
      <div class="grid">${filtered.map(g => `
        <div class="card" style="cursor:pointer" onclick="page='guide';currentSlug='${g.slug}';render()">
          <h3>${t(g.title)}</h3>
          <span class="badge">Medically Reviewed</span>
        </div>`).join('')}</div>
    </div>`;
}

function Guide(slug) {
  const guide = GUIDES.find(g => g.slug === slug);
  if(!guide) return `<div class="container"><p>Guide not found</p></div>`;

  const speak = () => {
    speechSynthesis.cancel();
    const text = `${t(guide.title)}. ${t(guide.intro)}. ${t(guide.content)}`;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  const stopSpeak = () => speechSynthesis.cancel();

  return `
    <div class="container">
      <button class="btn" style="background:#6b7280;margin-bottom:20px" onclick="page='category';currentCategory='${guide.category}';render()">← Back</button>
      <div class="card">
        <span class="badge">${guide.category}</span> <span class="badge">✅ Reviewed</span>
        <h1 style="margin:15px 0">${t(guide.title)}</h1>
        <button class="btn" onclick="speak()">🔊 Listen to Guide</button>
        <button class="btn" style="background:#f44336;margin-top:10px" onclick="stopSpeak()">⏹️ Stop</button>
        <p style="margin:20px 0"><i>${t(guide.intro)}</i></p>
        <p>${t(guide.content)}</p>
        <div class="dodont" style="margin:20px 0">
          <div class="do"><h3>✅ Do's</h3><ul>${t(guide.dos).map(d=>`<li>${d}</li>`).join('')}</ul></div>
          <div class="dont"><h3>❌ Don'ts</h3><ul>${t(guide.donts).map(d=>`<li>${d}</li>`).join('')}</ul></div>
        </div>
        <h3>FAQs</h3>${guide.faqs.map(f=>`<p><b>Q: ${f.q}</b><br>A: ${f.a}</p>`).join('')}
        <div class="disclaimer">⚠️ Source: ${guide.source}. This is educational only. Talk to your doctor.</div>
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', render);
