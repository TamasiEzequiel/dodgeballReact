import { async } from "@firebase/util"
import { addDoc, collection, doc, documentId, getDoc, getDocs, query, Timestamp, updateDoc, where, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { db } from "../../firebase/config"
import { CartContext } from "./CartContext"



export const Checkout = () => {

    const { cart, totalCart, vaciarCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    // envio de orden realizada a firebase
    const generarOrden = async () => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders") // se usa el collection y se pasa nombre de base de datos y luego la coleccion
        const productosRef = collection(db, "productos")
         
        //referncia
       const q = query(productosRef, where(documentId(), "in", cart.map((el) => el.id))) //trae los documentos de esa collecion q coincidan con los q estane n carrito
        // en el whrer indico q me traiga los docimentos de este id (documentId()) "in" este array (car.map etc....)
        const productos = await getDocs(q) //resolucion de promesa
        const outOfStock = []

        productos.docs.forEach((doc) => { // recorro elcont de firebase
            const item = cart.find((el) => el.id === doc.id) //armo la referncia del item del carrito
        
            if(doc.data().stock >= item.cantidad ){ // si hay misma o mas cantidad
                batch.update(doc.ref,{ //actualizo firebase
                    stock: doc.data().stock - item.cantidad //con esta info
                })
            } else {
                outOfStock.push(item) //sino agrego este item en "fuera de stock"
            }
            
        })
    
        if(outOfStock.length === 0){
            addDoc(ordersRef, orden)
                .then((doc) =>{
                    batch.commit() //subo la info
                    setOrderId(doc.id)
                    vaciarCart()
                })
            
        } else{
            alert("Hay items sin stock")
        }
    
    }


    const [values, setValues] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        generarOrden()

    }

    if (orderId){
        return(
            <>
                <h2> Gracias por tu compra</h2>
                <h3>Tu numero de orden es: {orderId}</h3>
                <Link to="/shop" className="btnReturn"> Volver </Link>
            </>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit}>
                <input
                    className="txtIngreso"
                    type='text'
                    placeholder='Nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />

                <input
                    className="emailIngreso"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />

                <input
                    className="emailIngreso"
                    type='tel'
                    placeholder="Tu telefono"
                    value={values.telefono}
                    onChange={handleInputChange}
                    name='telefono'
                />


                <button type="submit" className="btnEnviar">
                    Enviar
                </button>
            </form>
        </div>
    )

}



// Ejemplo para actualizar docs sin tener q controlar cambios en el momento
/*
addDoc (ordersRef, orden) // agrego la orden
.then((resp) => {

        cart.forEach((item) => { //recorro el carrito
            const docRef = doc(db, 'productos', item.id) // armo la referencia por cada item del carrito
            getDoc(docRef) //traigo el doc de la base de datos para tener los valores y campos actuales
                .then((dbDoc) => {
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad}) //con eso actualizo y cambio lo q quiero
                })     // en este caso se actualiza con el stcok actual q obtengo del .data() (lo q esta en la base de datos)y le resto la cantidad del item de mi carrito           
        })

    setOrderId(resp.id)
    vaciarCart()
})

.catch((err) => {
    console.log(err)
})*/