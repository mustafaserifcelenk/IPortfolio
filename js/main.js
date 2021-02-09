// Select DOM Items  

const menuBtn = document.querySelector('.menu-btn');
//Document:Property, queryselector:method 
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu 
let showMenu = false; //let kullandık çünkü değiştirmek istiyoruz

menuBtn.addEventListener('click', toggleMenu);
//MenuBtn'ye tıklandığında yaratacağım toogleMenu fonksiyonu çalışsın

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //    Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //    Set Menu State
        showMenu = false;
    }
}
