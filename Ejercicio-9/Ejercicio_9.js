// Crea una función que a partir de un objeto de entrada, retorne un objeto
// asegurándose de que las claves del objeto estén en lowercase.

//La función debe de tener un objeto como único parámetro


//CON REDUCE
const toLowercaseKeys = (myObject) => {

    const newObj = {};

    Object.entries(myObject).reduce((previousValue, currentValue) =>
     {
        newObj[previousValue[0].toLocaleLowerCase()] = previousValue[1];
        newObj[currentValue[0].toLocaleLowerCase()] = currentValue[1];

     })

    return newObj;
    
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }