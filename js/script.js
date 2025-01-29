// script.js - Main JavaScript file for Digital Literacy Course

document.addEventListener("DOMContentLoaded", function () {
    console.log("Digital Literacy Course Loaded");

    // Handle navigation clicks
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const moduleName = this.getAttribute("href");
            loadModule(moduleName);
        });
    });

    // Function to load modules dynamically
    function loadModule(modulePath) {
        fetch(modulePath)
            .then(response => response.text())
            .then(data => {
                document.querySelector("main").innerHTML = data;
            })
            .catch(error => console.error("Error loading module:", error));
    }
});
