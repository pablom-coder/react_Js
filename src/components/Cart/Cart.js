import './Cart.css';
import ItemCart from '../ItemCart/ItemCart'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)

    const totalQuantity=getQuantity()
    const total=getTotal()

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
            </div>
        </div>
        )
}

export default Cart
