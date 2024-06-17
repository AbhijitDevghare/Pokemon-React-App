
import Description from "../Description/Description";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

import { useState } from "react";


function Pokedex()
{      
     const [searchInput,setSearchInput] = useState("")
     return (
      <>
      <Search updateSearch={setSearchInput}/>
       
       {(!searchInput)  ? <PokemonList/> : <Description key={searchInput} pokemonName={searchInput}/>}
       {/* { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />} */}

      </>
     )
        

}

export default Pokedex