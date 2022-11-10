import React from 'react';
import './app.css';
import Navbar from './Navbar/Navbar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemList from './ItemList/ItemList';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
