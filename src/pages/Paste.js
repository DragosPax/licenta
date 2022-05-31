import React from "react";
// import "../styles/Paste.css";
import Main from "../assets/paste/main.jpg";
import { PasteList } from "../helpers/PasteList";
import PasteItem from "../components/PasteItem";


function Paste({onAdd}) {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>PASTE</h1>
      </div>

      <div className="product-list">
        {PasteList.map((pasteItem, key) => {
          return (
            <PasteItem
              key={key}
              pasteItem={pasteItem}
							onAdd={onAdd}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Paste;
