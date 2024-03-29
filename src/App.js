import './App.css';
import Nav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi Ap"/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Estamos filtrando"/>}/>
            <Route path='/cart' element={<Cart greeting="Mostrando carrito"/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
        
      
    </div>
  );
}

export default App;