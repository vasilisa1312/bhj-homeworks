const sliderNext = document.querySelector(".slider__arrow_next");
const sliderPrev = document.querySelector(".slider__arrow_prev");

const slideItems = document.querySelectorAll(".slider__item");

let sliderCounter = 0;

let arr = Array.from(slideItems);

sliderNext.onclick = changSlideNext;
sliderPrev.onclick = changSlidePrev;

function changSlideNext() {

    arr[sliderCounter].className = "slider__item";
    sliderCounter +=1;
    if(sliderCounter > 4) {
        sliderCounter = 0;
    }
    arr[sliderCounter].className = "slider__item slider__item_active";

    console.log(sliderCounter)
}

function changSlidePrev() {

    arr[sliderCounter].className = "slider__item";
    sliderCounter -=1;
    if(sliderCounter < 0) {
        sliderCounter = 4;
    }
    arr[sliderCounter].className = "slider__item slider__item_active";

    console.log(sliderCounter)
}


