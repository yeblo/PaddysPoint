
import React from 'react';
import Home from './components/home'
import About from './components/about';
import Location from './components/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Products from './components/allProducts';
import Product from './components/products';
// import './Main.css';
function App() {
  return (
    <React.Fragment>
      <Router>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route exact path='/location'  element={<Location/>}/>
        <Route exact path='/menu' element={<Product/>}/> 
      </Routes>
      </Router>
    </React.Fragment>
  
  );
}

export default App;
