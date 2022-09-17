const inputEmail = document.getElementById('validation-one');
const inputSenha = document.getElementById('validation-two');
const btn = document.getElementById('button-one');

function inputAlert() {
  if ((inputEmail.value === 'tryber@teste.com') && (inputSenha.value === '123456')) {
    alert('Olá, Tryber!');
  } else if ((inputEmail.value !== 'tryber@teste.com') || (inputSenha.value !== '123456')) {
    alert('Email ou senha inválidos');
  }
}
btn.addEventListener('click', inputAlert);
