let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses")

xhr.send()

xhr.onload = () => {
    document.querySelector(".loader").classList.remove("loader_active")
    let parsedAnswer = JSON.parse(xhr.response).response.Valute;

    const items =document.getElementById("items");

    for(let key in parsedAnswer) {
        items.insertAdjacentHTML('beforeend', `
        <div class="item">
        <div class="item__code">
                ${parsedAnswer[key].CharCode}
            </div>
            <div class="item__value">
                ${parsedAnswer[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `);
    }
}

