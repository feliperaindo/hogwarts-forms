const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');
const checkBox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
<<<<<<< HEAD
const getContent = document.querySelector('#evaluation-form');
=======
const returnForm = document.getElementById('evaluation-form');
>>>>>>> 828ddcbc3ac8356fcc02f263977ec14741b3dccf
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
} // Requisito 20 ================================
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
function sumiu(e) {
  returnForm.style.display = 'none';
  e.preventDefault();
}
btnFinal.addEventListener('click', sumiu);
// Requisito 21 ================================
const inpRdOne = document.querySelectorAll('.resutInp')[0];
const inpRdTwo = document.querySelectorAll('.resutInp')[1];
const inpRdTheree = document.querySelectorAll('.resutInp')[2];
inpRdOne.classList.add('deubom');
function resultadoFimTwo(event) {
  const newClass = document.querySelector('.deubom');
  newClass.classList.remove('deubom');
  event.target.classList.add('deubom');
}
inpRdOne.addEventListener('click', resultadoFimTwo);
inpRdTwo.addEventListener('click', resultadoFimTwo);
inpRdTheree.addEventListener('click', resultadoFimTwo);
function inputRadio() {
  if (inpRdOne.classList.contains('deubom')) {
    return inpRdOne.value;
  }
  if (inpRdTwo.classList.contains('deubom')) {
    return inpRdTwo.value;
  }
  if (inpRdTheree.classList.contains('deubom')) {
    return inpRdTheree.value;
  }
}
inpRdOne.addEventListener('click', inputRadio);
inpRdTwo.addEventListener('click', inputRadio);
inpRdTheree.addEventListener('click', inputRadio);

const inpCkb0 = document.querySelectorAll('.subject')[0];
const inpCkb1 = document.querySelectorAll('.subject')[1];
const inpCkb2 = document.querySelectorAll('.subject')[2];
const inpCkb3 = document.querySelectorAll('.subject')[3];
const inpCkb4 = document.querySelectorAll('.subject')[4];
const inpCkb5 = document.querySelectorAll('.subject')[5];

function arrayZero() {
  const pushInp = [];
  if (inpCkb0.checked === true) {
    pushInp.push(inpCkb0.value);
  } return pushInp;
}
function array1() {
  const pushInp = [];
  if (inpCkb1.checked === true) {
    pushInp.push(inpCkb1.value);
  } return pushInp;
}
function array2() {
  const pushInp = [];
  if (inpCkb2.checked === true) {
    pushInp.push(inpCkb2.value);
  } return pushInp;
}

function array3() {
  const pushInp = [];
  if (inpCkb3.checked === true) {
    pushInp.push(inpCkb3.value);
  } return pushInp;
}

function array4() {
  const pushInp = [];
  if (inpCkb4.checked === true) {
    pushInp.push(inpCkb4.value);
  } return pushInp;
}

function array5() {
  const pushInp = [];
  if (inpCkb5.checked === true) {
    pushInp.push(inpCkb5.value);
  } return pushInp;
}

inpCkb0.addEventListener('click', arrayZero);
inpCkb1.addEventListener('click', array1);
inpCkb2.addEventListener('click', array2);
inpCkb3.addEventListener('click', array3);
inpCkb4.addEventListener('click', array4);
inpCkb5.addEventListener('click', array5);

