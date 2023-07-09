const modal = document.querySelector(".modal")

const modalClose = document.querySelectorAll(".modal__close.modal__close_times");

modal.className = "modal modal_active";


const showSucess = document.querySelector(".show-success")

const modalSucess = document.getElementById("modal_success");

modalClose.forEach(element => element.onclick = modalHide);

function modalHide() {
    modal.className = "modal";
    modalSucess.className = "modal";
}

showSucess.onclick = () => {
    modal.className = "modal";
    modalSucess.className = "modal modal_active";
}

