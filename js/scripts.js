
let  pokemonList= [
    { name: "charizard", height: 1.7, type: ["fire", "flying"] },
    { name: "Blastoise", height: 1.6, type: "water" },
    { name: "Venusaur", height: 2, type: ["grass", "poison"] },
    { name: "Nidoqueen", height: 1.3, type: ["ground", "poison"] },
    { name: "Nidoking", height: 1.4, type:["ground", "poison"] },
    { name: "Blaziken", height: 1.9, type: ["fire", "fighting"] },
]

/* loop to print Pokemon names list:
for (let i = 0;
    i < pokemonList.length;
    i++) {
        document.write(pokemonList[i].name + "<br>")
}*/

for (let i = 0; 
    i < pokemonList.length; i++) {

    if (pokemonList[i].height >=2) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "); - Wow, that is a big pokemon!" + "<br>")
        }
    else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 2) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "); - That is a medium pokemon!" + "<br>")
        }
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "); - That is a small pokemon!" + "<br>")
        }
}