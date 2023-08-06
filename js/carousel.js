let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll(".carousel img");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

setInterval(() => {
    plusSlide(1);
}, 10000);

const dots = document.querySelectorAll(".dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        currentSlide(i+1);
    });
}
