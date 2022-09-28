/*4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
número comprendido entre 0 y 1000. Se compara el número introducido con el
calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
función del caso. Se repite la operación hasta que el usuario encuentra el número.*/


//Se aloja en esta variable un numero creado aleatoriamente 
var numeroSecreto = Math.floor(Math.random()*1000);
//Se aloja en este var el numero ingresado por el usuario
var numeroIngresado = parseInt(prompt('Ingrese un  número entre 0 y 1000'))

//Se itinera mientras que el numero ingresado y el secreto sean distintos
do{

 if(numeroIngresado > numeroSecreto){
    alert('El número secreto es más chico, ingrese un número menor');
    numeroIngresado = parseInt(prompt('Ingrese un  número entre 0 y 1000'))

}else{
    alert('El número secreto es más grande, ingrese un número mayor');
    numeroIngresado = parseInt(prompt('Ingrese un  número entre 0 y 1000'))
}

}while(numeroIngresado != numeroSecreto){
    //Cuando la condicion es false sale del bucle y muestra mensaje al usuario
    if(numeroSecreto == numeroIngresado){
        alert('Usted acertó el número secreto era ' + numeroSecreto);
    }
}
    





//var numeroIngresado = parseInt(prompt('Entre 0 y 1000 que número crees que elegí? Ingresa tu número aqui: '))
