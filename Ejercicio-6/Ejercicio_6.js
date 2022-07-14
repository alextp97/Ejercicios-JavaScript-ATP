//Crea una funcnión que redondee un número float a un número específico de decimales

//La funcion debe de tener dos parámetros
    // -Un num float con X decimales
    // - El segundo parámetro debe ser un Int que indique el número de decimales
        //al que redondear
    // - IMPORTANTE NO USAR TO FIXED()

function roundTo(numF, numD = 0){

 

    const multiple = Math.pow(10, numD); //Esta función devuelve la base elevada al exponente
    //console.log(multiple)

    return Math.round(numF * multiple) / multiple; //Esta función redondea al entero más cercano
  
}


const roundedResult = roundTo(2.123);
console.log(roundedResult); // 2.12


//const roundedResult = roundTo(1.123456789, 6);
//console.log(roundedResult); // 1.123457