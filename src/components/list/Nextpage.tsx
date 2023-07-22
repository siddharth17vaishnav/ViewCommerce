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

  
  const hoverStyle: React.CSSProperties = {
    backgroundColor: "lightgrey", 
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor || "";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = linkStyle.backgroundColor || "";
  };

  return (
    <ul style={paginationStyle} className="pagination">
      <li>
        <a href="#" style={linkStyle}>
          &laquo;
        </a>
      </li>
      <li>
        <a
          href="#"
          style={{ ...linkStyle, ...hoverStyle }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          1
        </a>
      </li>
      <li>
        <a href="#" style={{ ...linkStyle, ...activeStyle }}>
          2
        </a>
      </li>
      <li>
        <a
          href="#"
          style={{ ...linkStyle, ...hoverStyle }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          3
        </a>
      </li>
      <li>
        <a
          href="#"
          style={{ ...linkStyle, ...hoverStyle }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          4
        </a>
      </li>
      <li>
        <a
          href="#"
          style={{ ...linkStyle, ...hoverStyle }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          5
        </a>
      </li>
      <li>
        <a
          href="#"
          style={{ ...linkStyle, ...hoverStyle }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
