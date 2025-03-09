window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    let logo = document.querySelector(".logo");
    
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
