import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Rating, Radio, RadioGroup, FormControlLabel } from '@mui/material';

interface RatingWithSmallerStarsProps {
  value: number;
  max: number;
}
const RatingWithSmallerStars: React.FC<RatingWithSmallerStarsProps> = ({ value, max }) => {
  const starSize = '60%';
  const remainingStarSize = '60%'; 

  return (
    <Rating
      value={value}
      max={max}
      readOnly
      icon={<StarIcon style={{ color: 'orange', fontSize: starSize }} />}
      emptyIcon={<StarIcon style={{ color: 'lightgrey', fontSize: remainingStarSize }} />}
    />
  );
};
const FilterSection: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string>('Any');
  const [ratingValue, setRatingValue] = useState<string>('5');

  const handleBrandSelection = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleFeatureSelection = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleConditionSelection = (condition: string) => {
    setSelectedCondition(condition);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRatingValue(event.target.value);
  };
  return (
    <div style={{ 
      padding: '20px', 
      //boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
      borderRadius: '8px', 
      maxWidth: '200px',
      width: '50%', 
      marginRight:'25px',
      maxHeight:"1480px",
      marginTop:"10px",
    }}>
      {/* Categories */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Categories</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>Mobile accessory</li>
          <li style={{ marginBottom: '10px' }}>Electronics</li>
          <li style={{ marginBottom: '10px' }}>Smartphones</li>
          <li style={{ marginBottom: '10px' }}>Modern tech</li>
          <li>
            <a href="#">See All</a>
          </li>
        </ul>
      </div>

      {/* Brands */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Brands</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes('Samsung')}
                onChange={() => handleBrandSelection('Samsung')}
                style={{ marginRight: '5px' }}
              />
              Samsung
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes('Micromax')}
                onChange={() => handleBrandSelection('Micromax')}
                style={{ marginRight: '5px' }}
              />
              Micromax
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes('Sony')}
                onChange={() => handleBrandSelection('Sony')}
              />
              Sony
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes('Nokia')}
                onChange={() => handleBrandSelection('Nokia')}
              />
              Nokia
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedBrands.includes('Apple')}
                onChange={() => handleBrandSelection('Apple')}
              />
              Apple
            </label>
            
          </li>
          <li>
            <a href="#">See All</a>
          </li>
        </ul>
      </div>

      {/* Features */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Features</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedFeatures.includes('Plastic Cover')}
                onChange={() => handleFeatureSelection('Plastic Cover')}
                style={{ marginRight: '5px' }}
              />
              Plastic Cover
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedFeatures.includes('Metallic')}
                onChange={() => handleFeatureSelection('Metallic')}
                style={{ marginRight: '5px' }}
              />
              Metallic
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedFeatures.includes('Super power')}
                onChange={() => handleFeatureSelection('Super power')}
              />
              Super power
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedFeatures.includes('8gb ram')}
                onChange={() => handleFeatureSelection('8gb ram')}
              />
              8gb RAM
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedFeatures.includes('large memory')}
                onChange={() => handleFeatureSelection('large memory')}
              />
              Large memory
            </label>
          </li>
          <li>
            <a href="#">See All</a>
          </li>
        </ul>
      </div>
       

      {/* Price Range */}
      <div style={{ marginBottom: '30px' }}>
      <h3>Price Range</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>${priceRange[0]}</span>
        <input
          type="range"
          min={0}
          max={1000}
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          style={{
            appearance: 'none',
            width: '100%',
            height: '8px',
            background: '#d3d3d3',
            outline: 'none',
            borderRadius: '5px',
            margin: '0 5px',
          }}
        />
        <span style={{ marginLeft: '10px' }}>${priceRange[1]}</span>

               <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: lightgrey;
              cursor: pointer;
            }

            input[type="range"]::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border: none;
              border-radius: 50%;
              background: #4CAF50;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    </div>

      {/* Colors */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Colors</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ backgroundColor: 'red', width: '20px', height: '20px', borderRadius: '10px' }}></div>
          <div style={{ backgroundColor: 'blue', width: '20px', height: '20px', borderRadius: '10px' }}></div>
          <div style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '10px' }}></div>
          <div style={{ backgroundColor: 'brown', width: '20px', height: '20px', borderRadius: '10px' }}></div>
          <div style={{ backgroundColor: 'violet', width: '20px', height: '20px', borderRadius: '10px' }}></div>
        </div>
      </div>
       
      {/* Condition */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Condition</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="condition"
                value="Any"
                checked={selectedCondition === 'Any'}
                onChange={() => handleConditionSelection('Any')}
                style={{ marginRight: '5px' }}
              />
              Any
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="condition"
                value="Refurbished"
                checked={selectedCondition === 'Refurbished'}
                onChange={() => handleConditionSelection('Refurbished')}
                style={{ marginRight: '5px' }}
              />
              Refurbished
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="condition"
                value="Brand new"
                checked={selectedCondition === 'Brand new'}
                onChange={() => handleConditionSelection('Brand new')}
                style={{ marginRight: '5px' }}
              />
              Brand new
            </label>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="condition"
                value="Modern tech"
                checked={selectedCondition === 'Modern tech'}
                onChange={() => handleConditionSelection('Modern tech')}
                style={{ marginRight: '5px' }}
              />
              Modern tech
            </label>
          </li>
        </ul>
      </div>
      <div>
      <div>
       {/* Rating */}
       <div style={{ marginBottom: '30px' }}>
        <h3>Rating</h3>
        <RadioGroup name="rating" value={ratingValue} onChange={handleRatingChange}>
          <FormControlLabel
            value="5"
            control={<Radio color="primary" />}
            label={<RatingWithSmallerStars value={5} max={5} />}
          />
          <FormControlLabel
            value="4"
            control={<Radio color="primary" />}
            label={<RatingWithSmallerStars value={4} max={5} />}
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" />}
            label={<RatingWithSmallerStars value={3} max={5} />}
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" />}
            label={<RatingWithSmallerStars value={2} max={5} />}
          />
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label={<RatingWithSmallerStars value={1} max={5} />}
          />
        </RadioGroup>
      </div>
    </div></div></div>
  );
};

export default FilterSection;




