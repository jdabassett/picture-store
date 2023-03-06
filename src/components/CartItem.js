import React from 'react'
import {AiOutlineDelete,AiFillDelete} from 'react-icons/ai'
import {fullContext} from './Context.js'
import PropTypes from 'prop-types'

function CartItem({item}){
  const {removeImageFromCart} = React.useContext(fullContext)
  const [hover,setHover] =React.useState(false)

  return (
    <div className='cart-item'
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      >

      {hover?
      <AiFillDelete
      onClick={()=>removeImageFromCart(item)} />:
      <AiOutlineDelete/>}

      <img src={item.url} alt={item.url} width="130px" />
      <p>{`$${item.price}`}</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
      url: PropTypes.string.isRequired
  })
}

export default CartItem;