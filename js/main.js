// selecting elements
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobileMeunu = document.querySelector(".header .nav-bar .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");

// toggle hamburger and mobile menu on clicking icon
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMeunu.classList.toggle("active");
})

// toggle hamburger and mobile menu on clicking menu items
menuItem.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobileMeunu.classList.toggle('active');
	});
});

// change colour of header upon scrolling in y position
document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 250){
        header.style.backgroundColor = "29323c";
	} else {
		header.style.backgroundColor = "transparent";
	}
});
