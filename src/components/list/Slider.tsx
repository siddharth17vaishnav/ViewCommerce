import React, { useState, useEffect } from 'react';

const PriceRangeSlider: React.FC = () => {
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(7500);
  const priceGap = 1000;

  useEffect(() => {
    const rangeInput = document.querySelectorAll<HTMLInputElement>(".range-input input");
    const priceInput = document.querySelectorAll<HTMLInputElement>(".price-input input");
    const range = document.querySelector(".slider .progress") as HTMLDivElement;
  
    priceInput.forEach(input => {
      input.addEventListener("input", (e) => {
        const minPrice = parseInt(priceInput[0].value);
        const maxPrice = parseInt(priceInput[1].value);
  
        if ((maxPrice - minPrice >= priceGap) && maxPrice <= parseInt(rangeInput[1].max)) {
          if ((e.target as HTMLInputElement)?.className === "input-min") {
            rangeInput[0].value = minPrice.toString();
            range.style.left = `${(minPrice / parseInt(rangeInput[0].max)) * 100}%`;
          } else {
            rangeInput[1].value = maxPrice.toString();
            range.style.right = `${100 - (maxPrice / parseInt(rangeInput[1].max)) * 100}%`;
          }
        }
      });
    });
  
    rangeInput.forEach(input => {
      input.addEventListener("input", (e) => {
        const minVal = parseInt(rangeInput[0].value);
        const maxVal = parseInt(rangeInput[1].value);
  
        if ((maxVal - minVal) < priceGap) {
          if ((e.target as HTMLInputElement)?.className === "range-min") {
            rangeInput[0].value = (maxVal - priceGap).toString();
          } else {
            rangeInput[1].value = (minVal + priceGap).toString();
          }
        } else {
          setMinPrice(minVal);
          setMaxPrice(maxVal);
          range.style.left = `${(minVal / parseInt(rangeInput[0].max)) * 100}%`;
          range.style.right = `${100 - (maxVal / parseInt(rangeInput[1].max)) * 100}%`;
        }
      });
    });
  }, [priceGap]);

  return (
    <div className="wrapper" style={{ 
      width: '400px',
      background: '#fff',
      borderRadius: '10px',
      padding: '20px 25px 40px',
      boxShadow: '0 12px 35px rgba(0,0,0,0.1)',
      transform: 'scale(0.7)', 
      alignContent: 'screenLeft',
    }}>
      <header>
        <h2 style={{ fontSize: '24px', fontWeight: 600 }}>Price Range</h2>
        <p style={{ marginTop: '5px', fontSize: '16px' }}>Use slider or enter min and max price</p>
      </header>
      <div className="price-input" style={{ width: '100%', display: 'flex', margin: '30px 0 35px' }}>
        <div className="field" style={{ display: 'flex', width: '100%', height: '45px', alignItems: 'center' }}>
          <span>Min</span>
          <input
            type="number"
            className="input-min"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
            style={{
              width: '100%',
              height: '100%',
              outline: 'none',
              fontSize: '19px',
              marginLeft: '12px',
              borderRadius: '5px',
              textAlign: 'center',
              border: '1px solid #999',
              MozAppearance: 'textfield',
            }}
          />
        </div>
        <div className="separator" style={{ width: '130px', display: 'flex', fontSize: '19px', alignItems: 'center', justifyContent: 'center' }}>-</div>
        <div className="field" style={{ display: 'flex', width: '100%', height: '45px', alignItems: 'center' }}>
          <span>Max</span>
          <input
            type="number"
            className="input-max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            style={{
              width: '100%',
              height: '100%',
              outline: 'none',
              fontSize: '19px',
              marginLeft: '12px',
              borderRadius: '5px',
              textAlign: 'center',
              border: '1px solid #999',
              MozAppearance: 'textfield',
            }}
          />
        </div>
      </div>
      <div className="slider" style={{ height: '5px', position: 'relative', background: '#ddd', borderRadius: '5px' }}>
        <div className="progress" style={{ height: '100%', left: '25%', right: '25%', position: 'absolute', borderRadius: '5px', background: '#17A2B8' }}></div>
      </div>
      <div className="range-input" style={{ position: 'relative' }}>
        <input
          type="range"
          className="range-min"
          min="0"
          max="10000"
          value={minPrice}
          step="100"
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          style={{ position: 'absolute', width: '100%', height: '5px', top: '-5px', background: 'none', pointerEvents: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="10000"
          value={maxPrice}
          step="100"
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          style={{ position: 'absolute', width: '100%', height: '5px', top: '-5px', background: 'none', pointerEvents: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;














  