import React from 'react'
import './Card.css' 

const Card = ({name,image,price,material}) => {
  return (
    <div>
         <img src={image} alt='sample'/>
              <h2>{name}</h2>
              <p>Price : ₹{price}</p>
              <p>Material : {material}</p>
              <button class="like-btn">Add to Cart</button>
    </div>
  )
}

export default Card
