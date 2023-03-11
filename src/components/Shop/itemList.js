import { Item } from "./item"

export const ItemList = ({ productos }) => {

    return (

        <div className="itemList">
            <h1>Shop</h1>
            {productos.map((prod) => <Item key={prod.id} {...prod} />)}

        </div>


    )
}