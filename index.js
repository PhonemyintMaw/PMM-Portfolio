const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-link');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});