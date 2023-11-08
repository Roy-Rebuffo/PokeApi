//Funcion que inicia y recoge los 150 primeros pokemon
const pokeApi = async() => {
    const pokeList$$ = document.querySelector('#pokedex');
    const pokeList = [];
  
    for(let i =1; i<150; i++){
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const res = await response.json();
      console.log(res)
  
      //MAPEAR LOS POKEMONS 
    }
  }
  //Esta va a ser mi funcion para ordenar mis otras funciones. Porque solo me devuelve 20?
  const startApi = async() => {
  
    const pokemons = await pokeApi();
    console.log(pokemons);
  };
  startApi();
  
  
  function paintPokemons(){
  
  }
  
  