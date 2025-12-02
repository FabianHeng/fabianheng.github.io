const translate = document.querySelectorAll('.about-translate');
const splash = document.querySelector('.about-splash');
const mainBody = document.querySelector('.about-main');
const shadow = document.querySelector('.shadow');

let mainBody_height = mainBody.offsetHeight;

window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`
    })

    splash.style.opacity = - scroll / (mainBody_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;
});