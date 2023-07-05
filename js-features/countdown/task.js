const timer = document.getElementById("timer");
const timerDown = () => {
    timer.textContent -= 1;
    if(timer.textContent < 0){
        alert("Вы победили в конкурсе!")
        timer.textContent = 10; 
    } 
}
timer.textContent = 10; //установила на 10 чтоб сэкономить мое и Ваше время :)
const timeInterval = setInterval(timerDown,1000);
timeInterval();


