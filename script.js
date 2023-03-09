const iconMenuOpen = document.querySelector(".icon-menu-open");
const navListContainer = document.querySelector(".nav-list-container");
const menuClose = document.querySelector(".menu-close");
const body = document.querySelector("body");

iconMenuOpen.addEventListener('click', (e) => {
    navListContainer.classList.add('open');
    iconMenuOpen.classList.add('invisible');
    body.classList.add('background-active');
})

menuClose.addEventListener('click' , (e) => {
    navListContainer.classList.remove('open');
    iconMenuOpen.classList.remove('invisible');
    body.classList.remove('background-active');
})



document.addEventListener("click", (e) => {
    if(e.target.closest('.nav-list-container') || e.target.closest('.icon-menu-open')) return
    navListContainer.classList.remove('open');
    iconMenuOpen.classList.remove('invisible');
    body.classList.remove('background-active');
})