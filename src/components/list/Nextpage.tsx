import React from "react";

const Nextpage: React.FC = () => {
  const paginationStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
  };

  const linkStyle: React.CSSProperties = {
    color: "black",
    padding: "8px 16px",
    textDecoration: "none",
    transition: "background-color 0.3s",
  };

  const activeStyle: React.CSSProperties = {
    backgroundColor: "dodgerblue",
    color: "white",
  };

  

  return (
    <ul style={paginationStyle} className="pagination">
      <li>
        <a href="#" style={linkStyle}>
          &laquo;
        </a>
      </li>
      <li>
        <a href="#" style={linkStyle}>
          1
        </a>
      </li>
      <li>
        <a href="#" style={{ ...linkStyle, ...activeStyle }}>
          2
        </a>
      </li>
      <li>
        <a href="#" style={linkStyle}>
          3
        </a>
      </li>
      <li>
        <a href="#" style={linkStyle}>
          4
        </a>
      </li>
      <li>
        <a href="#" style={linkStyle}>
          5
        </a>
      </li>
      <li>
        <a href="#" style={linkStyle}>
          6
        </a>
      </li>
      <li>
        <a href="#" style={linkStyle}>
          &raquo;
        </a>
      </li>
    </ul>
  );
};

export default Nextpage;
