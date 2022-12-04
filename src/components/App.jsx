import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from './Navbar/Navbar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import { CartContextProvider } from '../context/CartContext';
import Checkout from './Checkout/Checkout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
