//THIS FUNCTION INITIALICES AN API CALLING THE POKEMONS FROM 1 TO 150
const pokeApi = async () => {
    const pokeList$$ = document.querySelector("#pokedex");
    const baseUrl$$ = "https://pokeapi.co/api/v2/pokemon/";
    const pokemonList = [];
  
    for (let i = 1; i <= 150; i++) {
      const pokemonUrl = baseUrl$$ + i;
      const response = await fetch(pokemonUrl);
      const result = await response.json();
      
      //con un return solo me devuelve bulbasaur
      console.log(result.name);
      
  
      // MAP POKEMONS

      const pokemon = {
        
          name: result.name,
          image: result.sprites['front_default'],
          type: result.types.map((type) => type.type.name).join(', '),
          id: result.id,
      };
  
      pokemonList.push(pokemon);
    }
    
    return pokemonList;
  };


  //THIS IS GOING TO BE MY FUNCTION THAT IS GOING TO ORDER MY CODE


  // esta funcion me da error y desconozco el motivo
  
  const mappedPokemons = (pokemonCharacters) => {
    const mappedPokemonData = pokemonCharacters.map((character) => ({
      name: character.name,
      image: character.sprites['front_default'],
      type: character.types.map((type) => type.type.name).join(', '),
      id: character.id,
    }));
    return mappedPokemonData;
  };
  

  const startApi = async () => {
    const pokemons = await pokeApi();
    console.log(pokemons);
    //esta funcion para mapear me da error y desconozco el motivo
    const mappedPokemonsData = mappedPokemons(pokemons);
    console.log(mappedPokemonsData);
    //
    paintPokemons();

  };
  

  const paintPokemons = () => {
  }

  startApi();