import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {fullContext} from './Context.js'

function CartItem({item}){
  const {removeImageFromCart} = React.useContext(fullContext)

  return (
    <div className='cart-item'>
      <AiOutlineDelete
        onClick={()=>removeImageFromCart(item)} />
      <img src={item.url} alt={item.url} width="130px" />
      <p>{`\$${item.price}`}</p>
    </div>
  )
}

export default CartItem;