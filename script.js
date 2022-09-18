const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');
const checkBox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const getMain = document.querySelector('main');
const btnFinal = document.getElementById('submit-btn');

function inputAlert() {
  if ((inputEmail.value === 'tryber@teste.com') && (inputSenha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function activeButton() {
  if (checkBox.checked === true) {
    btnFinal.removeAttribute('disabled', '');
    btnFinal.classList.remove('btn-secondary');
    btnFinal.classList.add('btn-primary');
  } else {
    btnFinal.setAttribute('disabled', '');
    btnFinal.classList.remove('btn-primary');
    btnFinal.classList.add('btn-secondary');
  }
}

function contador(e) {
  const doide = e.target.maxLength - e.target.textLength;
  if (textarea.value > '') {
    counter.innerText = `você ainda pode usar ${doide} caracteres`;
  } else {
    counter.innerText = '500 caracteres restantes';
  }
}

function createElement(element) {
  const elementToCreate = document.createElement(element);
  return elementToCreate;
}

function modifyPage() {
  const newElement = createElement('section');
  newElement.id('form-data');
  newElement.innerText = 'teste';
  getMain.innerHTML = '';
  getMain.appendChild(newElement);
  // const data = {
  //   name:
  //   email:
  //   house:
  //   family:

  //   avaliation:
  // }
  // getMain.innerHTML = null;
  // const createSave = sessionStorage.setItem('pageInfo', JSON.stringify(argument));
}

textarea.addEventListener('keyup', contador);
textarea.addEventListener('keydown', contador);
btn.addEventListener('click', inputAlert);
checkBox.addEventListener('change', activeButton);
btnFinal.addEventListener('click', modifyPage);
