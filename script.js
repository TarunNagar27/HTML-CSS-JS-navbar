/* ===================================================
   SELECT ELEMENTS
=================================================== */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const navbar = document.querySelector(".navbar");


/* ===================================================
   HAMBURGER MENU TOGGLE
=================================================== */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


/* ===================================================
   CLOSE MENU WHEN LINK CLICKED
=================================================== */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


/* ===================================================
   ACTIVE NAV LINK ON SCROLL
=================================================== */
window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        const linkTarget = link.getAttribute("href").slice(1);

        if (linkTarget === currentSection) {
            link.classList.add("active");
        }
    });
});


/* ===================================================
   NAVBAR SHADOW ON SCROLL
=================================================== */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ===================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
=================================================== */
document.addEventListener("click", (event) => {

    const clickedOutside =
        !hamburger.contains(event.target) &&
        !navMenu.contains(event.target);

    if (clickedOutside) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});


/* ===================================================
   SMOOTH SCROLL
=================================================== */
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});