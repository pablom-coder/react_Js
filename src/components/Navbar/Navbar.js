import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Nav =()=>{
    return(
        <nav className='nav'>
             <ul className='menu'>
                <li className='logo'><img src="../images/logo192.png" className="img_logo"></img>
                F A R M A R E D</li>
                <li className='item'>
                    <Link to="/">Inicio</Link>
                </li>
                <li className='item'>
                <Link to="/category/Cuidado%20Personal">Cuidado Personal</Link>
                </li>
                <li className='item'>
                <Link to="/category/Dermocosmetica">Dermocosmetica</Link>
                </li>
                <li className='item'>
                <Link to="/category/Hogar%20y%20Limpieza">Hogar y Limpieza</Link>
                </li> 
            </ul>             
            <CartWidget/>
        </nav>
    )
}

export default Nav;