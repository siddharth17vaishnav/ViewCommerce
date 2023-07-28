import React from 'react';
import styled from 'styled-components';
import p11 from '../../assets/p11.jpg';
import p12 from '../../assets/p12.jpg';
import p13 from '../../assets/p13.jpg';
import p14 from '../../assets/p14.jpg';
import p15 from '../../assets/p15.jpg';
import p16 from '../../assets/p16.jpg';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Info from '../../components/Detail/Info';
import Link from '@mui/material/Link';

const CenteredCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center; /
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Column = styled.div`
  flex: 1;
  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 1024px) {
    padding: 0 30px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const VerticalRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallImage = styled.img`
  width: 60px;
  height: 60px;
`;

const SmallImageContainer = styled.div`
  display: flex;
  gap: 13px;
`;

const DetailColumn = styled.div`
  flex: 1;
`;

const AnotherCard = styled.div`
  width: 100%;
  max-width: 280px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  @media (min-width: 768px) {
    padding: 30px;
  }
  margin-left: 25px;
  margin-top: 40px
  
`;
const CheckLink = styled(Link)`
  text-align: right;
  display: block;
  margin-bottom: 10px;
`;
const GreenText = styled.p`
  color: green;
`;

const BlueText = styled.h4`
  color: blue;
`;
const GreyText = styled.p`
  color: grey;
`;

const Card: React.FC = () => {
  return (
    <CenteredCardContainer>
      <CardContainer>
        {/* First Column */}
        <Column>
          {/* Image */}
          <Image src={p15} alt="Image" />

          {/* Vertical Row of Six Images */}
          <VerticalRow>
            <SmallImageContainer>
              <SmallImage src={p12} alt="Image 1" />
              <SmallImage src={p13} alt="Image 2" />
              <SmallImage src={p14} alt="Image 3" />
              <SmallImage src={p15} alt="Image 4" />
              <SmallImage src={p16} alt="Image 5" />
              <SmallImage src={p11} alt="Image 6" />
            </SmallImageContainer>
          </VerticalRow>
        </Column>

        {/* Second Column */}
        <DetailColumn>
          <h2>AIR MAX 270 Running Shoes For Men (RED)</h2>
          <h1>RS 1450</h1>
          <BlueText>Be the first to Review this product</BlueText>
          <GreyText>Type: Modern shoes</GreyText>
          <GreyText>Outer material: Textile</GreyText>
          <GreyText>Design: Modern nice</GreyText>
          <GreyText>Country of Origin: Bangladesh, Vietnam, China, United States</GreyText>
          <GreyText>Protection: Refund Policy</GreyText>
          <GreyText>Warranty: 2 years full warranty</GreyText>
        </DetailColumn>

        {/* Third Column */}
        <Column>
          {/* Another Card */}
          <AnotherCard>
            <div style={{ textAlign: 'left', marginBottom: 5 }}>Delivery:</div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="Enter Delivery Code"
              label="Enter Delivery Code"
              type="Enter Delivery Code"
              id="Enter Delivery Code"
              autoComplete="current-Enter Delivery Code"
            />
              <CheckLink href="#" variant="body2">
              check
            </CheckLink>
            <GreenText>Bank Offer</GreenText>
            <GreenText>Credit card offer</GreenText>
            <GreenText>10% cash back payment via Gpay</GreenText>

            {/* Buttons */}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1 }}>
              Buynow
            </Button>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1 }}>
              Add to cart
            </Button>
          </AnotherCard>
        </Column>
      </CardContainer>
     <Info />
    </CenteredCardContainer>
     
  );
};

export default Card;
