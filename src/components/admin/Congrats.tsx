import React from "react";

const App: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100vh",
    marginTop: "100px",
  };

  const backgroundImageStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "20px",
    left: 0,
    width: "100%",
    textAlign: "center",
    padding: "0 20px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.75rem 1rem",
    backgroundColor: "#4287f5",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: "100px",
  };

  return (
    <div style={containerStyle}>
      <img
        style={backgroundImageStyle}
        src="src/assets/CONGRATS.jpg"
        alt="Background"
      />
      <div style={overlayStyle}>
        <div style={{ marginBottom: "20px" }}>
          <h2>Congratulations on successfully creating your business account on our e-commerce platform</h2>
          <p>We are thrilled to have you join our community of sellers. With your business account, you can now showcase and sell your products to a wide range of customers.</p>
        </div>
        <button style={buttonStyle}>Setup Your Store</button>
      </div>
    </div>
  );
};

export default App;
