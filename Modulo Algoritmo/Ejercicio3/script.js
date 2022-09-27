/*3. Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar.*/


function calcularSalario(antiguedad){
    //Pedir y capturar el valor de la hota trabajada
    var valorHora = parseInt(prompt('Por favor ingrese el valor de la hora: '));
    //Pedir y capturar el nombre del empleado
    var nombre = prompt('Por favor ingrese el nombre del empleado: ');    
    //Pedir y capturar la cantidad de hora trabajadas en el mes por el empleado ingresado
    var horasMensuales = parseInt(prompt('Por favor ingrese la cantidad de horas trabajadas en el mes: '));

    var importeCobrar;
    //De acuerdo a la antiguedad se calcula el valor del importe a cobrar
    if(antiguedad < 10){
        importeCobrar = valorHora * horasMensuales;  
        alert('El empleado ' + nombre +' posee una antiguedad de ' 
        + antiguedad +' años, cobra un total de ' + importeCobrar + ' pesos.');  
    }else{
        importeCobrar= ((valorHora * horasMensuales) + (antiguedad * 30));
        alert('El empleado ' + nombre +' posee una antiguedad de ' 
        + antiguedad +' años, cobra un total de ' + importeCobrar + ' pesos.');
        
    } 
    return importeCobrar; 
}

//Pedir y capturar la antigüedad del empleado
var antiguedad = parseInt(prompt('Por favor ingrese la antigüedad del empleado: '));


calcularSalario(antiguedad);
