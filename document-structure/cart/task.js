const productDec = document.querySelectorAll(".product__quantity-control_dec");
const productInc = document.querySelectorAll(".product__quantity-control_inc");
const productValue = document.querySelectorAll(".product__quantity-value");
const productBtn = document.querySelectorAll(".product__add");
const productCart = document.querySelector(".cart__products");
const product = document.querySelectorAll(".product");


for(let i = 0; i < productDec.length; i++) {
    productDec[i].addEventListener("click", () => {
        if(productValue[i].textContent > 1) {
            productValue[i].textContent --;
        }
    })
}

for(let i = 0; i < productInc.length; i++) {
    productInc[i].addEventListener("click", () => {
        productValue[i].textContent++;
    })
}



for(let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener("click", addToCart)
}


function addToCart() {
    const productImg = this.closest(".product").childNodes[3].src;
    const productId = this.closest(".product").dataset.id;
    const productCount = this.previousElementSibling.childNodes[3].textContent;
    

    let productCheck = document.querySelector(`.cart__product[data-id="${productId}"]`)

    if(productCheck === null) {
        productCart.insertAdjacentHTML("beforeend", `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImg}">
        <div class="cart__product-count">${productCount}</div>
        </div>`)
    } else {
        let currentCount = productCheck.querySelector('.cart__product-count').innerHTML;
        let sum = Number(currentCount) + Number(productCount);
        productCheck.querySelector('.cart__product-count').innerHTML = sum;
    }


    


}