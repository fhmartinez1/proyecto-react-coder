import React from 'react';
import './app.css';
import Navbar from './Navbar/Navbar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Hola!"}/>
    </div>
  );
}

export default App;
