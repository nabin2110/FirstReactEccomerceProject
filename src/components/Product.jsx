import React from 'react'

const Product = ({dataToSend}) => {
    const {title,price,description,image} = dataToSend
  return (
    <div className='productItem'>
        <div className="productImage">
            <img src={image} alt={title} />
        </div>
        <div>
            <h2>Product Name:{title}</h2>
            <h3>Price:{price}</h3>
        </div>
    </div>
  )
}

export default Product