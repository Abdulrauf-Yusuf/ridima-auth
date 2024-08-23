import React from 'react';
import './Cards.css';

const Cards = ({ title, image, bgColor }) => (
  <div className="trade-cards" style={{backgroundColor: bgColor}}> 
    <h3>{title}</h3>
    <img src={image} alt={title} />
  </div>
);

export default Cards;


