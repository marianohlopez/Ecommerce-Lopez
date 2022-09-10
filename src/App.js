import './App.css';
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='contact' element={<div>Contact</div>}></Route>
          <Route path='detail/:id' element={<ItemDetailContainer />}/>
          <Route path='category/:categoryName' element={<ItemListContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
