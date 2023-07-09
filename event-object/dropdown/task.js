document.querySelector(".dropdown__value").addEventListener("click", openMenu);



function openMenu(){
    document.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
}

const items = document.querySelectorAll(".dropdown__item");

items.forEach(item =>item.onclick = itemActive);

function itemActive() {
    document.querySelector(".dropdown__value").textContent = this.textContent;
    openMenu();
    return false;
}