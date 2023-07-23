const span = document.querySelectorAll(".rotator__case");

let counter = 0;




 

function changeClass() {
    span[counter].classList.toggle("rotator__case_active");
    counter++
    span[counter].classList.toggle("rotator__case_active");

    if(counter == span.length - 1) {
        span[counter].classList.toggle("rotator__case_active");
        counter = 0;
        span[counter].classList.toggle("rotator__case_active");
    
    }
}


setInterval(changeClass,1000)


