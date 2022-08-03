import './App.css';
import Nav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi Ap"/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Estamos filtrando"/>}/>
        </Routes>
      </BrowserRouter>
        
      
    </div>
  );
}

export default App;
