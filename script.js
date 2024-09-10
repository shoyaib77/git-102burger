
const menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".navigation");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector(".nav-list")

menu.addEventListener('click', (e)=>{
    e.stopPropagation()
    container.classList.add("menu-open");
});
closeIcon.addEventListener("click",()=>{
    container.classList.remove('menu-open');
});
nav.addEventListener("click",(e)=>{
    e.stopPropagation()
});
window.addEventListener('click',()=>{
    container.classList.remove('menu-open')
});
