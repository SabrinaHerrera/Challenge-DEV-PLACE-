/*5. Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
caso se terminará el programa.
Al terminar, mostrará lo siguiente:
a. – mayor número introducido
b. – menor número introducido
c. – suma de todos los números
d. – suma de los números*/


//Intente creear un array que dentro de un ciclo do while 
//que itinere hasta que el usuario ingrese el -1
const numeroIngresado = Array(0); 


do{
    numeroIngresado[0] = parseInt(prompt('Por favor ingrese los números que desee, para salir del programa ingrese -1'));
    numeroIngresado.push();

}while(numeroIngresado != -1){

    if(numeroIngresado == -1){
        var mayor = Math.max(numeroIngresado);
        document.write(mayor + 'mayor número introducido');
        
        var menor = Math.min(numeroIngresado );
        document.write(menor + ' menor número introducido')
    }

}