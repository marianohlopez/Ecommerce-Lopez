import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='contact' element={<div>Contact</div>}></Route>
            <Route path='detail/:id' element={<ItemDetailContainer />}/>
            <Route path='category/:categoryName' element={<ItemListContainer />}/>
            <Route path='cart' element={<Cart />}></Route>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
