import { Logo } from "./Logo/Logo";
import '../Nav/navBar.scss'
import { Link } from "react-router-dom";
import { CartWidget } from "../../Shop/CartWidget";

export const Navbar = () => {

    return (

        <div className="navBar">
            <div className="imgBanner"><img src="../imgs/bannerFondo.png"></img></div>

            <Logo />
            <nav>
                
                    <ul className="ul__menu">
                        <li className="li-desp"> <Link to='/nosotros'>Sobre Nosotros</Link>
                            <ul className="nav-desp">
                                <li>  <Link to='/nosotros/equipos.js'>Equipos <hr></hr></Link></li>
                                <li> <Link to='/nosotros/provincias.js'>Provincias Asociadas</Link></li>
                            </ul>
                        </li>

                        <li className="li-desp" ><Link to='/reglamentos'>Reglamentos</Link></li>

                        <li className="li-desp"><Link to='/torneos'>Torneos</Link>
                            <ul className="nav-desp">
                                <li> <Link to='/nosotros/estadisticas'>Estadisticas</Link></li>
                            </ul>
                        </li>

                        <li className="li-desp"> <Link to='/internacional'>Internacional</Link> </li>

                        <li className="li-desp"><Link to='/shop'>Shop</Link>
                            <ul className="nav-desp">
                                <li><Link to='/shop/indumentaria'>Indumentaria <hr></hr></Link></li>
                                <li><Link to='/shop/material'>Material Deportivo <hr></hr></Link></li>
                                <li><Link to='/shop/accesorios'>Accesorios</Link></li>

                            </ul>

                        </li>
                        <CartWidget />

                    </ul>
                
            </nav>
        </div>

    )
}