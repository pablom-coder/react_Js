import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';

const ItemDetail =  ({id, name, img, category, price, description, stock}) => {

    const[quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }
    return (
        <div key={id} className="card_detalle">
            <div className="img_detalle">
                <img className="img_detalle" src={img} alt={name} />
            </div>
            <div className="texto_detalle">
                <h2>{category}</h2>
                <h3>{name}</h3>
                <h4>$ {price}</h4>
                <div className="texto_detalle_descripcion">
                    {quantity > 0 
                        ? <Link to='/cart'>Finalizar compra</Link> 
                        : <ItemCount stock={stock} initial={quantityAdded} onAdd={handleOnAdd}/>}
                </div>
                
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail