window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    let logo = document.getElementById("logo");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.style.width = "80px";  // Shrinks logo size
    } else {
        navbar.classList.remove("scrolled");
        logo.style.width = "120px"; // Original size
    }
});
