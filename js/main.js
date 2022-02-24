//dark mode toggle that remembers setting
// create variable for localStorage
let darkMode = localStorage.getItem("darkMode");
// select toggle button
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
		// console.log(darkMode);
	} else {
		disableDarkMode();
		// console.log(darkMode);
	}
});


// hamburger icon and menu for mobile and tablets
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


//function to generate and today at end of contact
let setDay = () => {

    //Arrays for converting numbers into day
    const dayNames = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //take day from Date Object
    let calendar = new Date();
	// take the day number from calendar and change that number to day word
    let day = dayNames[calendar.getDay()];
    
    //Display the day variable
    let today = `${day}`;
    document.getElementById("this-day").innerText = today;
};

setDay();