import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import Category from "./category";
import Nextpage from "./Nextpage";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  position: relative; /* Set relative positioning to contain the category page */
  top: 40px;

  @media (max-width: 564px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuIconWrapper = styled("div")`
  position: absolute;
  top: -20px;
  left: 10px;
  z-index: 3; /* Ensure the menu icon is above other elements */
  cursor: pointer;
`;

const ProductCard = styled("div")`
  display: flex;
  flex-direction: row; 
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  min-height: 240px;
  height: auto;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: row;
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
  max-width: 60%;

  @media (max-width: 720px) {
    max-width: 100%;
    padding-left: 20;
    text-align: center;
  }
`;

const ProductTitle = styled("div")`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media (max-width: 720px) {
    font-size: 1rem;
    
  }
`;

const ProductPrice = styled("div")`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 720px) {
    font-size: 1rem;
    
  }
`;

const ProductDescription = styled("div")`
  font-size: 1rem;
  color: #505050;
  margin-bottom: 0.5rem;

  @media (max-width: 720px) {
    font-size: 0.9rem;
    
  }
`;

const ProductDetails = styled("div")`
  font-size: 1rem;
  color: #0d6efd;

  @media (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

const WishlistIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #f50057;
  font-size: 1.5rem;
  cursor: pointer;
`;
const ProductRating = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  
 
`;

const RatingIcon = styled(StarIcon)`
  font-size: 1rem;
  color: #f9a602;
  margin-right: 0.25rem;

  @media (max-width: 720px) {
    font-size: 0.85rem;
    
  }
`;

const RatingOrders = styled("div")`
  font-size: 1rem;
  color: #0d6efd;
  margin-left: 12px;

  @media (max-width: 720px) {
    font-size: 0.85rem;
  }
`;

const ProductShipping = styled("div")`
  font-size: 1rem;
  color: #00b517;
  margin-left: 12px;

  @media (max-width: 720px) {
    font-size: 0.85rem;
  }
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

const Product: React.FC<ProductProps> = ({ title, price, rating, orders,shipping, description, imageSrc }) => {
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
      <ProductRating>
          {rating.map((_, index) => (
            <RatingIcon key={index} />
          ))}
          <StarBorderIcon />
          <RatingOrders>{orders} orders</RatingOrders>
          <ProductShipping>{shipping}</ProductShipping>
        </ProductRating>
        <ProductPrice>{price}</ProductPrice>
        
        <ProductDescription>{description}</ProductDescription>
        <ProductDetails>
          <a href="#">View details</a>
        </ProductDetails>
      </ProductContent>
    </ProductCard>
  );
};

const List1 = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  const [showCategory, setShowCategory] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 564;
      setShowMenuIcon(isSmallScreen); // Show the menu icon only for small screens
      setShowCategory(!isSmallScreen); // Show the category page for large screens, hide for small screens
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the state on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCategory = () => {
    setShowCategory((prevShowCategory) => !prevShowCategory);
  };

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
      {showCategory && window.innerWidth > 564 && <Category />} {/* Show Category only on full screen */}
      {showMenuIcon && ( // Conditionally render the menu icon for screen size <= 564px
        <MenuIconWrapper onClick={toggleCategory}>
          <MenuIcon style={{ fontSize: "24px" }} />
        </MenuIconWrapper>
      )}
      {showCategory && showMenuIcon && ( // Show the curtain menu when the menu icon is clicked
        <div
          id="category-menu"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
           width : '100%',
           height: '1450px',
            background: "white",
            zIndex: 4,
            
            
          }}
        >
          <Category />
        </div>
      )}
      {showMenuIcon && ( // Conditionally render the menu icon for screen size <= 564px
        <MenuIconWrapper onClick={toggleCategory}>
          <MenuIcon style={{ fontSize: "24px" }} />
        </MenuIconWrapper>
      )}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", paddingTop: "20px" }}>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
        <Nextpage />
      </div>
    </Container>
  );
};

export default List1;

