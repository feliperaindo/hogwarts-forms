const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');
const checkBox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
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
  if (textarea.value > '') {
    const contCar = e.target.maxLength - e.target.textLength;
    counter.innerText = contCar;
  } else {
    counter.innerText = '500 caracteres restantes';
  }
}

function createElement(element) {
  const elementToCreate = document.createElement(element);
  return elementToCreate;
}

function familyChecked() {
  const familyCheck = document.getElementsByName('family');

  for (let index = 0; index < familyCheck.length; index += 1) {
    if (familyCheck[index].checkBox) {
      return familyCheck[index].value;
    }
  }
  return '';
}

function getData() {
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const getFamilyValue = familyChecked();

  const data = {
    name: `${firstName} ${lastName}`,
    email: document.querySelector('#input-email').value,
    house: document.querySelector('#house').value,
    family: getFamilyValue,
    content: [],
    avaliation: [],
  };
  return data;
}

function modifyPage() {
  const newElement = createElement('section');
  const data = getData();
  newElement.id('form-data');
  newElement.innerText = 'teste';
}

textarea.addEventListener('keyup', contador);
textarea.addEventListener('keydown', contador);
btn.addEventListener('click', inputAlert);
checkBox.addEventListener('change', activeButton);
btnFinal.addEventListener('click', modifyPage);
