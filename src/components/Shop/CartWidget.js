import { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const { cantidadCart, cart } = useContext(CartContext) // aca le digo q consuma la prop cantidadCart del cartcontext

    return (

        <Link to="/cart" className={cart.length === 0 ? 'cartWidget cartHidden' : 'cartWidget'}>
            <BsCart />
            <span>{cantidadCart()}</span>
        </Link>

    )
}