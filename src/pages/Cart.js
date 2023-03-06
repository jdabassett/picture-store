import React from 'react';
import {fullContext} from '../components/Context.js'
import CartItem from '../components/CartItem.js'

export default function Cart() {
  const {cartArray,cartTotal} = React.useContext(fullContext);

  const Elements = cartArray.map(item => <CartItem key={item.id} item={item}/>)

  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {Elements}
      <p className="total-cost">{`Total: $${cartTotal}`}</p>
            <div className="order-button">
                <button>Place Order</button>
      </div>
    </main>
  )
}