import React from "react";
// import "../styles/Bauturi.css";
import Main from "../assets/bauturi/main.jpg";
import { BauturiList } from "../helpers/BauturiList";
import BauturiItem from "../components/BauturiItem";


function Bauturi() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>BAUTURI</h1>
      </div>

      <div className="product-list">
        {BauturiList.map((bauturiItem, key) => {
          return (
            <BauturiItem
              key={key}
              bauturiItem={bauturiItem}
						
            />
          );
        })}
      </div>
    </div>
  );
}

export default Bauturi;
