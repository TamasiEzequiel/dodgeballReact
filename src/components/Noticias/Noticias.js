import { useEffect, useState } from "react"
import noticias from './noticias.json'


export const Noticias = () => {

    let [noti, setNoti] = useState([])

    const newsPromise = (data) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                return res(data)
            }, 0)
        })
    }

    useEffect(() => {
        newsPromise(noticias)

            .then(result => {
                setNoti(result)
            })
    }, [])

    return (

        <div className="cardNews">

            {noti.map((news) => (

                <div className="cardNewsB">
                    <h3 id="title-card"> {news.titulo}</h3>
                    <p>{news.contenido}</p>



                </div>
            ))}

        </div>


    )

}



