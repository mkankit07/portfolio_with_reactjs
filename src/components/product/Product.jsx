import React, { useEffect, useState } from 'react'
import "./product.css"
const Product = (props) => {
  console.log(props,"lllllllllll");
  let [img ,setImg]=useState("")
  useEffect(()=>{
    setImg(props?.img)
  },[props?.img])
  return (
    <div className='p'>
    <div className="p-bro">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
    </div>
    {/* new tab Open  */}
    <a href="/" target="_blanck" rel='noreferrer'>
        <img src={img} alt=""  className='p-img'/>
        </a>
    </div>
  )
}

export default Product