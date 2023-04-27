import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./itemList"
import {db} from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
//import { getStorage, ref } from "firebase/storage";//

export const ItemListContainer = () => { //listado productos

    let [productos, setProductos] = useState([])
    let [loading, setLoading] = useState(false)

      const { catId } = useParams()

    useEffect(() => {
        setLoading(true)

       //FIREBASE
       const productosRef =  collection(db, 'productos') //Armo referencia
       // armo el query d busqueda, primero paso la coleccion, dsp en el where x q filtro (ctegoria), la comparacion y dsp con quien comparo)
       const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef // comparo para q muestre con o sin filtrado
       
      /* const storage = getStorage();//
       const storageRef = ref(storage, `/imagesShop/${q}`);//directo a carpeta
       //const fileName= storageRef 
       //const nameStorage = ref(storageRef, fileName)

       console.log(storageRef)
       //console.log(fileName)
*/
        getDocs(q)// pido datos
        .then((resp) => {
            setProductos(resp.docs.map((doc) => {
                return {
                    id:doc.id,
                    ...doc.data()
                }

        }))
        })
        .finally(() => {
            setLoading(false)
        })

    }, [catId])

    return (
        <>
            {
                loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />

            }

        </>
    )
}
