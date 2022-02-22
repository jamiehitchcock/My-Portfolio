// selecting elements
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobileMeunu = document.querySelector(".header .nav-bar .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

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

// fading effect on scrolling
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
	threshold: 0,
	rootMargin: "0px 0px -400px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
	entries.forEach(entry => {
		if (!entry.isIntersecting){
			return;
		} else {
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target);
		}
	})
}, 
appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
	appearOnScroll.observe(slider);
});
