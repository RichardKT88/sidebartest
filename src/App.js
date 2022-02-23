import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Product from './pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home/>} />
          <Route path='/reports' component={<Report/>} />
          <Route path='/products' component={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
