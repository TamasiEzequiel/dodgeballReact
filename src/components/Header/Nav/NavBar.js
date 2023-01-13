import { Logo } from "../Logo/Logo";
import '../Nav/navBar.scss'

export const Navbar = () => {

    return (       

        <div className="navBar">
           
            <Logo/>

            <nav>
                <ul>
                    <li className="li-desp"> <a href="">Sobre Nosotros</a>
                        <ul className="nav-desp">
                            <li><a href="">Provincias Asociadas</a></li>
                            <li><a href="./equipos.html">Equipos</a></li>
                        </ul>
                    </li>

                    <li><a href="./reglamentos.html">Reglamentos</a></li>

                    <li className="li-desp"> <a href="./torneos.html">Torneos</a>
                        <ul className="nav-desp">
                            <li><a href="./estadisticas.html">Estadisticas</a></li>
                        </ul>
                    </li>

                    <li> <a href="./internacional.html">Internacional</a> </li>
                    <li> <a href="./shop.html">Shop</a> </li>
                </ul>

            </nav>
        </div>

    )
}