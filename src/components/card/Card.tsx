import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ash from '../../assets/ash.jpg';
import D from '../../assets/D.jpg';
import B from '../../assets/B.jpg';
import C from '../../assets/C.jpg';
import E from '../../assets/E.jpg';
import F from '../../assets/F.jpg';
import G from '../../assets/G.jpg';
import H from '../../assets/H.jpg';
import I from '../../assets/I.jpg';
import jug from '../../assets/jug.jpg';

interface CardProps {
  image: string;
  price: number;
  details: string;
}

const useStyles = makeStyles(() => ({
  cardList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gridGap: '40px',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '1480px',
    padding: '0 20px',
    marginTop: '80px',
  },
  
  card: {
    width: 220,
    height: 360,
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
    color: 'peach',
  },
  grayText: {
    color: 'gray',
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

function App() {
  const classes = useStyles();

  const data = [
{ id: 1, image: ash, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 2, image: B, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 3, image: C, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 4, image: D, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 5, image: E, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 6, image: G, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 7, image: F, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 8, image: H, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 9, image: I, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
{ id: 10, image: jug, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer' },
  ];

  return (
    <div><h1 className="title">
    <span className="peach-text">Recommended</span>
    <span className="gray-text"> items</span>
  </h1>
    <div className={classes.cardList}>
      
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          price={item.price}
          details={item.detail}
        />
      ))}
    </div></div>
  );
}

export default App;
