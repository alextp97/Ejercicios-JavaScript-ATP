

//Crea una función que elimine las etiquetas html o xml de un string.

//La función debe tener un string como único parámetro


function removeHTMLTags (cadena) {

    return cadena.replace(/<[^>]*>/g, '')
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div> <h4>Hola</h4>');


console.log(result); // lorem ipsum