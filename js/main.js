const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobileMeunu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header .container");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    mobileMeunu.classList.toggle("active");
})