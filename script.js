//validar padrão do email
function emailValido(email) {
  
  // Padrão = qualquerNome@fatec.sp.gov.br
  const emailRegex = /^[a-zA-Z0-9._-]+@fatec\.sp\.gov\.br$/;

  if (emailRegex.test(email)) {
      return true;
  } else {
      alert("Digite um email válido @fatec.sp.gov.br");
      return false;
  }
}


function proximo(){
const psenha = document.getElementById('psenha');
const inputemail = document.getElementById('email');
const btnProximo = document.getElementById('btnProximo');
const btnMandarOTP = document.getElementById('btnMandarOTP');

if(inputemail.value !== ''){
  if (emailValido(inputemail.value)){
    psenha.style.display = "block";
    inputemail.disabled = 'true';
    btnProximo.style.display = "none";
    btnMandarOTP.style.display = "block";
  }
}
else{
  alert("Digite o email!");
}                            
}

function verificarSenha(){
const senhaDigitada = document.getElementById('senhaInput').value;
const senha = 123456;

if(senhaDigitada == senha){
    mandarOTP();
}
else{
  alert("Senha inválida!");
}
}

function mandarOTP(){
const email = document.getElementById('email');
const otpverify = document.getElementsByClassName('otpverify')[0];
const otpInput = document.getElementById('otpInput');
const btnVerificar = document.getElementById('btnVerificar');

//gerar numero aleatorio como otp
let otpVal = Math.floor(Math.random() * 10000);

//corpo do email com a otp criada
let corpoEmail = 
  ` <h2>Olá! Bem vindo(a)!</h2> 
    <h2>O seu código de verificação é: ${otpVal} </h2>`;

//smtpjs
Email.send({
      SecureToken : "967ec837-bd8a-41d3-b19e-29c55bd846ad",
      To : email.value,
      From : "nathalia.reginavt@gmail.com",
      Subject : "Código de verificação",
      Body : corpoEmail
  }).then( message => {
      if(message === "OK"){
          alert("OTP enviada para o email "+ email.value);

          document.getElementById('btnMandarOTP').style.display = "none";
          document.getElementById('senhaInput').disabled = "true"

          otpverify.style.display = "block";

            btnVerificar.addEventListener('click',()=>{
              // verificar se o email é valido
              if(otpInput.value == otpVal){
                  alert("Email válido! Siga em frente! ");
                  window.location.href = 'https://fatecrl.edu.br/';
              }else{
                  alert("OTP inválido");
              }
          });
      }
    });
}