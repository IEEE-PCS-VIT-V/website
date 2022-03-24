const burger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const list = document.querySelector('.list');
const home = document.querySelector('.responsive_home');
const icon = document.querySelector('.pcsIcon');
const row = document.querySelector('.row');
const canvas = document.querySelector('canvas');


burger.addEventListener('click', () => {
    list.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');
    navbar.classList.toggle('resp-bg')
    home.classList.toggle('visibility')
    icon.classList.toggle('visibility');
    row.classList.toggle('h-row');
    canvas.classList.toggle('h-canvas');
})
