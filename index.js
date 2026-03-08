//Collapse Button
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-link');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Color Change

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
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
    elements.forEach(el => el.classList.add('lang-changing'));
    setTimeout(() => {
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translation[lang] && translation[lang][key]) {
                el.textContent = translation[lang][key];
            }

            el.classList.remove('lang-changing');
        });

        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);
    }, 200);

}

loadTranslation();

document.getElementById('lang-switch').addEventListener('click', () => {
    const newLang = localStorage.getItem('preferredLang') === 'en' ? 'jp' : 'en';
    applyLanguage(newLang);
});