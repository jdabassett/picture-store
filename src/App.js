
import React from 'react'
import './App.css';
// import { FaHeart, FaRegHeart} from 'react-icons/fa';
// import {AiOutlinePlusCircle, AiFillPlusCircle,AiOutlineShoppingCart} from 'react-icons/ai'
// import {ImCancelCircle} from 'react-icons/im'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart.js'
import Photos from './pages/Photos.js'




export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}


