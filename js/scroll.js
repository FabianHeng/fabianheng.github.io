const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 120) {
        scrollTopBtn.classList.add("active");
    } else {
        scrollTopBtn.classList.remove("active");
    }
})

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});