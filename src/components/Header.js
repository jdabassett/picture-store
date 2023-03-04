import React from 'react';
import {BsCart,BsCartFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {fullContext} from './Context.js'

export default function Header() {
  const {cartArray} = React.useContext(fullContext);


  const cartStatus = (cartArray.length>0)?<BsCartFill className="ri-fw ri-2x"/>:<BsCart className="ri-fw ri-2x" />
    
    
  // console.log(cartStatus)
  // console.log(cartArray)

  return (
    <header>
      <Link to="/"><h2>Pic Some</h2></Link>
      <Link to="/cart">{cartStatus}</Link>
    </header>
  )
}