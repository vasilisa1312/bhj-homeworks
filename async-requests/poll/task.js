const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll")

xhr.send()

xhr.addEventListener("loadend", () => {
    const parsedAnswer = JSON.parse(xhr.response);

    const pollAnswers = document.getElementById('poll__answers');

    const pollTitle = document.querySelector(".poll__title");

    pollTitle.innerText = parsedAnswer.data.title;

    const arr = parsedAnswer.data.answers;
    
    for(let i = 0; i < arr.length; i++) {
        pollAnswers.insertAdjacentHTML('beforeend', `
        <button class="poll__answer">
          ${arr[i]}
        </button>
      `);
    }
    
    const pollAnswer = Array.from(document.querySelectorAll('.poll__answer'));
    pollAnswer.forEach((item) => {
      item.onclick = function() {
        alert ('Спасибо Ваш голос засчитан!');
      }
    })
  

})