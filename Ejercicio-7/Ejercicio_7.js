//Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después
// de ser ejecutados por una función específica.

// La función debe de tener dos parámetros:
    //Primer parámetro es un objeto con x número de campos y valores
    //Segundo parámetro es una función que retorna un booleano, que se tiene que aplicar al objeto del primer parámetro

    function returnFalsyValues( param1, funct) {

        let valueObject = {};

        for( let value in param1){
            //console.log(param1[value])
            //console.log(funct(param1[value]))
            if(!funct(param1[value])){

                valueObject[value] = param1[value];
                //console.log(param1[value])
            }
        }
        return valueObject;
        //console.log(funct[value])*/

    }
    

//const result = returnFalsyValues({ a:12, b: 3, c: 22}, x => x > 8 && x <= 12)
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result); // {a: 1, c: 3}