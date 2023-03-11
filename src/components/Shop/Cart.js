import { useContext } from "react"
import { CartContext } from "./CartContext"


export const Cart = () => {

    const { cart, totalCart, vaciarCart,eliminarItem } = useContext(CartContext)

    return (
        <div>
            <h2>Compra</h2>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>$ {item.cantidad * item.precio}</p>

                        <button className="btnDelete" onClick={() => eliminarItem(item.id)}> Borrar</button>
                    </div>
                ))

            }

            <h2>Total: ${totalCart()} </h2>

            <div className="vaciarCart">
                <button className="btnVCart" onClick={vaciarCart}> Vaciar Carrito</button>
            </div>
        </div>
    )
}