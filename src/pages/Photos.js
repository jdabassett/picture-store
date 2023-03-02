import React from 'react'
import Image from "../components/Image.js"
import {fullContext} from '../components/Context.js'
import {getClass} from '../utils/index'

export default function Photos() {
  const {photoArray} = React.useContext(fullContext);

  // console.log(photoArray)

  const images = photoArray.map((item,index) => (
    <Image 
      key={item.id} 
      id={item.id} 
      img={item}
      className={getClass(index)}
       />
  ))

  // console.log(images)

  return (
    <main className="photos">
      {/* <h1>Images go here</h1> */}
      {images}
    </main>

  )
}