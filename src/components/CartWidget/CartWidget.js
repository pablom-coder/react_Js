import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget =()=> {

    const  { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className="carrito">
            <img src="/images/cart.svg" alt='cart' className='CarritoImg'/>
            {totalQuantity}
        </Link>
    );
}
export default CartWidget;