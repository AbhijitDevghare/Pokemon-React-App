
import axios from "axios"
import {useEffect,useState} from "react"

function usePokemonList(url)
{
   

    const [pokemonState , setPokemonState ] = useState({
        isLoading:false,
        pokemonList:[],
        previousURL : "",
        nextURL : "",
        pokemonURL:url
      })
  
      async function data()
      {
             
        const response = await axios.get(pokemonState.pokemonURL)
        console.log(response);

        const  nextPokemonUrl = response.data.next;
        const previousPokemonUrl = response.data.previous;


        const pokemonResult=response.data.results ; 
                
                      const pokemonResultPromise = pokemonResult.map((pokemon)=>axios.get(pokemon.url)) ;
                      const pokemonDataUrl= await axios.all(pokemonResultPromise) 
                      
                       console.log("response.pokemon.results mapping :",pokemonDataUrl)
                      const respJson = pokemonDataUrl.map((pokeData) => {
                      const pokemon = pokeData.data;
              
                      return {
                        id:pokemon.id,
                        name:pokemon.name,
                        image :(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny
                    }
                    
                })
              
              
                setPokemonState({
                  ...pokemonState ,
                  pokemonList:respJson,
                  isLoading:false,
                  previousURL:previousPokemonUrl,
                  nextURL:nextPokemonUrl
                })

  }
  
  useEffect(()=>{
    data();

  },[pokemonState.pokemonURL])

  
  return [pokemonState,setPokemonState]

}

export default usePokemonList