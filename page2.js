// JavaScript
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');

    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        menuIcon.innerHTML = '&#10005;'; // 'X' 모양
    } else {
        menuIcon.innerHTML = '&#9776;'; // 원래 아이콘
    }
}
