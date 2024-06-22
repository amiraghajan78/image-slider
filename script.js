const $ = document;

let sliderCounter = $.querySelector("#slide-counter");
let allSlidesCounter = $.querySelector("#number-of-slides");
let prevBtn = $.querySelector("#prev-btn");
let nextBtn = $.querySelector("#next-btn");
let sliderImages = $.querySelector("#slider-image");
let sliderCounterDot = $.querySelectorAll(".dot");

let imageIndex = 0;

let imageList = [
    {id: 1, path: "img/1.jpg"},
    {id: 1, path: "img/2.jpg"},
    {id: 1, path: "img/3.jpg"},
    {id: 1, path: "img/4.jpg"},
];

allSlidesCounter.innerHTML = imageList.length;

let counter = 1
sliderCounter.innerHTML = counter;

function nextSlide() {
    imageIndex++;
    if (imageIndex > imageList.length - 1) {
        imageIndex = 0;
    };
    setTimeout(function () {
        sliderImages.setAttribute("src", imageList[imageIndex].path);
        sliderImages.classList.add("animation");
    }, 100);
    sliderImages.className = "";
    sliderCounter.innerHTML = imageIndex + 1;
    for (let i = 0; i < imageList.length; i++) {
        if (i == imageIndex) {
            sliderCounterDot[i].classList.add("active");
        } else {
            sliderCounterDot[i].classList.remove("active");
        };
    };
};

function prevSlide() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imageList.length - 1;
    };
    setTimeout(function () {
        sliderImages.setAttribute("src", imageList[imageIndex].path);
        sliderImages.classList.add("animation");
    }, 100);
    sliderImages.className = "";
    sliderCounter.innerHTML = imageIndex + 1;
    for (let i = 0; i < imageList.length; i++) {
        if (i == imageIndex) {
            sliderCounterDot[i].classList.add("active");
        } else {
            sliderCounterDot[i].classList.remove("active");
        };
    };
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
