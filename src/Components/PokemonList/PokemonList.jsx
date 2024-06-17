
import usePokemonList from "../../Hooks/usePokemonList.jsx";
import Pokemon from "../Pokemon/Pokemon.jsx";
import "./PokemonList.css"
function PokemonList()
{
    const [pokemonState,setPokemonState]=usePokemonList("http://pokeapi.co/api/v2/pokemon")
    
    return (
        <>
  
         
        <div className="Pokemon-List-Header">
                      <h3>Pokemon List</h3>
              </div>
              
  
   
              <div className="Pokemons">  
  
              {(pokemonState.isLoading ) ?"downloading" :
                          pokemonState.pokemonList.map((pokemon)=><Pokemon  name={pokemon.name} image={pokemon.image} key={pokemon.id} id={pokemon.id} /> )
                      }
   
  
              </div>
  
              <div className="button">
                  <button hidden={pokemonState.previousURL==null} onClick={()=>{setPokemonState({
                    ...pokemonState, pokemonURL:pokemonState.previousURL,isLoading:true
                  })}}>Previous</button>
                  <button hidden={pokemonState.nextURL==null} onClick={()=>{setPokemonState({
                    ...pokemonState, pokemonURL : pokemonState.nextURL,isLoading:true
                  })}}>Next</button>
              </div>
              </>
      )

}

export default PokemonList