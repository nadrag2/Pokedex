
/*HOME PAGE*/

/* function getPokemon(){
    var pokeNameId = document.getElementById("searchPokemon").value;
    localStorage.setItem("pkNameOrId", pokeNameId)

    console.log(localStorage.getItem("pkNameOrId"));
    return false;
} */
var namePK = "";

function getName(){
    namePK = document.getElementById("searchPokemon").value;
}


function fetchPK(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${namePK}/`)
    .then(response => response.json()) 
    .then(data => (console.log(data), atribuirData(data.id, data.name, data.height, data.weight, data.types, data.sprites)))
}

/*FORMATING DATA*/

function atribuirData(id, name, height, weight, element, img){
    document.getElementById("id").innerHTML = `ID: ${id}`;
    document.getElementById("name").innerHTML = `NOME: ${name.slice(0, 1).toLocaleUpperCase()}${name.slice(1)}`;
    document.getElementById("height").innerHTML = `TAMANHO: ${addADot(height)} m`;
    document.getElementById("weight").innerHTML = `PESO: ${addADot(weight)} kg`;
    document.getElementById("element").innerHTML = `ELEMENTO(S): ${pokemonElement(element)}`;
    document.getElementById("pic").src = img.other["official-artwork"].front_default;

}

function addADot(number){

    if(number < 9){
        number = `0${number}`;
    }
    let strNumber = number.toString();
    strNumber = `${strNumber.slice(0, -1)}.${strNumber.slice(-1)}`
    return strNumber;
}

function pokemonElement(element){
    let elementArray = [];
        element.forEach(data => { elementArray.push(data.type.name);
        });
    return elementArray.join(", ").toLocaleUpperCase();

}


