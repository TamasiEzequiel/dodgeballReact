import { Link } from "react-router-dom";
import { Redes } from "../../Redes/Redes";
import { Busqueda } from "./busqueda/Busqueda";


export const Topbar = () => {

    return (

        <div className="topBar">

            <Busqueda />
            <Redes/>


        </div>

    )
}