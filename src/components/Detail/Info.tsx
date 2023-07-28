import React from 'react';

const Card = () => {
    const cardStyle: React.CSSProperties = {
        width: '100%', 
        maxWidth: '1220px', 
        height: 'auto', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        overflow: 'hidden',
        margin: '0 auto', 
        marginTop: '50px',
      };

      const headerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
      };

  const headerLeftStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  const blueTextStyle: React.CSSProperties = {
    color: 'blue',
    fontWeight: 'bold',
  };

  const greyTextStyle: React.CSSProperties = {
    color: '#878686',
  };

  const underlineStyle: React.CSSProperties = {
    flex: '1',
    height: '1px',
    backgroundColor: '#878686',
    margin: '0',
  };

  const contentStyle: React.CSSProperties = {
    marginBottom: '20px',
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: '10px',
  };

  const featureDetailsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const columnStyle: React.CSSProperties = {
    flex: '1',
    padding: '0 10px',
    marginTop: '50px',
  };
  const columnStyleResponsive: React.CSSProperties = {
    textAlign: 'left', // Change the text alignment for small screens
    padding: '0 5px', // Adjust padding for small screens
  };

  const detailItemStyle: React.CSSProperties = {
    display: 'flex',
    marginBottom: '10px',
  };

  const detailNameStyle: React.CSSProperties = {
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const featureItemStyle: React.CSSProperties = {
    marginBottom: '10px',
  };

  const featureNameStyle: React.CSSProperties = {
    fontWeight: 'bold',
  };

  const featureDescriptionStyle: React.CSSProperties = {
    color: '#878686',
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={headerLeftStyle}>
          <span style={blueTextStyle}>Product Details</span>
          <span style={{ ...greyTextStyle, paddingLeft: '40px' }}>Reviews</span>
        </div>
       
      </div>
      <div style={underlineStyle}></div>
      <div style={contentStyle}>
        <p style={paragraphStyle}>Morph into all-timer with the Giannis Immortality 2. A plush foam package combined with a more focused fit in the midfoot in a super lightweight design means you can maintain a high level of intensity and focus when victory hangs in the balance just like Giannis in the clutch.</p>
        <p style={paragraphStyle}>Morph into all-timer with the Giannis Immortality 2. A plush foam package combined with a more focused fit in the midfoot in a super lightweight design means you can maintain a high level of intensity and focus when victory hangs in the balance just like Giannis in the clutch.</p>
        <p style={paragraphStyle}>Morph into all-timer with the Giannis Immortality 2. A plush foam package combined with a more focused fit in the midfoot in a super lightweight design means you can maintain a high level of intensity and focus when victory hangs in the balance just like Giannis in the clutch.</p>
      </div>
      <div style={featureDetailsStyle}>
        <div style={columnStyle}>
          <div style={detailItemStyle}>
            <span style={detailNameStyle}>Model :</span>
            <span>#8786867</span>
          </div>
          <div style={detailItemStyle}>
            <span style={detailNameStyle}>Style :</span>
            <span>Classic style</span>
          </div>
          <div style={detailItemStyle}>
            <span style={detailNameStyle}>Certificate :</span>
            <span>ISO-898921212</span>
          </div>
          <div style={detailItemStyle}>
            <span style={detailNameStyle}>Size :</span>
            <span>7-8-9</span>
          </div>
          <div style={detailItemStyle}>
            <span style={detailNameStyle}>Material :</span>
            <span>Soft and heavy</span>
          </div>
        </div>
        <div style={{ ...columnStyle, ...columnStyleResponsive }}>
          <div style={featureItemStyle}>
            <span style={featureNameStyle}>Some great feature name here</span>
            <p style={featureDescriptionStyle}>Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div style={featureItemStyle}>
            <span style={featureNameStyle}>Some great feature name here</span>
            <p style={featureDescriptionStyle}>Duis aute irure dolor in reprehenderit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
