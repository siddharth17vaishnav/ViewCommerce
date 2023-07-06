import React from 'react';

interface CardProps {
  image: string;
  price: number;
  details: string;
}

const Card: React.FC<CardProps> = ({ image, price, details }) => {
  return (
    <div className="card">
      <img src={image} alt="Product" className="card-image" />
      <div className="card-details">
        <div className="card-price">{price}</div>
        <div className="card-description">{details}</div>
      </div>
    </div>
  );
};

export default Card;
