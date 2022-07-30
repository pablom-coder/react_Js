import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Nav =()=>{
    return(
        <nav className='nav'>
             <ul className='menu'>
                <li className='logo'><img src="logo192.png" className="img_logo"></img>{/* <a href="#"></a>REACT */}</li>
                <li className='item'><a className='a' href="#">Incio</a></li>
                <li className='item'><a className='a' href="#">Cuidado Personal</a></li>
                <li className='item'><a className='a' href="#">Dermocosmetica</a></li>
                <li className='item'><a className='a' href="#">Belleza</a></li>
                <li className='item'><a className='a' href="#">Hogar y Limpieza</a></li> 
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Nav