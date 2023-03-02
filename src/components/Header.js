import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/"><h2>Pic Some</h2></Link>
      <Link to="/cart"><AiOutlineShoppingCart/></Link>
    </header>
  )
}