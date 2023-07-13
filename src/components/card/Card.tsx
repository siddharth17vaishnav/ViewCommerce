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
import CardInterface from '../card/Cardinterface';

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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const CardList = () => {
  const classes = useStyles();

  const data = [
    { id: 1, image: ash, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product1' },
    { id: 2, image: B, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product2' },
    { id: 3, image: C, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product3' },
    { id: 4, image: D, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product4' },
    { id: 5, image: E, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product5' },
    { id: 6, image: G, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product6' },
    { id: 7, image: F, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product7' },
    { id: 8, image: H, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product8' },
    { id: 9, image: I, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product9' },
    { id: 10, image: jug, price: 600, detail: 'Lorem ipsum dolor sit amet, consectetuer', buttonText: 'Buy Now', product: 'product10' },
  ];

  return (
    <div>
      <h1 className="title">
        <span className="peachText">Recommended</span>
        <span className="grayText"> items</span>
      </h1>
      <div className={classes.cardList}>
        {data.map((item) => (
          <CardInterface
            key={item.id}
            image={item.image}
            price={item.price}
            details={item.detail}
            buttonText={item.buttonText}
            product={item.product}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
