import React from 'react';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import {AiOutlinePlusCircle, AiFillMinusCircle} from 'react-icons/ai'


export default function Image({className,img,id,toggleFavorite}) {
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

      {hoverState && favorited && <FaHeart className="favorite" onClick={()=>{setFavorited(false);toggleFavorite(id,false)}}/>}
       
      {hoverState && !favorited && <FaRegHeart className="favorite" onClick={()=>{setFavorited(true);toggleFavorite(id,true)}}/>}

      {hoverState && inCart && <AiFillMinusCircle className="cart" onClick={()=>setInCart(false)}/>}

      {hoverState && !inCart && <AiOutlinePlusCircle className="cart" onClick={()=>setInCart(true)}/>}

    </div>
  )
}