import './Navbar.css'

const Nav =()=>{
    return(
        <nav className='nav'>
             <ul className='menu'>
                <li className='logo'><a href="#"></a>REACT</li>
                <li className='item'><a className='a' href="#">Incio</a></li>
                <li className='item'><a className='a' href="#">Nosotros</a></li>
                <li className='item'><a className='a' href="#">Servicios</a></li>
                <li className='item'><a className='a' href="#">Proyectos</a></li>
                <li className='item'><a className='a' href="#">Contactos</a></li> 
            </ul>
        </nav>
    )
}

export default Nav