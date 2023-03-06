import React from 'react'

const fullContext = React.createContext();



export default function ContextProvider(props) {
  const [photoArray,setPhotoArray] = React.useState([]);
  const [cartArray,setCartArray] = React.useState(([]));
  const [cartTotal,setCartTotal] = React.useState(0);

  React.useEffect(()=>{
   
      fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      .then(res=>res.json()) 
      .then(data => setPhotoArray(data.map(item => ({...item,price:2.49}))))
      .catch((err)=>console.log(err))

      // setCartArray(JSON.parse(localStorage.getItem("cartArray")))

  },[setPhotoArray,setCartArray])

  React.useEffect(()=>{
    
    setCartTotal((cartArray.reduce((a,b)=>{return a+b.price},0 )).toFixed(2))

    // localStorage.setItem("cartArray",JSON.stringify())
    
  },[cartArray,setCartTotal])



  function toggleFavorite(id,bool) {
    // console.log('toggleFavorite')
    setPhotoArray(prevArray => 
        prevArray.map(
          item=>({...item,isFavorite:(item.id===id?bool:item.isFavorite)})))
  }

  function addImageToCart(obj) {
    // console.log('addImageToCart')
    if (!cartArray.includes(obj)){
        setCartArray(prevArray=>([...prevArray,obj]))}
    setPhotoArray(prevArray => prevArray.map(item =>({...item,inCart:(item.id===obj.id)?true:null})))
  }

  function removeImageFromCart(obj) {
    // console.log('removeImageFromCart')
    setCartArray(prevArray => prevArray.filter(item => item.id!==obj.id))
    setPhotoArray(prevArray => prevArray.map(item =>({...item,inCart:(item.id===obj.id)?false:null})))
  }

  function clearCart() {
    setCartArray([])
    setPhotoArray(prevArray => prevArray.map(item => ({...item,inCart:null})))
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
          removeImageFromCart:removeImageFromCart,
          clearCart:clearCart
          }}>
        {props.children}
    </fullContext.Provider>
  )

}


export {fullContext};


