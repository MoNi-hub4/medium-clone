const iconMenuOpen = document.querySelector(".icon-menu-open");
const navListContainer = document.querySelector(".nav-list-container");
const menuClose = document.querySelector(".menu-close");

iconMenuOpen.addEventListener('click', (e) => {
    navListContainer.classList.add('open');
    iconMenuOpen.classList.add('invisible');
})

menuClose.addEventListener('click' , (e) => {
    navListContainer.classList.remove('open');
    iconMenuOpen.classList.remove('invisible');
})