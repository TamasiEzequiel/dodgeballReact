import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"


export const Cart = () => { //VISTA CARRITO

    const { cart, totalCart, vaciarCart,eliminarItem } = useContext(CartContext)

    return (
        <div>
            <h2>Compra</h2>

            {
                cart.map((item) => (
                    <div className="cardCart" key={item.id}>
                        <img src={item.img}/>
                        <h4 id="cardCartTittle">{item.name}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>$ {item.cantidad * item.price}</p>

                        <button className="btnDelete" onClick={() => eliminarItem(item.id)}> Borrar</button>
                    </div>
                ))

            }

            <h2>Total: ${totalCart()} </h2>

            <div className="vaciarCart">
                <button className="btnVCart" onClick={vaciarCart}> Vaciar Carrito</button>
                <Link  to="/checkout" className="btnTcompra"> Terminar compra</Link>
            </div>
        </div>
    )
}