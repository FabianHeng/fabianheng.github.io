const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 120) {
        scrollTopBtn.classList.add("active");
    } else {
        scrollTopBtn.classList.remove("active");
    }
})

scrollTopBtn.addEventListener("click", () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});