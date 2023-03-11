import { useContext } from 'react'
import {BsCart} from 'react-icons/bs'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const {cantidadCart} = useContext(CartContext) // aca le digo q consuma la prop cantidadCart del cartcontext

    return(
        <div>
            <Link to="/cart" className='cartWidget'>
            <BsCart/>
            <span>{cantidadCart()}</span>
            </Link>
        </div>
    )
}