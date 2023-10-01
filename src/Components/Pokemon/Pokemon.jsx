import { Link } from "react-router-dom"
import "./Pokemon.css"
function Pokemon({name, image,id})
{
    return (

        <>  
            <div className="pokemon-name-image">
                            
                            <Link to={`/${id}`}>
                                <div className="image"><img src={image} alt="Image not found"/></div>
                            </Link>

                            <p><b>Name</b> : {name}</p>

            </div>  

        </>
   )
}

export default Pokemon