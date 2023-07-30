
let chatOpen = document.querySelector('.chat-widget');
let open = document.querySelector('.chat-widget__side');

open.addEventListener('click', () => {
  chatOpen.classList.add('chat-widget_active');
})

const chatMessages = document.querySelector('.chat-widget__messages');
const textInput = document.getElementById('chat-widget__input');
const newMessage = textInput.addEventListener('keyup', sendMessage);

function sendMessage(event) {
  let send = event.key;
  if (send !== "Enter") {
    return
  };
  const time = new Date();
  if (textInput.value.trim()) {
    chatMessages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}</div>
            <div class="message__text">
              ${textInput.value.trim()}
            </div>
          </div>
        `;
    textInput.value = '';
    setMessageBot()
    chatMessages.parentElement.scrollTop = chatMessages.parentElement.scrollHeight;
  }
}

function setMessageBot() {
  let message = getMessage()
  const time = new Date();
  chatMessages.innerHTML += `
      <div class="message">
        <div class="message__time">${time.getHours()}:${('0' + time.getMinutes()).slice(-2)}</div>
        <div class="message__text">
          ${message}
        </div>
      </div>
    `;
}

function getMessage() {
  let messagesBotList = [
    "Ты кто?",
    "Бла-бла-бла..",
    "Напишите через жизнь",
    "Не пишите больше, я устал",
    "У меня нет настроения Вам отвечать",
    "Удивительная наглость писать мне",
    "Катись отсюда, арбуз",
    "Еще раз напишешь, отправлю вирус",
    "Написал? Съешь пирожок!",
    "Не пишите нам больше!"
  ];
  const i = Math.floor(Math.random() * 10);
  return messagesBotList[i];
}