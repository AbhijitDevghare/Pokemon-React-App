
import { Link } from "react-router-dom"
import "./Search.css"
import useDebounceHook from "../../Hooks/useDebounceHook"
function Search({updateSearch})
{
    const debouncedCallback = useDebounceHook((e) => updateSearch(e.target.value))

    return (
        <div className="Home-Page-Wrapper">

             <Link to="/"><h1>Pokedex</h1></Link>

            <div className="search-poke"> 
                    <input 
                    type="search" 
                    placeholder="Search Pokemon"   
                    onChange={debouncedCallback} />
            </div>
        </div>         
        )
}

export default Search