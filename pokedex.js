const myMain$$ = document.querySelector('main');
//console.log(myMain$$);

//THIS FUNCTION INITIALIZES AN API CALLING THE POKEMONS FROM 1 TO 150
const pokeApi = async () => {
  const pokeList$$ = document.querySelector("#pokedex");
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
// MAPPED POKEMONS
const mappedPokemons = (result) => {
  const image = result.sprites && result.sprites.front_default ? result.sprites.front_default : 'no-image';
  const types = result.types ? result.types.map((type) => type.type.name).join(', ') : 'no-types';
  return {
    name: result.name,
    image: image,
    type: types,
    id: result.id,
  };
};

//THIS IS GOING TO BE MY FUNCTION THAT IS GOING TO RECEIVE MY MAPPED POKEMONS AND WILL PAINT THEM
const paintPokemons = (mappedPokemons) => {
  //console.log('pintar mis pokemons', mappedPokemons)
  for(let pokemon of mappedPokemons){
    let pokemonImage = document.createElement('image')
  }
  
};

//THIS IS GOING TO BE MY FUNCTION THAT IS GOING TO ORDER MY CODE
const startApi = async () => {
  const pokemons = await pokeApi();
  //console.log(pokemons);

  const mappedPokemonsData = pokemons.map(mappedPokemons);
  //console.log(mappedPokemonsData);

  paintPokemons(mappedPokemonsData);
};

startApi();
