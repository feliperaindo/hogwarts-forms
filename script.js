const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');
const checkBox = document.getElementById('agreement');

function inputAlert() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
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

btn.addEventListener('click', inputAlert);
checkBox.addEventListener('change', activeButton);
