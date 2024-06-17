
import { useParams } from "react-router-dom"
import useDescriptionHook from "../../Hooks/useDescriptionHook"
import Search from "../Search/Search"
import "./Description.css"
import { useState } from "react"

function Description({pokemonName})
{
    const pokeId =useParams()
    console.log("Description :",pokemonName)
     const [detail] = useDescriptionHook(pokeId,pokemonName)

    return (
            <>
        
             {(!pokemonName)? <Search/>:""}
            <div className="Description-flex">
                        
                    <div className="Description-Box">
                            <img src={detail.url} alt="Pokemon_Spirit_Loading" />
                            
                                <h3>Pokemon Name : {detail.name}</h3>
                                <p>Height : {detail.height}</p>
                                <p>Weight : {detail.weight}</p>
                                <p>Abilities : {detail.abilities}</p>
                                <p className="box"> Type -  {detail.types && detail.types}  </p>
                            
                    </div>

                    <div id="similar-poke-list">
                        <h3> More  { detail.types && detail.types}  type Pokemons -   </h3>
                        <ul className="list">
                            {detail.similarPokemonList && detail.similarPokemonList.map(
                                (p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>
                                )}
                        </ul>
                    </div>

              </div>

              {/* (p)=><Link to={`/${p.pokemon.id}`}><li key={p.pokemon.url}>{p.pokemon.name}</li></Link> */}

            
        </>
    )
}

export default Description