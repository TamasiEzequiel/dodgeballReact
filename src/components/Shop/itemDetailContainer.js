import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './itemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';


export const ItemDetailContainer = () => { //detalle producto

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)


    const { itemId } = useParams()


    useEffect(() => {

        setLoading(true)

        //FIREBASE UTILIZANDO METODO DOC
        //Referencia
        const docRef = doc(db, "productos", itemId) //compuesto por base de datos, la coleccion q consulto,por ultimo el documento
        //peticion
        getDoc(docRef)

            .then((doc) => {

                setItem({ id: doc.id, ...doc.data() })
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div>
            {
                loading ?
                    <h2>Cargando...</h2> : <ItemDetail {...item} />
            }
        </div>
    )


}