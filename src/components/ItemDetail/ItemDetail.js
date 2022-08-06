import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {

    const[quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        alert("Cantidad de productos agregados " + quantity)
        setQuantity(quantity)
    }

    return (
        <div key={product.id} className="card_detalle">
            <div className="img_detalle">
                <img className="img_detalle" src={product.img} alt={product.name} />
            </div>
            <div className="texto_detalle">
                <h2>{product.category}</h2>
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>
                <div className="texto_detalle_descripcion">
                    {quantity >0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount stock={product.stock} initial={0} onAdd={handleOnAdd}/>}
                </div>
                
                <p>{product.description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail