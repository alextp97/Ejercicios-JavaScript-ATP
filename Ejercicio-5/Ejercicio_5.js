//Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales
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
const noCapital = arrCities2.filter((city) => !city.capital).map(data => ({
    city: data.city,
    isSpain: data.country === 'Spain'
}));


console.log(noCapital);
    



