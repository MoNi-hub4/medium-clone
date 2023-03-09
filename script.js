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

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('nav-list-container');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});