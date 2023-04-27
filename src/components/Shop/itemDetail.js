import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import { ItemCount } from "./itemCount"


export const ItemDetail = ({ id, precio, stock, nombre, img, categoria }) => { // VISTA DEL DETALLE Y CONTROL DE ESTADO DE CANTIDAD
    const [cantidad, setCantidad] = useState(0)


    const { agregarAlCarrito, isInCart } = useContext(CartContext)



    /* creo estado para controlar la cantidad*/
    const handleAgregar = () => {
        if (cantidad === 0) return //early return, se utiliza para los casos de excepcion para q no suceda nada 

        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }
            //handle para agregar uno con las propiedades del objeto

            agregarAlCarrito(addItem)
        }
    }

    return (

        <div className="cardList">

            <h3 id="cardTitle">{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{"$" + precio}</p>
            <p>{"Stock: " + stock}</p>

            {
                isInCart(id) ? <Link to="/cart" className="termComp">
                    Finalizar mi compra
                </Link>
                    :
                    <>
                        <ItemCount //el componente rederizado que tiene las funciones de sumar y restar cantidades
                            max={stock}// el max del componente se reemplaza x stock
                            counter={cantidad} //el compenente tiene un estado llamado counter, se reemplaza por cantidad
                            setCounter={setCantidad} // el counter se reemplaza con el setteo de la cantidad
                        />

                        <button className="btnAgregar" onClick={handleAgregar} disabled= {cantidad === 0}> Agregar al carrito</button>
                    </>
            }
        </div>


    )
}

