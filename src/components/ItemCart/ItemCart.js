import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemCart = ({id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext)

    const handleRemover = (id) =>{
        removeItem(id)
    }

    return (
        <div key={id} className="card_cart">
            <div className="text">
                <h4 className="item_carrito_nombre">{name}</h4>
                <h4 className="item_carrito">{price} $</h4>
                <h4 className="item_carrito">Cantidad: {quantity}</h4>
                <h4 className="item_carrito">SubTotal: {price * quantity}</h4>
            </div>
            <div>
                <button className="button_cart" onClick={()=> handleRemover(id)}>Quitar</button>
            </div>            
        </div>
    )
}

export default ItemCart