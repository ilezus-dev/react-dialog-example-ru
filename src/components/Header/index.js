import React from "react";
import Theme from "./Theme";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <Theme />
      <div className="user">
        <div className="name">Ilezus Dev</div>
        <div className="status">
          <span className="circle" />В сети
        </div>
      </div>
    </div>
  );
};

export default Header;
