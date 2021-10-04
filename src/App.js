import React, {useState, useEffect} from 'react';
import PokemonThumnail from './components/PokemonThumnail';

const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20")

  const getAllPokemon = async () =>{
    const res = await fetch(loadMore);
    const data = await res.json()
    setLoadMore(data.next)
    console.log("res", data.next);

    function getPokemon(result) {
      result.forEach(async(pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();

        
        setAllPokemon(currentList => [...currentList, data])
   
        
      })

    }
    getPokemon(data.results)
   await  console.log("all",allPokemon)

  }

  useEffect(() => {
    getAllPokemon()
    
  }, [])


  return (
    <div className="app-contaner">
      <h1>PokeMon App</h1> 
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemonsingle, index) => 
            <PokemonThumnail
            key ={index}
            id={pokemonsingle.id}
            image= {pokemonsingle.sprites.other.dream_world.front_default}
            name = {pokemonsingle.name}
            type = {pokemonsingle.types[0].type.name}
             />
          )}
          
        </div>
       <button 
       className="load-more"
       onClick={() => getAllPokemon()}> 
        Load More
       </button>
      </div>
     </div>
  );
}

export default App;
