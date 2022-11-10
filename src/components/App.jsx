import React from 'react';
import './app.css';
import Navbar from './Navbar/Navbar.jsx'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Home from './Home/Home';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <ItemListContainer greeting={"Hola!"}/>
    </div>
  );
}

export default App;
