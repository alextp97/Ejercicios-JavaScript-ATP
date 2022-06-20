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


const isSpain = true;


/*const noCapital=[];

  arrCities2.filter((capitales) => {
    if( capitales.capital === false){
        return noCapital = (capitales.city, capitales.isSpain)
    }
});*/



const noCapital = []
 arrCities2.slice().filter((capitales)=> {
    if(capitales.capital === false){
    noCapital.push(capitales);
    }
});


console.log(noCapital);
    



