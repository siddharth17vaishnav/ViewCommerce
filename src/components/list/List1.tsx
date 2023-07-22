import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/system";
import Category from "./category";
import Nextpage from "./Nextpage";



const Container = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-right: 250px;
  @media (max-width: 1205px) {
    margin-right: 0;
    
  }
`;

const ProductCard = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  height: auto;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  padding: 2rem; /* Updated padding value */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: row;
    height: 280px;
  }
`;

const ProductImage = styled("img")`
  max-width: 40%;
  object-fit: cover;
  border-radius: 7.15px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProductContent = styled("div")`
  flex: 1;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



const ProductTitle = styled("div")`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled("div")`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProductRating = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const RatingIcon = styled(StarIcon)`
  font-size: 1.25rem;
  color: #f9a602;
  margin-right: 0.25rem;
`;

const RatingOrders = styled("div")`
  font-size: 1.25rem;
  color: #0d6efd;
  margin-left: 12px;
`;

const ProductShipping = styled("div")`
  font-size: 1.25rem;
  color: #00b517;
  margin-left: 12px;
`;

const ProductDescription = styled("div")`
  font-size: 1rem;
  color: #505050;
  margin-bottom: 0.5rem;
`;

const ProductDetails = styled("div")`
  font-size: 1rem;
  color: #0d6efd;
`;

const WishlistIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #f50057;
  font-size: 1.5rem;
  cursor: pointer;
`;

interface ProductProps {
  title: string;
  price: string;
  rating: number[];
  orders: number;
  shipping: string;
  description: string;
  imageSrc: string;
}

const Product: React.FC<ProductProps> = ({
  title,
  price,
  rating,
  orders,
  shipping,
  description,
  imageSrc,
}) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <ProductCard>
      <WishlistIcon
        style={{ color: isWishlist ? "#f50057" : "lightgrey" }}
        onClick={handleWishlistClick}
      />
      <ProductImage alt="" src={imageSrc} />
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
        <ProductRating>
          {rating.map((_, index) => (
            <RatingIcon key={index} />
          ))}
          <StarBorderIcon />
          <RatingOrders>{orders} orders</RatingOrders>
          <ProductShipping>{shipping}</ProductShipping>
        </ProductRating>
        <ProductDescription>{description}</ProductDescription>
        <ProductDetails>
          <a href="#">View details</a>
        </ProductDetails>
      </ProductContent>
    </ProductCard>
  );
};

const ProductList: React.FC = () => {
  const products: ProductProps[] = [
    {
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "RS 80000",
      rating: [1, 2, 3, 4],
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      imageSrc: "src/assets/p1.jpg",
    },
    {
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "RS 80000",
      rating: [1, 2, 3, 4],
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      imageSrc: "src/assets/p2.jpg",
    },
    {
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "RS 80000",
      rating: [1, 2, 3, 4],
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      imageSrc: "src/assets/p3.jpg",
    },
    {
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "RS 80000",
      rating: [1, 2, 3, 4],
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      imageSrc: "src/assets/p4.jpg",
    },
    {
      title: "GoPro HERO6 4K Action Camera - Black",
      price: "RS 80000",
      rating: [1, 2, 3, 4],
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      imageSrc: "src/assets/p5.jpg",
    },
    
  ];

  return (
    <Container>
      <Category />
      <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end", // To stick Nextpage to the right side
          paddingTop: "20px",     // Add 20px padding from the top
          paddingRight: "20px",   // Add 20px padding from the right
        }}>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
         <Nextpage />
      </div>
     
    </Container>
    
  );
};

export default ProductList;
