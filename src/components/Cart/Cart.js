import './Cart.css';
import {useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)  

    if(totalQuantity===0){
        return(<h2>No hay productos en el carrito</h2>)
    }

    return(
        <div className="contenedor_cartas">
            <h1 className="titulo">Tu Compra:</h1>
            {cart.map(product => 
                <ItemCart key={product.id} {...product}/>)}
            <div>
                <h3 className='monto_total'>Total: ${total}</h3>   
                <button className='limpiar_carrito' onClick={()=> clearCart()}>Limpiar</button>     
                <Link to='/checkout' className='link'>
                <button className='limpiar_carrito'>Comprar</button>
                </Link>            
            </div>
        </div>
        )
}

export default Cart