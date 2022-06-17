import React from 'react'
import "./productList.css"
import Product from '../product/Product'
import  {products} from "../../data"
const ProductList = () => {
    let data=products
    // console.log(data,"lllllllllllllll");
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">
                Create & inspire. It's Ankit
                </h1>
                <p className="pl-desc">
                    Ankit is a creative portfolio that your work has been waiting 
                    for Beautiful homes, stunning styles  & a whole loa more awaits inside.
                </p>
            </div>
            <div className="pl-lists">
          {data.map((item)=>(
             <Product img={item?.img}/>
          ))}
            </div>
        </div>
    )
}

export default ProductList