function arrayForm() {
  const arrayfim = arrayZero().concat(array1(),
    array2(),
    array3(),
    array4(),
    array5());
  return arrayfim;
}
const nota1 = document.querySelectorAll('.nota')[0];
const nota2 = document.querySelectorAll('.nota')[1];
const nota3 = document.querySelectorAll('.nota')[2];
const nota4 = document.querySelectorAll('.nota')[3];
const nota5 = document.querySelectorAll('.nota')[4];
const nota6 = document.querySelectorAll('.nota')[5];
const nota7 = document.querySelectorAll('.nota')[6];
const nota8 = document.querySelectorAll('.nota')[7];
const nota9 = document.querySelectorAll('.nota')[8];
const nota10 = document.querySelectorAll('.nota')[9];
nota1.classList.add('avaliado');
function avaliavao(event) {
  const newClass = document.querySelector('.avaliado');
  newClass.classList.remove('avaliado');
  event.target.classList.add('avaliado');
}
nota1.addEventListener('click', avaliavao);
nota2.addEventListener('click', avaliavao);
nota3.addEventListener('click', avaliavao);
nota4.addEventListener('click', avaliavao);
nota5.addEventListener('click', avaliavao);
nota6.addEventListener('click', avaliavao);
nota7.addEventListener('click', avaliavao);
nota8.addEventListener('click', avaliavao);
nota9.addEventListener('click', avaliavao);
nota10.addEventListener('click', avaliavao);
function formNota1() {
  if (nota1.classList.contains('avaliado')) return nota1.value;
}
function formNota2() {
  if (nota2.classList.contains('avaliado')) return nota2.value;
}
function formNota3() {
  if (nota3.classList.contains('avaliado')) return nota3.value;
}
function formNota4() {
  if (nota4.classList.contains('avaliado')) return nota4.value;
}
function formNota5() {
  if (nota5.classList.contains('avaliado')) return nota5.value;
}
function formNota6() {
  if (nota6.classList.contains('avaliado')) return nota6.value;
}
function formNota7() {
  if (nota7.classList.contains('avaliado')) return nota7.value;
}
function formNota8() {
  if (nota8.classList.contains('avaliado')) return nota8.value;
}
function formNota9() {
  if (nota9.classList.contains('avaliado')) return nota9.value;
}
function formNota10() {
  if (nota10.classList.contains('avaliado')) return nota10.value;
}
nota1.addEventListener('click', formNota1);
nota2.addEventListener('click', formNota2);
nota3.addEventListener('click', formNota3);
nota4.addEventListener('click', formNota4);
nota5.addEventListener('click', formNota5);
nota6.addEventListener('click', formNota6);
nota7.addEventListener('click', formNota7);
nota8.addEventListener('click', formNota8);
nota9.addEventListener('click', formNota9);
nota10.addEventListener('click', formNota10);
function avForm() {
  const avFim = [formNota1(),
    formNota2(),
    formNota3(),
    formNota4(),
    formNota5(),
    formNota6(),
    formNota7(),
    formNota8(),
    formNota9(),
    formNota10()];
  return avFim;
} // Controle de input =====================================
const formData = document.getElementById('form-data');
const show = document.getElementById('input-name');
const show2 = document.getElementById('input-lastname');
const show3 = document.getElementById('input-email');
const show4 = document.getElementById('house');
function resultForm1() {
  if (returnForm.style.display === 'none') {
    const elementP1 = document.createElement('p');
    elementP1.innerText = `Nome: ${show.value} ${show2.value}`;
    formData.appendChild(elementP1);
    const elementP2 = document.createElement('p');
    elementP2.innerText = `Email: ${show3.value}`;
    formData.appendChild(elementP2);
    const elementP3 = document.createElement('p');
    elementP3.innerText = `Casa: ${show4.value}`;
    formData.appendChild(elementP3);
    const elementP4 = document.createElement('p');
    elementP4.innerText = `Família: ${inputRadio()}`;
    formData.appendChild(elementP4);
    const elementP5 = document.createElement('p');
    elementP5.innerText = `Matérias: ${arrayForm().join(', ')}`;
    formData.appendChild(elementP5);
  }
}
function resultForm2() {
  if (returnForm.style.display === 'none') {
    const elementP5 = document.createElement('p');
    elementP5.innerText = `Avaliação: ${avForm().join('')}`;
    formData.appendChild(elementP5);
    const elementP6 = document.createElement('p');
    elementP6.innerText = `Observações: ${textarea.value}`;
    formData.appendChild(elementP6);
  }
}
btnFinal.addEventListener('click', resultForm1);
btnFinal.addEventListener('click', resultForm2);
