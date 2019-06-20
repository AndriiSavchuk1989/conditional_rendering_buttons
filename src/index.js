import React from "react";
import ReactDOM from "react-dom";
import ItemComponent from "./ItemComponent";

import "./styles.css";

const ShowExample = () => {
  return (
    <div>
      <ItemComponent />
      <br />
      <ItemComponent type="info" />
      <br />
      <ItemComponent type="basket" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ShowExample />, rootElement);
