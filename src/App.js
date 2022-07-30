import './App.css';
import Nav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <ItemListContainer greeting="Bienvenidos a mi Ap"/>
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
