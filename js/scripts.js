let pokemonRepository = (function() {
 
    let  pokemonList = [
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

function addListItem (pokemon) {
    let repository = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    /*created button for pokemon*/
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    repository.appendChild(listPokemon);
    /*added event listener*/
    button.addEventListener("click", (Event) => showDetails(pokemon));
    
  }

  function showDetails (pokemon) {
    console.log(pokemon);

  }
  
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
}
})();

/* loop to create a button with each pokemon*/ 

pokemonRepository.getAll().forEach(function(pokemon) {

    pokemonRepository.addListItem(pokemon);

    })
