import React from 'react'
import './RateCard.css'

export default function RateCard({image, title, price}) {
  return (
    <div className='rate-container'>
        <div className='rate-img'>
            <img src={image} alt={title} />
        </div>
        <div className='rate-content'>
              <span>{title}</span>   <br />
              <span>{"₦" + price}</span>  
        </div>
    </div>
  )
}
