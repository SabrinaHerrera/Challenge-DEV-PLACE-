const password = document.getElementById('password')
const button = document.getElementById('button')

const confPass1 = document.getElementById('conf-password1')
const confPass2 = document.getElementById('conf-password2')
const confPass3 = document.getElementById('conf-password3')

const btnVerificar = document.getElementById('btn-verificar')



//button.addEventListener('click'){
//    const pass = password.value;
//}


//function enviar(){

  //  document.getElementById('ingresar').display='none';
   // document.getElementById('conf-pass').display='block';

//}
//La condicion
if(password !== confPass1 && password !== confPass2 && password !== confPass3){
  alert("Tenes que ejercitar la memoria");
}else{
  alert("Felicitaciones, recordas tu contraseña");
}


//Comentario: Lastimosamente Me quede sin tiempo y recursos,
// mi intencion era que en la pantalla principal
// aparezca el imput de contraseña y el boton enviar
//al oprimir el boton el imput + el boton debian desaparecer
//y aparecer solo los 3 imput de confirmacion + el boton verificar
