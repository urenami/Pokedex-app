let pokemonRepository = (function () {
 
    let  pokemonList= [
    { name: "charizard", height: 1.7, type: ["fire", "flying"] },
    { name: "Blastoise", height: 1.6, type: "water" },
    { name: "Venusaur", height: 2, type: ["grass", "poison"] },
    { name: "Nidoqueen", height: 1.3, type: ["ground", "poison"] },
    { name: "Nidoking", height: 1.4, type:["ground", "poison"] },
    { name: "Blaziken", height: 1.9, type: ["fire", "fighting"] },
];

function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
    };
})();

/* replacing for loop with for each loop*/ 

pokemonRepository.getAll().forEach(function(pokemon) {

    if (pokemon.height >=2) {
        document.write(pokemon.name + " (height: " + pokemon.height + "); - Wow, that is a big pokemon!" + "<br>")
        }
    else if (pokemon.height >= 1.6 && pokemon.height < 2) {
        document.write(pokemon.name + " (height: " + pokemon.height + "); - That is a medium pokemon!" + "<br>")
        }
    else {
        document.write(pokemon.name + " (height: " + pokemon.height + "); - That is a small pokemon!" + "<br>")
        }
});