import  { FunctionComponent, CSSProperties } from "react";
import Slider from './Slider';

const Category: FunctionComponent = () => {
  const boxStyle: CSSProperties = {
    //border: "1px solid grey",
    paddingRight: "25px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    
  };

  const linkStyle: CSSProperties = {
    textDecoration: "none",
  };
  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <div>
    <div style={containerStyle}>
      <div style={{ ...boxStyle, marginRight: "25px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: 20 }}>
          Category
        </div>
        <div style={{ padding: "10px", fontSize: "18px" }}>Mobile accessory</div>
        <div style={{ padding: "10px", fontSize: "18px" }}>Electronics</div>
        <div style={{ padding: "10px", fontSize: "18px" }}>Smartphones</div>
        <div style={{ padding: "10px", fontSize: "18px" }}>Modern tech</div>
        <a href="#" style={linkStyle}>
          Sell all
        </a>
        </div></div>
      <div style={{ ...boxStyle, marginRight: "25px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: 20 }}>
          Brands
        </div>
        <div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="samsung" />
  <label htmlFor="samsung">Samsung</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="micromax" />
  <label htmlFor="micromax">Micomax</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="sony" />
  <label htmlFor="sony">Sony</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="nokia" />
  <label htmlFor="nokia">Nokia</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="apple" />
  <label htmlFor="apple">Apple</label>
</div>

      </div>
      <div style={{ ...boxStyle, marginRight: "25px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: 20 }}>
          Features
        </div>
        <div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="plasticCover" />
  <label htmlFor="plasticCover">Plastic Cover</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="metallic" />
  <label htmlFor="metallic">Metallic</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="superPower" />
  <label htmlFor="superPower">Super power</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="8gbRam" />
  <label htmlFor="8gbRam">8gb ram</label>
</div>
<div style={{ padding: "10px", fontSize: "18px" }}>
  <input type="checkbox" id="largeMemory" />
  <label htmlFor="largeMemory">large memory</label>
</div>

        <a href="#" style={linkStyle}>
          Sell all
        </a>
      </div>
      <div style={{ ...boxStyle, marginRight: "25px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: 20 }}>
          Price range
        </div>
        <Slider />
        <div></div>
      </div>
      <div style={{ ...boxStyle, marginRight: "25px" }}>
        <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: 20 }}>
          Colors
        </div>
        <div>
          <div>All</div>
          <div></div>
        </div>
      </div>
      <div
        style={{
          ...boxStyle,
          backgroundColor: "lightgray",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>Clear Filters</div>
      </div>
    </div>
  );
};

export default Category;
