import React from 'react'

const fullContext = React.createContext();



export default function ContextProvider(props) {
  // const [preliminaryArray,setPreliminaryArray] = React.useState([]);
  const [photoArray,setPhotoArray] = React.useState([]);
  const [cartArray,setCartArray] = React.useState([]);

  React.useEffect(()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=>res.json()) 
    .then(data => setPhotoArray(data.map(item => ({...item,inCart:false}))))
    .catch((err)=>console.log(err))
  },[])

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
    console.log('removeImageFromCart')
    setPhotoArray(prevArray => prevArray.map(item => ({...item,inCart:(item.id===obj.id)?false:item.inCart})))
  }

  React.useEffect(()=>{
    setCartArray(photoArray.filter(item => item.inCart===true))
  },[photoArray])

  console.log(cartArray)
  // console.log(photoArray)

  return (
    <fullContext.Provider 
      value={{
          photoArray:photoArray,
          cartArray:cartArray,
          toggleFavorite:toggleFavorite,
          addImageToCart:addImageToCart,
          removeImageFromCart:removeImageFromCart
          }}>
        {props.children}
    </fullContext.Provider>
  )

}


export {fullContext};


