import React from "react";
import "../styles/Bauturi.css";
import Main from "../assets/bauturi/main.jpg";
import { BauturiList } from "../helpers/BauturiList";
import BauturiItem from "../components/BauturiItem";


function Bauturi() {
  return (
    <div className="bauturi-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>BAUTURI</h1>
      </div>

      <div className="bauturi-list">
        {BauturiList.map((bauturiItem, key) => {
          return (
            <BauturiItem
              key={key}
              image={bauturiItem.image}
              name={bauturiItem.name}
              description={bauturiItem.description}
              price={bauturiItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Bauturi;
