//Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después
// de ser ejecutados por una función específica.

// La función debe de tener dos parámetros:
    //Primer parámetro es un objeto con x número de campos y valores
    //Segundo parámetro es una función que retorna un booleano, que se tiene que aplicar al objeto del primer parámetro

    const returnFalsyValues = ( param1, funct) => {
        
        //console.log(Object.values(param1).filter( value => !funct(value)));

        //CON KEYS
        const newArr = {};
        const objKeys = Object.keys(param1);


        for(let i = 0; i < objKeys.length; i++){

            //console.log(param1[objKeys[i]]);
            if(!funct(param1[objKeys[i]])){
                
                newArr[objKeys[i]] = param1[objKeys[i]]

                //console.log(newArr[objKeys[i]])
            }
        }
    
        return newArr;


    }
    

//const result = returnFalsyValues({ a:12, b: 3, c: 22}, x => x > 8 && x <= 12)
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
console.log(result); // {a: 1, c: 3}