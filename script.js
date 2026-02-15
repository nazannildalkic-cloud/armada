const translations = {
    de: {
        nav_home: "Home", nav_packages: "Konzepte", nav_gallery: "Galerie", nav_date: "Termin",
        hero_title: "Unvergessliche Momente.", hero_sub: "Exklusive Säle für Ihre Traumhochzeit & Firmenevents.",
        btn_date: "Termin buchen", about_title: "Willkommen bei Armada",
        about_text: "Erleben Sie Luxus in Perfektion. Ob Hochzeit, Abiball oder Firmenfeier – unsere drei prachtvollen Säle bieten den perfekten Rahmen für 250 bis 700 Gäste in Hamburg.",
        pack_title: "Event Konzepte", p1_title: "Basis Konzept", p2_title: "Premium Paket", p3_title: "Royal All-In",
        form_title: "Termin vereinbaren", form_btn: "Anfrage Senden"
    },
    tr: {
        nav_home: "Ana Sayfa", nav_packages: "Konseptler", nav_gallery: "Galeri", nav_date: "Randevu",
        hero_title: "Unutulmaz Anlar.", hero_sub: "Düğünler ve Davetler için özel salonlar.",
        btn_date: "Randevu Al", about_title: "Armada'ya Hoş Geldiniz",
        about_text: "Lüksü mükemmellikle yaşayın. 250'den 700 misafir kapasitesine kadar olan salonlarımızla hizmetinizdeyiz.",
        pack_title: "Etkinlik Konseptleri", p1_title: "Temel Paket", p2_title: "Premium Paket", p3_title: "Kraliyet Paketi",
        form_title: "Randevu Alın", form_btn: "Gönder"
    },
    ar: {
        nav_home: "الرئيسية", nav_packages: "المفاهيم", nav_gallery: "المعرض", nav_date: "موعد",
        hero_title: "لحظات لا تُنسى", hero_sub: "قاعات حصرية لحفلات الزفاف والفعاليات",
        btn_date: "طلب موعد", about_title: "مرحباً بكم في أرمادا",
        pack_title: "مفاهيم الفعاليات", p1_title: "المفهوم الأساسي", p2_title: "المفهوم المميز", p3_title: "المفهوم الملكي",
        form_title: "احجز موعداً", form_btn: "إرسال الطلب"
    },
    en: {
        nav_home: "Home", nav_packages: "Concepts", nav_gallery: "Gallery", nav_date: "Inquiry",
        hero_title: "Unforgettable Moments.", hero_sub: "Exclusive venues for weddings & corporate events.",
        btn_date: "Book Now", about_title: "Welcome to Armada",
        pack_title: "Event Concepts", p1_title: "Basic Concept", p2_title: "Premium Package", p3_title: "Royal All-In",
        form_title: "Inquire Now", form_btn: "Send Inquiry"
    },
    fa: {
        nav_home: "خانه", nav_packages: "مفاهیم", nav_gallery: "گالری", nav_date: "قرار ملاقات",
        hero_title: "لحظات فراموش نشدنی", hero_sub: "تالارهای منحصر به فرد برای عروسی شما",
        btn_date: "رزرو وقت", about_title: "به آرمادا خوش آمدید",
        pack_title: "مفاهیم رویداد", p1_title: "مفهوم پایه", p2_title: "مفهوم ممتاز", p3_title: "مفهوم سلطنتی",
        form_title: "درخواست وقت", form_btn: "ارسال"
    }
};

const PUBLIC_KEY = "946075e6-8ecc-45cb-9daf-7a22a29003e7";
const ASSISTANT_ID = "921ca283-bfda-457d-9cf6-261fc43d46fe";
let vapi = null;
let isCallActive = false;

// Ayla – Begrüßung in der gewählten Seitensprache (wird beim Start gesprochen)
const AYLA_FIRST_MESSAGE = {
    de: "Willkommen beim Armada Eventsaal. Ich bin Ayla, Ihre Assistentin. Ich spreche Deutsch, Türkisch, Arabisch, Farsi und Englisch. Womit kann ich Ihnen helfen?",
    tr: "Armada Eventsaal'a hoş geldiniz. Ben Ayla, asistanınızım. Türkçe, Almanca, Arapça, Farsça ve İngilizce konuşuyorum. Size nasıl yardımcı olabilirim?",
    ar: "مرحباً بكم في أرمادا إيفنتسآل. أنا أيلا، مساعدتكم. أتحدث الألمانية والتركية والعربية والفارسية والإنجليزية. كيف يمكنني مساعدتك؟",
    en: "Welcome to Armada Eventsaal. I'm Ayla, your assistant. I speak German, Turkish, Arabic, Farsi and English. How can I help you?",
    fa: "به سالن رویداد آرمادا خوش آمدید. من ایلا، دستیار شما هستم. به آلمانی، ترکی، عربی، فارسی و انگلیسی صحبت می‌کنم. چطور می‌توانم کمک کنم؟"
};

var AYLA_SYSTEM_PROMPT = [
    "You are Ayla, the female voice assistant of Armada Eventsaal Hamburg. You have a female voice and speak naturally in the guest's language.",
    "You speak and answer in: German, Turkish, Arabic, Farsi, and English. Always reply in the same language the guest uses. Never say 'I can only speak...' or apologize for languages. Just answer.",
    "Answer every question fully: Address (Gründgensstrasse 26, 22309 Hamburg), capacity (250–700 guests), events (weddings, proms, corporate events), contact (WhatsApp +49 120 711 7110, info@armada-events.de), owner (Irfan Gündoğan), services (catering, lighting, decoration, full service), packages (Basis, Premium, Royal All-In). Do not give prices; say to contact the owner for a quote.",
    "Be friendly, concise, and professional. If someone wants to book, ask for name and phone number."
].join(" ");

function updateAylaStatus(text, isError) {
    var status = document.getElementById('status-text');
    if (!status) return;
    status.innerText = text;
    status.style.color = isError ? "#FF5252" : "";
}

function initVapi() {
    if (typeof window.Vapi === 'undefined') {
        updateAylaStatus("Ayla nicht geladen", true);
        return;
    }
    if (vapi) return;
    vapi = new window.Vapi(PUBLIC_KEY);
    var btn = document.getElementById('vapi-btn');
    var status = document.getElementById('status-text');
    vapi.on('call-start', function () {
        isCallActive = true;
        if (btn) btn.classList.add('listening');
        if (status) status.innerText = "Ayla hört zu...";
    });
    vapi.on('call-end', function () {
        isCallActive = false;
        if (btn) btn.classList.remove('listening');
        if (status) status.innerText = "Frag Ayla";
    });
    vapi.on('error', function (err) {
        updateAylaStatus("Ayla nicht verbunden", true);
        console.error(err);
    });
}

window.startVoiceAgent = async function () {
    if (typeof window.Vapi === 'undefined') {
        updateAylaStatus("Ayla nicht geladen", true);
        return;
    }
    if (!vapi) initVapi();
    if (!vapi) return;
    if (isCallActive) {
        vapi.stop();
        return;
    }
    updateAylaStatus("Verbinde Ayla...", false);
    var lang = (document.querySelector('.lang-btn.active') && document.querySelector('.lang-btn.active').innerText) || 'DE';
    var langKey = lang.toLowerCase();
    var firstMsg = AYLA_FIRST_MESSAGE[langKey] || AYLA_FIRST_MESSAGE.de;
    var overrides = {
        voice: {
            provider: "11labs",
            voiceId: "21m00Tcm4TlvDq8ikWAM"
        },
        firstMessage: firstMsg,
        model: {
            messages: [{ role: "system", content: AYLA_SYSTEM_PROMPT }]
        }
    };
    try {
        await vapi.start(ASSISTANT_ID, overrides);
    } catch (err) {
        try {
            await vapi.start(ASSISTANT_ID);
        } catch (e) {
            updateAylaStatus("Ayla nicht verbunden", true);
            console.error(e);
        }
    }
};

// --- WHATSAPP CONFIG (CALLMEBOT) ---
const WA_PHONE = "491207117110"; // WhatsApp-Nummer: +49 1207117110 (international ohne +/00)
const WA_API_KEY = "HIER_DER_WHATSAPP_CODE"; // Den Code von callmebot.com (für Formular-Benachrichtigungen)

window.handleBooking = async function (e) {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const phone = document.getElementById('form-phone').value;
    const status = document.getElementById('form-status');
    const lang = document.querySelector('.lang-btn.active')?.innerText || 'DE';

    status.style.display = 'block';
    status.style.color = 'var(--gold)';
    status.innerText = "Sende Anfrage...";

    const message = `🔔 *NEUE ANFRAGE (ARMADA)*%0A%0A👤 *Name:* ${name}%0A📞 *Telefon:* ${phone}%0A🌍 *Sprache:* ${lang}%0A%0A👉 *Bitte umgehend kontaktieren!*`;

    try {
        const url = `https://api.callmebot.com/whatsapp.php?phone=${WA_PHONE}&text=${message}&apikey=${WA_API_KEY}`;

        // Wir nutzen 'no-cors', da CallMeBot eine einfache URL-Abfrage ist
        await fetch(url, { mode: 'no-cors' });

        status.style.color = "#4CAF50";
        status.innerText = "Erfolgreich gesendet! Wir melden uns.";
        e.target.reset();
    } catch (error) {
        status.style.color = "#FF5252";
        status.innerText = "Fehler beim Senden. Bitte erneut versuchen.";
    }
};

window.switchLang = function (lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang)));
    document.body.style.direction = (lang === 'ar' || lang === 'fa') ? 'rtl' : 'ltr';
};

function runSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    let current = 0;
    slides.forEach((s, i) => { if (s.classList.contains('active')) current = i; });
    slides[current].classList.remove('active');
    slides[(current + 1) % slides.length].classList.add('active');
}

function initAnimations() {
    const obs = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('aos-animate'); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));
}

function whenVapiReady(fn) {
    var done = false;
    function run() {
        if (done || typeof window.Vapi === 'undefined') return;
        done = true;
        fn();
    }
    if (typeof window.Vapi !== 'undefined') { run(); return; }
    window.addEventListener('vapi-ready', run, { once: true });
    var t = setInterval(function () {
        if (typeof window.Vapi !== 'undefined') run();
        if (done) clearInterval(t);
    }, 200);
    setTimeout(function () { clearInterval(t); }, 15000);
}

document.addEventListener('DOMContentLoaded', () => {
    whenVapiReady(initVapi);
    initAnimations();
    setInterval(runSlideshow, 5000);
});

window.openModal = function (type) {
    let title = "";
    let content = "";

    if (type === 'impressum') {
        title = "Impressum";
        content = `
            <p><strong>Betreiber:</strong><br>Irfan Gündoğan<br>Gründgensstrasse 26<br>22309 Hamburg</p>
            <p><strong>Kontakt:</strong><br>Mobil: 0176 – 100 19 618<br>E-Mail: info@armada-events.de</p>
            <p><strong>Verantwortlich für den Inhalt:</strong><br>Irfan Gündoğan</p>
        `;
    } else if (type === 'datenschutz') {
        title = "Datenschutz";
        content = `
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Die über das Kontaktformular gesendeten Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und per verschlüsselter Schnittstelle (Telegram API) an unsere Mitarbeiter weitergeleitet.</p>
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten.</p>
        `;
    } else if (type === 'kuendigung') {
        title = "Kündigungsvereinbarung";
        content = `
            <p><strong>1. Vertragspartner & Geltungsbereich</strong><br>Diese Kündigungsvereinbarung gilt für alle Buchungen und Verträge zwischen dem Kunden und dem Armada Eventsaal (Irfan Gündoğan, Gründgensstrasse 26, 22309 Hamburg) für Saalmieten und Eventleistungen.</p>
            <p><strong>2. Kündigung durch den Kunden</strong><br>Die Kündigung des Vertrages hat schriftlich (z. B. per E-Mail an info@armada-events.de) zu erfolgen. Bei Stornierung gelten folgende Fristen und Stornogebühren (jeweils bezogen auf den gebuchten Eventtermin): mehr als 6 Monate vorher: keine Stornogebühr; 3–6 Monate vorher: 30 % des vereinbarten Entgelts; 1–3 Monate vorher: 50 %; weniger als 1 Monat vorher: 80 %; bei Absage weniger als 14 Tage vorher: 100 %. Abweichende Vereinbarungen im Einzelvertrag bleiben vorbehalten.</p>
            <p><strong>3. Kündigung durch den Betreiber</strong><br>Der Betreiber kann den Vertrag aus wichtigem Grund außerordentlich kündigen (z. B. bei Zahlungsverzug, grobem Vertragsverstoß oder höherer Gewalt). Bereits geleistete Zahlungen werden in solchen Fällen anteilig erstattet, soweit gesetzlich erforderlich.</p>
            <p><strong>4. Höhere Gewalt</strong><br>Bei höherer Gewalt (z. B. behördliche Schließung, Naturkatastrophen) sind beide Parteien von der Leistungspflicht befreit; bereits gezahlte Beträge werden im gegenseitigen Einvernehmen angerechnet oder erstattet.</p>
            <p><strong>5. Salvatorische Klausel</strong><br>Die Unwirksamkeit einzelner Klauseln berührt die Gültigkeit der übrigen Bestimmungen nicht.</p>
            <p><em>Stand: Angabe nach Ihrer Prüfung. Bei Fragen wenden Sie sich bitte an den Inhaber.</em></p>
        `;
    }

    document.getElementById('legal-text').innerHTML = `<h3>${title}</h3>${content}`;
    document.getElementById('legal-modal').style.display = 'flex';
};
window.closeModal = function () { document.getElementById('legal-modal').style.display = 'none'; };
