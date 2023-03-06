import React from 'react';
import {fullContext} from '../components/Context.js'
import CartItem from '../components/CartItem.js'

export default function Cart() {
  const {cartArray,cartTotal,clearCart} = React.useContext(fullContext);
  const [buttonText,setButtonText] = React.useState("Place Order");

  // console.log(buttonText)

  function handlerOrdering() {
    setButtonText("Ordering...");
    setTimeout(()=>{setButtonText("Place Order"); clearCart()},3000);
  }

  const Elements = cartArray.map(item => <CartItem key={item.id} item={item}/>)

  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {Elements}
      <p className="total-cost">{`Total: $${cartTotal}`}</p>
            <div className="order-button">
            {cartArray.length>0?<button onClick={handlerOrdering}>{buttonText}</button>:null}
      </div>
    </main>
  )
}