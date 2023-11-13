const myDiv$$ = document.querySelector('#pokedex');
// //THIS FUNCTION INITIALIZES AN API CALLING THE POKEMONS FROM 1 TO 150 AND PUSHES THEM TO A LIST
const pokeApi = async () => {
  const baseUrl$$ = "https://pokeapi.co/api/v2/pokemon/";
  const pokemonList = [];

  for (let i = 1; i <= 150; i++) {
    const pokemonUrl = baseUrl$$ + i;
    const response = await fetch(pokemonUrl);
    const result = await response.json();

    pokemonList.push(mappedPokemons(result));
  }

  return pokemonList;
};
// FUNCTION THAT MAPPED THE POKEMONS
const mappedPokemons = (result) => {
  const image = result.sprites?.front_default || 'no-image';
  const types = result.types ? result.types.map((type) => type.type.name).join(', ') : 'no-types';

  return {
    name: result.name,
    image: image,
    type: types,
    id: result.id,
  };
};
// FUNCTION THAT PAINTS THE POKEMONS AND INFO IN THE CONTAINER
const paintPokemons = (mappedPokemons) => {
  for (let pokemon of mappedPokemons) {
    let pokemonFigure$$ = document.createElement('figure');
    
    // CREATING IMAGE
    let pokemonImage$$ = document.createElement('img');
    pokemonImage$$.src = pokemon.image;
    pokemonImage$$.alt = pokemon.name;
    
    // ADDED IMAGE ELEMENT TO FIGURE
    pokemonFigure$$.appendChild(pokemonImage$$);
    
    // ADDED NAME ELEMENT TO FIGURE
    let pokemonName$$ = document.createElement('figcaption');
    pokemonName$$.textContent = `${pokemon.name} - ID: ${pokemon.id}`;
    pokemonFigure$$.appendChild(pokemonName$$);
    
    // ADDED TYPE ELEMENT TO FIGURE
    let pokemonType$$ = document.createElement('p');
    pokemonType$$.textContent = `Type: ${pokemon.type}`;
    pokemonFigure$$.appendChild(pokemonType$$);
    
    // ADDED MY FIGURE ELEMENT TO CONTAINER
    myDiv$$.appendChild(pokemonFigure$$);
  }
};
//FUNCTION THAT FINDS THE POKEMONS
const drawInput = (pokemon) =>{
  //console.log("funcion input",pokemon);
  const input$$ = document.querySelector('input');
  //console.log(input$$);
  input$$.addEventListener('input', () => searchPokemon(input$$.value,pokemon))
};
//FUNCTION THAT FILTERS MY POKEMONS
const searchPokemon = (filtroDelInput, pokemon) => {
  let filteredPokemons = pokemon.filter((result) => result.name.toLowerCase().includes(filtroDelInput.toLowerCase()));
  filteredPokemons = pokemon.filter((result) => result.type.toLowerCase().includes(filtroDelInput.toLowerCase()));
  //console.log(filteredPokemons)
  clearResults();
  paintPokemons(filteredPokemons);
};

//FUNCTION THAT CLEANS MY HTML EVERY TIME I DO A SEARCH IN THE INPUT
const clearResults = () => {
  myDiv$$.innerHTML = '';
};


// MAIN FUNCTION THAT INITIALIZES THE CODE
const startApi = async () => {
  const pokemons = await pokeApi();
  paintPokemons(pokemons);
  drawInput(pokemons);
};

startApi();

