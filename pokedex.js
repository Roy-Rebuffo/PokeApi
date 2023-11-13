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
    let pokemonCard$$ = document.createElement('div');
    pokemonCard$$.classList.add('card');
    let backgroundImg$$ = document.createElement('div');
    backgroundImg$$.classList.add('background');
    pokemonCard$$.appendChild(backgroundImg$$);
    // CREATING IMAGE
    let pokemonImage$$ = document.createElement('img');
    pokemonImage$$.src = pokemon.image;
    pokemonImage$$.alt = pokemon.name;

    // ADDED IMAGE ELEMENT TO CARD
    backgroundImg$$.appendChild(pokemonImage$$);

    // ADDED NAME ELEMENT TO CARD
    let pokemonName$$ = document.createElement('p');
    pokemonName$$.classList.add('card-title');
    pokemonName$$.textContent = `${pokemon.name} - ID: ${pokemon.id}`;
    backgroundImg$$.appendChild(pokemonName$$);

    // ADDED TYPE ELEMENT TO CARD
    let pokemonType$$ = document.createElement('p');
    pokemonType$$.textContent = `Type: ${pokemon.type}`;
    backgroundImg$$.appendChild(pokemonType$$);

    // ADDED MY CARD ELEMENT TO CONTAINER
    myDiv$$.appendChild(pokemonCard$$);
  }
};

//FUNCTION THAT FINDS THE POKEMONS
const drawInput = (pokemon) =>{
  //console.log("funcion input",pokemon);
  const input$$ = document.querySelector('#filterInput');
  //console.log(input$$);
  input$$.addEventListener('input', () => searchPokemon(input$$.value,pokemon))
};
//FUNCTION THAT FILTERS MY POKEMONS
const searchPokemon = (filtroDelInput, pokemon) => {
  let filteredPokemonsName = pokemon.filter((result) => result.name.toLowerCase().includes(filtroDelInput.toLowerCase()));
  let filteredPokemonsType = pokemon.filter((result) => result.type.toLowerCase().includes(filtroDelInput.toLowerCase()));
  //HE CONVERTIDO EL ID A STRING PORQUE SI NO ME DABA QUE NO ERA UNA FUNCION
  let filteredPokemonsId = pokemon.filter((result) => result.id.toString().toLowerCase().includes(filtroDelInput.toLowerCase()));
  //console.log(filteredPokemons)
  clearResults();
  paintPokemons(filteredPokemonsName);
  paintPokemons(filteredPokemonsType);
  paintPokemons(filteredPokemonsId);
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
