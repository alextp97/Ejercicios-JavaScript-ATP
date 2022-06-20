
const list = document.getElementById('list');


//Código para acceder a la API de rick y morty
const rickMorty = async () => {

    try {

        const respuesta = await fetch('https://rickandmortyapi.com/api/character');
        //console.log(respuesta);


        //Si la respuesta es correcta
        if( respuesta.status === 200){
            const datos = await respuesta.json();
            //console.log(datos)

            const mapedData = await datos.results.map(data => {
                return `
                    <h4>${data.name}</h4>                
                `
            })
            list.innerHTML = mapedData.join('');
        }
        else if( respuesta.status === 404 ){
            console.log('Parece que no hay Ricks compatibles....');
        }
    } catch (error) {
        console.log(error);
        
    }
}

//Código para acceder a la API de Rick y Morty pero solo buscando el género femenino
const rickMortyGender = async () => {
    
    try {

        const respuesta = await fetch('https://rickandmortyapi.com/api/character?gender=female');
        //console.log(respuesta);

        //Si la respuesta es correcta
        if( respuesta.status === 200){
            const datos = await respuesta.json();
            //console.log(datos)

            const mapedData = await datos.results.map(data => {
                return `
                    <h4>${data.name}</h4>
                `
            })
            list.innerHTML = mapedData.join('');
        }
        else if( respuesta.status === 404 ){
            console.log('Parece que no hay Ricks femeninos compatibles....');
        }
    }catch (error) {
        console.log(error);
        
    }
}


function filterList() {

    let input = document.getElementById("search-input").value.toLowerCase();
    let h4 = document.getElementsByTagName("h4");

    for( i = 0; i < h4.length; i++){
        
        let txtValue = h4[i].textContent;

        if(txtValue.toLocaleLowerCase().indexOf(input) > -1){
            h4[i].style.display = "";
        }
        else{
            h4[i].style.display = "none";
        }
    }
}




