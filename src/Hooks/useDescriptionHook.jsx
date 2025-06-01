import axios from "axios"
import {  useEffect, useState } from "react"

function useDescriptionHook(pokeId,pokemonName)
{
     console.log("Pokemon Name : ",pokemonName)

    const [detail , setDetails ] = useState({})   
    async function pokeDescriptionFetch()
    {
        //fetch pokemon detail 
        let response;
        if(pokemonName)
        {
             response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        }else{
          response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId.id}`)
        }
        const data = response.data
        console.log("Data ",data)
        const pokeTypes = data.types && data.types.map((poketype)=>poketype.type.name)

        //fetch more pokemon list
        const morePokeResp = await axios.get(`https://pokeapi.co/api/v2/type/${pokeTypes[0]}`) 
        const morePokeList =  morePokeResp.data.pokemon.slice(0,10)

        //fetch more pokemon list id from the url 
        const morePokeListUrl =  morePokeList.map((p)=>p.pokemon.url)
        const segments = morePokeListUrl.map((p)=>p.split('/'))
        const morePokeListUrlId = segments.map((p)=>p[p.length-2])
        // console.log("IDDD ", morePokeListUrlId )
        // console.log("segments : ",segments)
        // console.log("URL ", morePokeListUrl)
        // console.log(morePokeResp)
        let i=0
        morePokeList.map((p)=>p.pokemon.id=morePokeListUrlId[i++])

     //     console.log('morePokeList',morePokeList)
    
        const desc = {
            id : data.id,    
            name : `${data.name}`.toUpperCase(),
            height : data.height,
            weight : data.weight ,
            abilities : data.abilities.map((p)=>p.ability.name).join(', '),
            url : data.sprites.other.dream_world.front_default,
            types : data.types && data.types.map((poketype)=>poketype.type.name).join(', '),
            similarPokemonList:morePokeList,
            // similarPokemonListId:morePokeListUrlId
          }

     setDetails(desc)

    }

    useEffect(()=>{
         pokeDescriptionFetch()
    },[])

    return [detail,setDetails]
}    

export default useDescriptionHook
