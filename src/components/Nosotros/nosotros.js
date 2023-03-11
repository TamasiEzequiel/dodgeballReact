import { Somos } from "./somos"
import { Valores } from "./valores"
import { Autoridades } from "./autoridades"
import { Ubicacion } from "./ubicacion"

export const Nosotros = () => {

    return (
        <div className="nosotros">

          <Somos/>
          <Valores/>
          <Autoridades />
          <Ubicacion />
        </div>
        
    )
}