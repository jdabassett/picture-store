import React from 'react';

export default function Image({className,img,id}) {
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} alt={id} className="image-grid"/>
    </div>
  )
}