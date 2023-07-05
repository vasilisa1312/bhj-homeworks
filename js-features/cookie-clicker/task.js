const clicker__counter = document.getElementById("clicker__counter");
const element = document.getElementById("cookie");
element.onmousedown = () => {
    clicker__counter.textContent++;
    element.width = 250;
}

element.onmouseup = () => element.width = 200;


element.onmouseout = () => clicker__counter.textContent = 0;

