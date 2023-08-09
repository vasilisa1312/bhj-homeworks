const form = document.querySelector('#signin__form')
const signInButton = document.querySelector('#signin__btn')
const logOutButton = document.querySelector('#logoutBtn')

window.onload = function() {
  if(localStorage.getItem('user')) {
    changePage(localStorage.getItem('user'))
  }
}

signInButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  requestForm()
})



function requestForm() {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
  xhr.responseType = 'json'
  xhr.onload = () => {
    checkResponse(xhr.response)
  }
  xhr.onerror = () => {
    alert('Ошибка получения данных!')
  }
  xhr.send(new FormData(form))
}

function checkResponse(response) {
  console.log(response)
  if (response.success) {
    changePage(response['user_id'])
    localStorage.setItem('user', response['user_id'])
  } else {
    alert('«Неверный логин/пароль»')
  }
}


function changePage(userId) {
  document.querySelector('#signin').classList.remove('signin_active')
  document.querySelector('#user_id').innerText = userId
  document.querySelector('#welcome').classList.add('welcome_active')
  logOutButton.addEventListener('click', logOut)
}


function logOut() {
  document.querySelector('#welcome').classList.remove('welcome_active')
  document.querySelector('#signin').classList.add('signin_active')
  localStorage.clear();
  form.reset()
}