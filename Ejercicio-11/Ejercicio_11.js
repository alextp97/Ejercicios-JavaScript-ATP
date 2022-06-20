

//Crea una funcion que tome un array como parametro y lo divida en arrays nuevos
//con tantos elementos como sean especificados.

    //La función debe tener dos parámetros:
        // - El primer parámetro, debe de ser el array entero sin dividir
        // - El segundo parámetro es el número de elementos que deben de tener
        //   los arrays en los que se divida el array original del primer parámetro


function splitArrayIntoChunks( arrFull, splits){

    //Almaceno los nuevos trozos de array en una variable nueva
    let result = [];

        //Con este bucle recorro el array original dando saltos como indica la variable splits
        for(let i = 0; i < arrFull.length; i+= splits){
            result.push(arrFull.slice(i, i + splits));
        }
    return result;
}

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]