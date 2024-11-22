// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth',
        });
    });
});

// Project button alert
document.querySelectorAll('.project-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('More details coming soon!');
    });
});

// Import GSAP library
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero h1");
    const heroButton = document.querySelector(".hero a");

    gsap.from(heroText, { y: -50, opacity: 0, duration: 1.5 });
    gsap.from(heroButton, { y: 50, opacity: 0, delay: 1, duration: 1.5 });
});

// script.js

$(document).ready(function () {
    // Smooth Scrolling on Navigation Links
    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top - 70,
            },
            800
        );
    });

    // SweetAlert2 for Project Button
    $(".project-btn").on("click", function () {
        Swal.fire({
            title: "Project Details",
            text: "This project is under development. Stay tuned for updates!",
            icon: "info",
            confirmButtonText: "Close",
        });
    });

    // SweetAlert2 for Contact Form Submission
    $("form").on("submit", function (e) {
        e.preventDefault();
        Swal.fire({
            title: "Thank You!",
            text: "Your message has been successfully sent. I will contact you soon.",
            icon: "success",
            confirmButtonText: "OK",
        });
    });

    // GSAP Animations
    gsap.from(".hero h1", { y: -50, opacity: 0, duration: 1.5 });
    gsap.from(".hero p", { y: 50, opacity: 0, delay: 0.5, duration: 1.5 });
    gsap.from(".hero a", { scale: 0, opacity: 0, delay: 1, duration: 1.5 });
    gsap.from(".card", {
        scrollTrigger: ".card",
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
    });
});

// script.js

$(document).ready(function () {
    // SweetAlert2 for Projects
    $(".project-btn").on("click", function () {
        Swal.fire({
            title: "Project Details",
            html: "<p>This project is under construction. Stay tuned for updates!</p>",
            icon: "info",
            confirmButtonText: "Close",
        });
    });

    // GSAP Animation for Projects
    gsap.from(".project-card", {
        scrollTrigger: ".project-card",
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
    });

    // GSAP Animation for About Section
    gsap.from("#about h2, #about p, #about .btn", {
        scrollTrigger: "#about",
        x: -50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
    });
});

// Smooth Scroll for Discover More Button
document.querySelector('.btn-discover').addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});
