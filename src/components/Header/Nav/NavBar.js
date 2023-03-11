import { Logo } from "../Logo/Logo";
import '../Nav/navBar.scss'
import { Link } from "react-router-dom";
import { CartWidget } from "../../Shop/CartWidget";

export const Navbar = () => {

    return (

        <div className="navBar">

            <Logo />

            <nav>
                <ul>
                    <li className="li-desp"> <Link to='/nosotros'>Sobre Nosotros</Link>
                        <ul className="nav-desp">
                        <Link to='/nosotros/equipos.js'>Equipos</Link>
                        <Link to='/nosotros/provincias.js'>Provincias Asociadas</Link>
                        </ul>
                    </li>

                    <li><Link to='/reglamentos'>Reglamentos</Link></li>

                    <li className="li-desp"><Link to='/torneos'>Torneos</Link>
                        <ul className="nav-desp">                        
                        <Link to='/nosotros/estadisticas'>Estadisticas</Link>
                        </ul>
                    </li>

                    <li> <Link to='/internacional'>Internacional</Link> </li>
                    <li className="li-desp"><Link to='/shop'>Shop</Link>
                        <ul className="nav-desp">
                            <li><Link to='/shop/indumentaria'>Indumentaria</Link></li>
                            <li><Link to='/shop/material'>Material Deportivo</Link></li>
                            <li><Link to='/shop/accesorios'>Accesorios</Link></li>

                        </ul>

                    </li>
                    <CartWidget/>
                    
                </ul>

            </nav>
        </div>

    )
}