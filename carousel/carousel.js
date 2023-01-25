function cookie(name) {
    let c = document.cookie.split('; ').find(cookie => cookie && cookie.startsWith(name + '='))
    return c ? c.split('=')[1] : false;
}



// current slide counter
// select next slide button
// Select all slides
const slides = document.querySelectorAll(".robot-slide");
var wrapper = document.querySelector('.robots');
//var slides = documents.querySelectorAll("robot-slide");
var totalSlides = slides.length;
// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".arrow-2");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

function goToSlide(slide){

}

function onLoadSlide(){

    if (cookie('cookie-accepted') == "true") {
       slideNum = cookie("slide");
       console.log(slideNum);
       if(!slideNum == undefined || !slideNum == null || slideNum == false){ 
        curSlide = parseInt(slideNum); 
       }
       slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }

}

window.addEventListener("load", function (event) {
    onLoadSlide();
});


// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    document.cookie = `slide=${curSlide}`;
});

// select next slide button
const prevSlide = document.querySelector(".arrow-1");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
    document.cookie = `slide=${curSlide}`;
});
