const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');
const checkBox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const btnFinal = document.getElementById('submit-btn');
const familyCheck = document.getElementsByName('family');
const avaliationCheck = document.getElementsByName('rate');

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

function radioChecked(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked) {
      return array[index].value;
    }
  }
  return '';
}

function contentChecked() {
  const contents = document.getElementsByName('content');
  const checks = [];

  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked) {
      checks.push(contents[index].value);
    }
  }
  return checks;
}

function getData() {
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const getFamilyValue = radioChecked(familyCheck);
  const getContentsChecks = contentChecked();
  const getRateCheck = radioChecked(avaliationCheck);

  const data = {
    name: `${firstName} ${lastName}`,
    email: document.querySelector('#input-email').value,
    house: document.querySelector('#house').value,
    family: getFamilyValue,
    content: getContentsChecks,
    avaliation: getRateCheck,
    text: document.getElementById('textarea').value,
  };
  sessionStorage.removeItem('dataPage');
  sessionStorage.setItem('dataPage', JSON.stringify(data));
  return data;
}

function applyNameEmailHouseFamily(object, element) {
  const name = createElement('p');
  name.innerText = `Nome: ${object.name}`;
  element.appendChild(name);

  const email = createElement('p');
  email.innerText = `Email: ${object.email}`;
  element.appendChild(email);

  const house = createElement('p');
  house.innerText = `Casa: ${object.house}`;
  element.appendChild(house);

  const family = createElement('p');
  family.innerText = `Família: ${object.family}`;
  element.appendChild(family);
}

function applyContent(object, element) {
  const content = createElement('p');
  content.innerText = 'Matérias: ';

  for (let index = 0; index < object.content.length; index += 1) {
    content.innerText += `${object.content[index]}, `;
  }
  element.appendChild(content);
}

function applyRateText(object, element) {
  const rate = createElement('p');
  rate.innerText = `Avaliação: ${object.avaliation}`;
  element.appendChild(rate);

  const text = createElement('p');
  text.innerText = `Observações: ${object.text}`;
  element.appendChild(text);
}

function resetpage() {
  const getNewForm = document.getElementById('toInfo');
  getNewForm.style.cssText = '';
}

function toInfoCSS() {
  const getForm = document.getElementById('evaluation-form');
  getForm.style.display = 'none';

  const getNewForm = document.getElementById('toInfo');
  getNewForm.style.cssText = `margin-top: 1%;
  box-shadow: 0 0 15px 5px rgb(136, 136, 136);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 675px;`;
}

function modifyPage() {
  const data = getData();

  toInfoCSS();

  const getDiv = document.getElementById('toInfo');

  const newElement = createElement('div');
  newElement.setAttribute('id', 'form-data');
  getDiv.appendChild(newElement);
  applyNameEmailHouseFamily(data, newElement);
  applyContent(data, newElement);
  applyRateText(data, newElement);
}

textarea.addEventListener('keyup', contador);
textarea.addEventListener('keydown', contador);
btn.addEventListener('click', inputAlert);
checkBox.addEventListener('change', activeButton);
btnFinal.addEventListener('click', modifyPage);

window.onload = resetpage;
