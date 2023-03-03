let pokemonRepository = (function () {
  //empty array below so it can load from the api//
  let  pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=80';

  function add(pokemon) {
     if (
         typeof pokemon === "object" &&
         "name" in pokemon
      ) {
         pokemonList.push(pokemon);
      } else {
          console.log("pokemon is not correct");

        }
      }
      function getAll() {
          return pokemonList;
      }

      function addListItem(pokemon) {
     let pokemonList = document.querySelector(".pokemon-list");
     let listpokemon = document.createElement("li");
     let button = document.createElement("button");

     //created button for pokemon//
     button.innerText = pokemon.name;
     button.classList.add("button-class");
     listpokemon.appendChild(button);
     pokemonList.appendChild(listpokemon);
     button.addEventListener("click", function(event) {
         showDetails(pokemon);
     });
  }

  //loads the list of pokemon from the api//

  function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        json.results.forEach(function (item) {
            let pokemon = {
             name: item.name,
             detailsUrl: item.url
            };
            add(pokemon);
        
        });
    }).catch(function (e) {
        console.error(e);
    })
}

//loads the pokemon details//
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

        //added details to items//
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {

      //modal starts here//
      let modalContainer = document.querySelector ('#modal-container');

   modalContainer.innerHTML = '';

   let modal = document.createElement('div');
   modal.classList.add ('modal');

   let sprite = document.createElement('img');
   sprite.classList.add('sprite');
   sprite.src = item.imageUrl;

   let closeButtonElement = document.createElement('button');
   closeButtonElement.innerText = 'x'; 
   closeButtonElement.addEventListener('click', hideModal)

   let titleElement = document.createElement ('h1');
   titleElement.innerText =  (item.name);

   let contentElement = document.createElement ('p');

   // empty variable string to store the name of the type//
   let pokemonTypes = "";

     // for loop used to iterate through the item types of object//
     for (let i = 0; i < item.types.length; i++) {
      pokemonTypes += item.types[i].type.name;
      if (i < item.types.length - 1) {
          pokemonTypes += ", ";
      }
  }

  
  contentElement.innerText =('Height: ' + item.height + '\n' +  '\n' + 'Types: ' + pokemonTypes);


  modal.appendChild (closeButtonElement);
  modal.appendChild (titleElement);
  modal.appendChild (contentElement);
  modalContainer.appendChild (modal);
  modal.appendChild (sprite);


  modalContainer.classList.add('is-visible');


function hideModal (){
  modalContainer.classList.remove ('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
let target = e.target;
if (target === modalContainer) {
  hideModal();
}
});

document.querySelector ('button.button-class').addEventListener('click', () => {
  showDetails ('Modal Title', 'Modal Content');
      });
    });    
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

   
   //loop to create a button with each pokemon// 
   
   pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
     pokemonRepository.addListItem(pokemon);
    });
  });