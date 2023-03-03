import React from 'react'

const fullContext = React.createContext();



export default function ContextProvider(props) {
  const [photoArray,setPhotoArray] = React.useState([]);

  React.useEffect(()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=>res.json()) 
    .then(data => setPhotoArray(data))
    .catch((err)=>console.log(err))
  },[])

  // console.log(photoArray)

  function toggleFavorite(id,bool) {
    setPhotoArray(prevArray => 
        prevArray.map(
          item=>({...item,isFavorite:(item.id===id?bool:item.isFavorite)})))
  }

  // console.log(photoArray)

  return (
    <fullContext.Provider 
      value={{photoArray:photoArray,toggleFavorite:toggleFavorite}}>
        {props.children}
    </fullContext.Provider>
  )

}


export {fullContext};


