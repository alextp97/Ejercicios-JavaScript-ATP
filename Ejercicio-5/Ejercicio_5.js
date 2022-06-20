//Dade un array de ciudades, sacar en un nuevo array las ciudades no capitales
//con unos nuevos parámetros que sean city y isSpain. El valor de isSpain
//será un boolean indicando si es una ciudad de España.

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeauz', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false},
];

//Primero filtro el array de Cities2 para ver las ciudades que no son capitales
const noCapital = arrCities2.filter((capitales)=> {
    if(capitales.capital === false){
        return capitales;
    }

    //Vuelvo a recorrer el array para comprobar si las ciudades son de España o no
}).map( data => {
    let is = ( data.country === 'Spain');
    return {
        city: data.city,
        isSpain: is 
    }
});


console.log(noCapital);
    



