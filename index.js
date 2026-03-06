//Collapse Button
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-link');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Language Change
let translation = {};

async function loadTranslation() {
    try {
        const response = await fetch('./lang.json');
        translation = await response.json();
        applyLanguage(localStorage.getItem('preferredLang') || 'en');


    } catch (error) {
        console.error("Could not load translations:", error);
    }
}

function applyLanguage(lang) {

    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translation[lang] && translation[lang][key]) {
            el.textContent = translation[lang][key];
        }

        el.classList.remove('.lang-changing');
    });

    localStorage.setItem('preferredLang', lang);
}

loadTranslation();

document.getElementById('lang-switch').addEventListener('click', () => {
    const newLang = localStorage.getItem('preferredLang') === 'en' ? 'jp' : 'en';
    applyLanguage(newLang);
});