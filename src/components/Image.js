import React from 'react';
import { FaHeart, FaRegHeart,FaCartPlus,FaShoppingCart} from 'react-icons/fa';
import PropTypes from 'prop-types'


export default function Image({className,img,id,toggleFavorite,addImageToCart,removeImageFromCart}) {
  const [hoverState,setHoverState] = React.useState(false);
  const [favorited,setFavorited] = React.useState(false);
  const [inCart,setInCart] =React.useState(0);

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

      {inCart && <FaShoppingCart className="cart" onClick={()=>{setInCart(false); removeImageFromCart()}}/>}

      {hoverState && !inCart && <FaCartPlus className="cart" onClick={()=>{setInCart(true); addImageToCart()}}/>}

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