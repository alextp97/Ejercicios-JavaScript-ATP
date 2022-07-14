// Crea una función que convierta un número de bytes en un formato con valores
// legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

// La función debe tener 2 parámetros:

    // Primer parámetro debe ser el número de bytes

    // Segundo parámetro debe ser un número que indique la cantidad de dígitos
    // para truncar el resultado (se puede hacer con Number.prototype.toPrecision()).
    // este parámetro, debe de tener valor de 3


    function fromBytesToFormattedSizeUnits(numInBytes, numOfDigits = 3){

        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        let l = 0;
        const num = 1024;
        do{
            numInBytes = (numInBytes / num);
            //console.log(numInBytes);
            l++;

        }while ( numInBytes > num || numInBytes < -num);

        return numInBytes.toPrecision(numOfDigits) + sizes[l]; 

    }


    //const result = fromBytesToFormattedSizeUnits(1024);
    //console.log(result); // 1KB
     
    const result2 = fromBytesToFormattedSizeUnits(123456789);
    console.log(result2); // 123MB
     
    //const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
    //console.log(result3); // -12.145GB
    