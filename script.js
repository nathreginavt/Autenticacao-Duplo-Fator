function mandarOTP(){
  const email = document.getElementById('email');
  const otpverify = document.getElementsByClassName('otpverify')[0];

  //gerar numero aleatorio como otp
  let otpVal = Math.floor(Math.random() * 1000);

  //corpo do email com a otp criada
  let corpoEmail = 
    ` <h1>Olá</h1> 
      <h2>seu código de verificação é: </h2>${otpVal} `;

  
  Email.send({
        SecureToken : "add your code here",
        To : email.value,
        From : "your-email-created-in-smtpjs",
        Subject : "Código de verificação",
        Body : emailbody
    }).then(
      message => {
        if(message === "OK"){
            alert("OTP enviada para o email "+ email.value);

            otpverify.style.display = "block";
            const otpInput = 
 document.getElementById('otpInput');
            const btnVerificar = document.getElementById('btnVerificar');

              btnVerificar.addEventListener('click',()=>{
                // verificar se o email é valido
                if(otpInput.value == otpVal){
                    alert("Email válido...");
                }
                else{
                    alert("OTP inválido");
                }
            })
        }
      }
    );

}