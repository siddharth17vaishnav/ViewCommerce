import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  price: number;
  details: string;
  link: string;
}

const useStyles = makeStyles(() => ({
  card: {
    width: '220px',
    height: '405px',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  buyButton: {
    marginTop: 10,
    padding: '8px 16px',
    background: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out',
    '&:hover': {
      background: '#ff7f00',
    },
  },
  peachText: {
    color: 'orange',
  },
  grayText: {
    color: 'gray',
  },
}));

const Cardinterface: React.FC<CardProps> = ({ image, price, details, link }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img src={image} alt="Product" className={classes.cardImage} />
      <div className={classes.cardDetails}>
        <div className={classes.cardPrice}>{price}</div>
        <div className={classes.cardDescription}>{details}</div>
        <Link to={link} className={classes.buyButton}>
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Cardinterface;
