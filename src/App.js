import './App.css';
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer greeting={'Hola'}/>
    </div>
  );
}

export default App;
