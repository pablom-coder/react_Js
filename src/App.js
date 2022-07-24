import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <ItemListContainer greeting="Bienvenidos a mi App"/>

      </header>
    </div>
  );
}

export default App;
