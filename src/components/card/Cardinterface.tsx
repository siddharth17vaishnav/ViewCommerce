import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface CardProps {
  image: string;
  price: number;
  details: string;
}

const useStyles = makeStyles(() => ({
 
  card: {
    width: '220px',
    height: '360px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },
  cardImage: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
  },
  cardDetails: {
    textAlign: 'center',
    margin: 0,
    padding: 10,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    margin: 0,
    padding: 10,
  },
  peachText: {
    color: 'orange', 
  },
  grayText: {
    color: 'gray', // Updated color value
  },
}));

const Card: React.FC<CardProps> = ({ image, price, details }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img src={image} alt="Product" className={classes.cardImage} />
      <div className={classes.cardDetails}>
        <div className={classes.cardPrice}>{price}</div>
        <div className={classes.cardDescription}>{details}</div>
      </div>
    </div>
  );
};

export default Card;
