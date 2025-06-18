import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
import Menu from './Components/MenuPages/Menu/Menu.jsx'; 
import Products from './Components/MenuPages/Menu/Products.jsx'; 
import About from './Components/MenuPages/Menu/About.jsx'
import Resources from './Components/MenuPages/Menu/Resources.jsx';
import Investor from './Components/MenuPages/Menu/Investor.jsx';
import Search from './Components/MenuPages/SearchBar/Search.jsx'

function App() {

  return (
    <>
      <Header />   {/* Always render Header */}
      <Routes>

        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/search" element={<Search />} />
      </Routes>
         <Footer/> {/* Always render Footer */}
    </>
  );
}

export default App;