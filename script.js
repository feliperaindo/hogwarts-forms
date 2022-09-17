const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');
const checkBox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function inputAlert() {
  if ((inputEmail.value === 'tryber@teste.com') && (inputSenha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function activeButton() {
  const btnFinal = document.getElementById('submit-btn');

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
    const doide = e.target.maxLength - e.target.textLength;
    counter.innerText = doide;
  } else {
    counter.innerText = '500';
  }
}

textarea.addEventListener('keyup', contador);
textarea.addEventListener('keydown', contador);
btn.addEventListener('click', inputAlert);
checkBox.addEventListener('change', activeButton);
