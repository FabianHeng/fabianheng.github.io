const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li')

    //Animate Nav on scroll
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
    })
    
    // Toggle Nav
    burger.addEventListener('click', () => {
        if (nav.style.animation) {
            nav.style.animation = ``;
        } else {
            nav.style.animation = `navFadeIn ease forwards 0.5s`;
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Animate Burger
        burger.classList.toggle('toggle')
    });
}

navSlide()