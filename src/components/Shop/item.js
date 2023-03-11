import { Link } from "react-router-dom"


export const Item = ({ id,precio, stock, nombre, img }) => {

    return (

        <div className="cardList">
            <h3 id="cardTitle">{nombre}</h3>
            <p>{"$" + precio}</p>
            <p>{"Stock: " + stock}</p>
            <Link to={`/detail/${id}`}>
            <button> Ver mas </button>
            </Link>
            
  
        </div>


    )
}