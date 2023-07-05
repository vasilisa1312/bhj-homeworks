const deadMoles = document.getElementById("dead");
const missShots = document.getElementById("lost");

let hollOnClick = document.querySelectorAll(".hole");
console.dir(hollOnClick);
for(let i = 0; i < hollOnClick.length; i++) {
hollOnClick[i].onclick = () => {
    if(hollOnClick[i].className.includes('hole_has-mole')){
    deadMoles.textContent++;

    if(deadMoles.textContent == 10) {
        alert("Winner winner chicken dinner!");

        deadMoles.textContent = 0;
        missShots.textContent = 0;
    }


    } else 
    missShots.textContent++;

    if(missShots.textContent == 5){
        alert("you lost, try again :(")

        deadMoles.textContent = 0;
        missShots.textContent = 0;
    }
}
}
    
