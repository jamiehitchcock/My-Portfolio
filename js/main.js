//dark mode toggle
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// check if dark mode is enabled
// if enabled then turn off
// if its disabled then turn it on

const enableDarkMode = () => {
	// add class darkmode to the body
	document.body.classList.add("darkmode");
	// update darkMode in local storage
	localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
	// remove class darkmode to the body
	document.body.classList.remove("darkmode");
	// update darkMode in local storage
	localStorage.setItem("darkMode", null);
};

// remember if dark mode is enableDarkMode. if so then activate it and move the toggler
if (darkMode === "enabled") {
	enableDarkMode();
	darkModeToggle.checked = true;
}

// toggle dark mode upon clicking dark mode toggler
darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode !== "enabled"){
		enableDarkMode();
		console.log(darkMode);
	} else {
		disableDarkMode();
		console.log(darkMode)
	}
});



// hamburger
const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobileMeunu = document.querySelector(".header .nav-bar .nav-list ul");
const menuItem = document.querySelectorAll(".header .nav-bar .nav-list ul li a");

// toggle hamburger and mobile menu on clicking icon
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMeunu.classList.toggle("active");
});

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

