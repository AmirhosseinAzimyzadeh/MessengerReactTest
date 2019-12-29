import React from "react";
import "../componentStyle/header.css";

function Header(prop) {
  const connectedStyle = {
    background: `radial-gradient( #11998e 0%,#38ef7d 100% )`
  };

  const notConnected = {
      background: `radial-gradient( #fc4a1a 0%,#f7b733 100% )`
  };

  let style = prop.isConnected ? connectedStyle : notConnected;

  return (
    <div>
      <div id="status" style={style}></div>
      <div id="appHeader">
        <p id="title">Messanger !</p>
      </div>
    </div>
  );
}
export default Header;
