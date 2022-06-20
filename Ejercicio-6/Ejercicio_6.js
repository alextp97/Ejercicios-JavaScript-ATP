//Crea una funcnión que redondee un número float a un número específico de decimales

//La funcion debe de tener dos parámetros
    // -Un num float con X decimales
    // - El segundo parámetro debe ser un Int que indique el número de decimales
        //al que redondear
    // - IMPORTANTE NO USAR TO FIXED()

function roundTo(numF, numD){

    let num1 = parseFloat(numF);
    let num2 = parseInt(numD);

    let multiple = Math.pow(10, num2); //Esta función devuelve la base elevada al exponente
    //console.log(multiple)

    let numberRounded = Math.round(num1 * multiple) / multiple; //Esta función redondea al entero más cercano
    return numberRounded;
}


//const roundedResult = roundTo(2.123, 2);
//console.log(roundedResult); // 2.12


const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457