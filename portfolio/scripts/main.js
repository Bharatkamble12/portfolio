
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Hide navMenu when a nav link is clicked (on mobile)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            navMenu.classList.remove("open");
        }
    });
});
