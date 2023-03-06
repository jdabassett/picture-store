import React from 'react'

const fullContext = React.createContext();



export default function ContextProvider(props) {
  // const [preliminaryArray,setPreliminaryArray] = React.useState([]);
  const [photoArray,setPhotoArray] = React.useState((JSON.parse(localStorage.getItem('photoArray')) || []));
  const [cartArray,setCartArray] = React.useState((JSON.parse(localStorage.getItem("cartArray"))||[]));
  const [cartTotal,setCartTotal] = React.useState(0);

  React.useEffect(()=>{
      fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then(res=>res.json()) 
      .then(data => setPhotoArray(data.map(item => ({...item,inCart:false,price:2.49}))))
      .catch((err)=>console.log(err))
    
  },[])

  React.useEffect(()=>{
    let newCart = photoArray.filter(item => item.inCart===true)
    setCartArray(newCart)
    setCartTotal(newCart.reduce((a,b)=>{return a+b.price},0 ))
    localStorage.setItem('photoArray',JSON.stringify(photoArray))
    localStorage.setItem("cartArray",JSON.stringify(cartArray))
  },[photoArray,cartArray])

  function toggleFavorite(id,bool) {
    // console.log('toggleFavorite')
    setPhotoArray(prevArray => 
        prevArray.map(
          item=>({...item,isFavorite:(item.id===id?bool:item.isFavorite)})))
  }

  function addImageToCart(obj) {
    // console.log('addImageToCart')
    setPhotoArray(prevArray => prevArray.map(item => ({...item,inCart:(item.id===obj.id)?true:item.inCart})))
  }

  function removeImageFromCart(obj) {
    // console.log('removeImageFromCart')
    setPhotoArray(prevArray => prevArray.map(item => ({...item,inCart:(item.id===obj.id)?false:item.inCart})))
  }

  // console.log(cartTotal)
  // console.log(cartArray)
  // console.log(photoArray)

  return (
    <fullContext.Provider 
      value={{
          photoArray:photoArray,
          cartArray:cartArray,
          cartTotal:cartTotal,
          toggleFavorite:toggleFavorite,
          addImageToCart:addImageToCart,
          removeImageFromCart:removeImageFromCart
          }}>
        {props.children}
    </fullContext.Provider>
  )

}


export {fullContext};


