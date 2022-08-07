import './App.css';
import { useContext, createContext } from 'react';
import Nav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'

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
            <Route path='/cart' element={<h1>CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
        
      
    </div>
  );
}

export default App;