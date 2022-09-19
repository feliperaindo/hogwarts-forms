const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');
const checkBox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const getContent = document.querySelector('#evaluation-form');
const btnFinal = document.getElementById('submit-btn');
const familyCheck = document.getElementsByName('family');

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

function verifyRadioChecked(elementToCheck) {
  for (const i of elementToCheck) {
    if (i.checked) {
      return i.value;
    }
  }
  return '';
}

function getData() {
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const familyCheck = verifyRadioChecked(familyCheck);
  const data = {
    name: `${firstName} ${lastName}`,
    email: document.querySelector('#input-email').value,
    house: document.querySelector('#house').value,
    family: familyCheck,
    content: [],
    avaliation:,
  };
  return data;
}

function modifyPage() {
  const newElement = createElement('section');
  const data = getData();
  newElement.id('form-data');
  newElement.innerText = 'teste';

  getMain.innerHTML = null;
  const createSave = sessionStorage.setItem('pageInfo', JSON.stringify(argument));
  getContent.innerHTML = null;
}

textarea.addEventListener('keyup', contador);
textarea.addEventListener('keydown', contador);
btn.addEventListener('click', inputAlert);
checkBox.addEventListener('change', activeButton);
btnFinal.addEventListener('click', modifyPage);
