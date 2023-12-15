const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("nav__menu--open");
    });
});

// change the nav toggle icon
function changeToggleIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-4-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-4-line");
    }
}

// Activate nav link on scroll
function addActiveLink() {
    const section = document.querySelectorAll("section[id]");
    section.forEach((section) => {
        const scrollY = window.scrollY,
            sectionTop = section.offsetTop - 80,
            sectionHeight = section.offsetHeight,
            sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector(".nav__link[href*=" + sectionId + "]")
            .classList.add("nav__link--active");
        } else {
            document
            .querySelector(".nav__link[href*=" + sectionId + "]")
            .classList.remove("nav__link--active");
        }
    });
}

window.addEventListener("scroll", addActiveLink)

//Scrolltop
const Scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 300) {
        Scrolltop.classList.add("scrolltop--show");
    } else {
        Scrolltop.classList.remove("scrolltop--show");
    }
});

// Dark Theme
let theme = localStorage.getItem("theme");

const themeToggle = document.getElementById("theme-toggle");

const enableDarkTheme = () => {
    document.body.classList.add("dark-theme");
    themeToggle.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("theme", "dark-theme");
};

const disableDarkTheme = () => {
    document.body.classList.remove("dark-theme");
    themeToggle.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("theme", null);
};

if (theme === "dark-theme") {
    enableDarkTheme();
}

themeToggle.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    if (theme !== "dark-theme") {
        enableDarkTheme();
    } else {
        disableDarkTheme();
    }
});

// ScrollReveal Animation

const sr=ScrollReveal ({
    origin: "top",
    distance: "100px",
    duration: 2500,
    reset: true,
});

sr.reveal(".home__content, .about__img, .contact__content", {
    origin: "left",
});

sr.reveal(".home__img, .about__content, contact__form", {
    origin: "right",
});

sr.reveal(".skills__wrapper, .portfolio__wrapper, .footer__content", {
    origin: "bottom",
});

function openWebsite(url) {
    window.open(url, '_blank');
}



// Get the download CV button
const downloadButton = document.getElementById("download-cv");

// Add click event listener to the download CV button
downloadButton.addEventListener("click", () => {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    const cvFilePath = 'path/to/your/cv.pdf';

    // Create an anchor element
    const downloadLink = document.createElement('a');
    
    // Set the href attribute to the CV file path
    downloadLink.href = cvFilePath;

    // Set the download attribute with the desired file name
    downloadLink.download = 'YourCVFileName.pdf';

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Programmatically trigger the click event on the anchor element
    downloadLink.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(downloadLink);
});


