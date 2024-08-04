import React from 'react'
import './App.css'

const Product = ({ img, name, price }) => {
    return (
        <div className='procon'>
            <img src={img} alt={name}/>
            <h4 className='name'>{name}</h4>
            <h4 className='price'>{price}</h4>
        </div>
    )
}

export default Product