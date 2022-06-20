// Crea una función que a partir de un objeto de entrada, retorne un objeto
// asegurándose de que las claves del objeto estén en lowercase.

//La función debe de tener un objeto como único parámetro


function toLowercaseKeys(myObject) {

    //Tercera Forma
        //Convierto el objeto a un array
        let newArr = Object.entries(myObject);

        let arrLower = newArr.map(function(i) {
            i[0] = i[0].toLowerCase();
            return i;
        });

        //Vuelvo a convertir el array a un Objeto
        const newObj = Object.fromEntries(arrLower);

        return newObj;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }