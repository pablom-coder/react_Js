import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget =()=> {

    const  { getQuantity, totalQuantity } = useContext(CartContext)

    //const quantity = getQuantity()


    return(
        <Link to='/cart' className="carrito">
            <img src="/images/cart.svg" alt='cart' className='CarritoImg'/>
            {totalQuantity}
        </Link>
    );
}
export default CartWidget;