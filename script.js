let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navMenu = document.querySelector('.nav-menu');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-menu li a');

// Hamburger menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight nav links on scroll
window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let matchingLink = document.querySelector('.nav-menu li a[href*="' + id + '"]');
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
};

// Close menu on nav link click (for mobile)
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});