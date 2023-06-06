const { pokemon } = require("../pokemon/pokemon")

let pokemons = new pokemon

async function postPokemon() {
    try {
        let pokemons = new pokemon(document.getElementById("name").value,
            document.getElementById("movekit").value,
            document.getElementById("photo").value);

        let url = "https://pokeapi.co/api/v2/pokemon/charizard";

        let params = {
            headers: { "Content-type": "application-json ; charset = UTF-8" },
            body: JSON.stringify(pokemons),
            method: "POST"
        }
        let data = await fetch(url, params);
        let result = await data.JSON()
        console.log(result);
    }
    catch (error) {
        console.log(error)
    }
}

async function getPokemon() {

    let name = document.getElementById("inputPokemon").value.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;



    // console.log(name)
    let param = {
        headers: { "Content-type": "application-json; charset = UTF-8" },
        method: "GET"
    }

    try {
        let data = await fetch(url, param);
        let result = await data.json();
        console.log(result);
        console.log(data)
        // document.getElementById("inputPokemon") = result.data;

        let pokemon_name = document.getElementById("name_Pokemon");
        let photo = document.getElementById("photo_Pokemon");
        let moves = document.getElementById("abilites_Table");


        pokemon_name.innerHTML = `<h1>${result.name.toUpperCase()}</h1>`
        // document.getElementById('name_Pokemon').innerHTML = `<p>${result.name}</p>`
        photo.innerHTML = `<img src = "${result.sprites.other.home.front_default}"></img>`
        moves.innerHTML = "";
        for (let i = 0 ; result.abilities.length; i++){
            moves.innerHTML += ('<tr>')
            moves.innerHTML += (`<td>${result.abilities[i].ability.name}`)
            moves.innerHTML += ('</tr>')
           
        }
        
   
    }
    catch (error) {
        console.log(error)
    }
}
console.log(getPokemon())
getPokemon()