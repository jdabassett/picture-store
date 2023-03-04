import React from 'react';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import {BsCart,BsCartFill} from 'react-icons/bs'
import PropTypes from 'prop-types'


export default function Image({className,img,id,toggleFavorite,addImageToCart,removeImageFromCart}) {
  const [hoverState,setHoverState] = React.useState(false);
  const [favorited,setFavorited] = React.useState(img.isFavorite);
  const [inCart,setInCart] =React.useState(img.inCart);

  return (
    <div       
      className={`${className} image-container`}
      onMouseEnter={()=>setHoverState(true)}
      onMouseLeave={()=>setHoverState(false)}>

      <img 
        src={img.url} 
        alt={id} 
        className="image-grid"/>

      {favorited && <FaHeart className="favorite" onClick={()=>{setFavorited(false);toggleFavorite(id,false)}}/>}
       
      {hoverState && !favorited && <FaRegHeart className="favorite" onClick={()=>{setFavorited(true);toggleFavorite(id,true)}}/>}

      {inCart && <BsCartFill className="cart" onClick={()=>{setInCart(false); removeImageFromCart()}}/>}

      {hoverState && !inCart && <BsCart className="cart" onClick={()=>{setInCart(true); addImageToCart()}}/>}

    </div>
  )
}

Image.propTypes ={
  className: PropTypes.string ,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool}) ,
  id:PropTypes.string.isRequired ,
  toggleFavorite:PropTypes.func.isRequired,
}