import React from 'react';
import {fullContext} from '../components/Context.js'

export default function Cart() {
  const {cartArray} = React.useContext(fullContext);

  const Elements = cartArray.map(item => <p>{item.id}</p>)

  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {Elements}
    </main>
  )
}