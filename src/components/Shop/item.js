import { Link } from "react-router-dom"


export const Item = ({ id,precio, stock, nombre, img }) => { //DESCRIPCION ITEM
    return (

        <div className="cardList">
             <img src={img}/>
            <h3 id="cardTitle">{nombre}</h3>
            <p>{"$" + precio}</p>
            <p>{"Stock: " + stock}</p>
            <Link to={`/detail/${id}`}>
            <button className="btn-vermas"> Ver mas </button>
            </Link>
            
  
        </div>


    )
}