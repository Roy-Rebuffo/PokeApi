//THIS FUNCTION INITIALICES AN API CALLING THE POKEMONS FROM 1 TO 150
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
const mappedPokemons = (result) => ({
  name: result.name,
  image: result.sprites.front_default,
  type: result.types.map((type) => type.type.name).join(', '),
  id: result.id,
});

//THIS IS GOING TO BE MY FUNCTION THAT IS GOING TO ORDER MY CODE
const startApi = async () => {
  const pokemons = await pokeApi();
  console.log(pokemons);

  const mappedPokemonsData = pokemons.map(mappedPokemons);
  console.log(mappedPokemonsData);

  paintPokemons();
};

const paintPokemons = () => {
  
};

startApi();
