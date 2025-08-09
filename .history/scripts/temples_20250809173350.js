document.addEventListener('DOMContentLoaded', () => {

    const currentYearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;

    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        if (nav.classList.contains('open')) {
            menuButton.textContent = 'X';
        } else {
            menuButton.textContent = '☰';
        }
    });7

});