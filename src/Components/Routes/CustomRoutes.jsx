import { Routes, Route } from "react-router-dom"
import Pokedex from "../Pokedex/Pokedex"
import Description from "../Description/Description"

function CustomRoute()
{

    return(
        <>
        <Routes>

            <Route path="/" element={<Pokedex/>} />
            <Route path="/:id" element={<Description/>} />

        </Routes>
        </>
    )

}

export  default CustomRoute