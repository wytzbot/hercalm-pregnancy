let currentCategory = '';
let currentCountry = 'default';

// Load country from URL?country=ng
function getCountry() {
    const params = new URLSearchParams(window.location.search);
    return params.get('country') || 'default';
}

// GREETINGS
function showGreeting() {
    const greetingEl = document.getElementById('greeting');
    const randomGreeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
    greetingEl.textContent = randomGreeting;
}

// SHOW CATEGORIES
function showCategories(cat) {
    currentCategory = cat;
    currentCountry = getCountry();

    document.getElementById('home').style.display = 'none';
    document.getElementById('category').style.display = 'block';
    document.getElementById('detail').style.display = 'none';

    document.getElementById('cat-title').textContent = cat;

    const guides = GUIDES.filter(g => g.category === cat);
    const listEl = document.getElementById('guide-list');
    listEl.innerHTML = '';

    guides.forEach(guide => {
        const title = guide.title[currentCountry] || guide.title.default;
        const div = document.createElement('div');
        div.className = 'guide-card';
        div.innerHTML = `<h3>${title}</h3>`;
        div.onclick = () => showDetail(guide.slug);
        listEl.appendChild(div);
    });
}

// SHOW GUIDE DETAIL WITH TTS
function showDetail(slug) {
    stopSpeaking(); // stop any audio playing

    const guide = GUIDES.find(g => g.slug === slug);
    if(!guide) return;

    currentCountry = getCountry();

    document.getElementById('category').style.display = 'none';
    document.getElementById('detail').style.display = 'block';

    const title = guide.title[currentCountry] || guide.title.default;
    const intro = guide.intro[currentCountry] || guide.intro.default;
    const content = guide.content[currentCountry] || guide.content.default;
    const dos = guide.dos[currentCountry] || guide.dos.default;
    const donts = guide.donts[currentCountry] || guide.donts.default;

    const fullTextForTTS = `${title}. ${intro}. ${content}`;

    const detailEl = document.getElementById('detail');
    detailEl.innerHTML = `
        <button onclick="goHome()" style="background:none;border:none;color:#ff6b9d;font-size:1.1rem;margin-bottom:1rem;cursor:pointer;">← Back</button>

        <button onclick="speakText(\`${fullTextForTTS.replace(/`/g, '')}\`)"
            style="background:#4CAF50;color:white;border:none;padding:0.8rem 1.2rem;border-radius:50px;margin-bottom:0.5rem;cursor:pointer;font-size:1rem;width:100%;">
            🔊 Listen to Guide
        </button>

        <button onclick="stopSpeaking()"
            style="background:#f44336;color:white;border:none;padding:0.5rem 1rem;border-radius:50px;margin-bottom:1.5rem;cursor:pointer;font-size:0.9rem;width:100%;">
            ⏹️ Stop
        </button>

        <h2>${title}</h2>
        <p style="font-style:italic;color:#666;margin:1rem 0;">${intro}</p>
        <div style="white-space:pre-line;line-height:1.8;">${content}</div>

        <h3 style="margin-top:2rem;color:#4CAF50;">✅ Do's</h3>
        <ul>${dos.map(d => `<li>${d}</li>`).join('')}</ul>

        <h3 style="margin-top:1rem;color:#f44336;">❌ Don'ts</h3>
        <ul>${donts.map(d => `<li>${d}</li>`).join('')}</ul>

        <h3 style="margin-top:1rem;">❓ FAQs</h3>
        ${guide.faqs.map(f => `<p><b>Q: ${f.q}</b><br>A: ${f.a}</p>`).join('')}`
        <p style="font-size:0.8rem;color:#999;margin-top:2rem;">Source: ${guide.source}</p>
    `;
}

// GO HOME
function goHome() {
    stopSpeaking();
    document.getElementById('home').style.display = 'block';
    document.getElementById('category').style.display = 'none';
    document.getElementById('detail').style.display = 'none';
}

// ========== TEXT TO SPEECH ==========
let speech = null;

function speakText(text) {
    if (!('speechSynthesis' in window)) {
        alert("Sorry, your browser doesn't support Text to Speech");
        return;
    }

    stopSpeaking();

    // Clean text for better speech
    const cleanText = text.replace(/\*\*/g, '').replace(/😂|😭|🫄|💖|👑|✨|🔊|⏹️|←/g, '');

    speech = new SpeechSynthesisUtterance(cleanText);
    speech.lang = 'en-US';
    speech.rate = 0.9; // Not too fast
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}

function stopSpeaking() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}

// INIT
window.onload = () => {
    showGreeting();
      }
