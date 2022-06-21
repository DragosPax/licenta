import React from "react";
// import "../styles/Pizza.css";
import Main from "../assets/pizza/main.jpg";
import { PizzaList } from "../helpers/PizzaList";
import PizzaItem from "../components/PizzaItem";


function Pizza() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>PIZZA</h1>
      </div>

      <div className="product-list">
        {PizzaList.map((pizzaItem, key) => {
          return (
            <PizzaItem
               key={key}
              // image={pizzaItem.image}
              // name={pizzaItem.name}
              // description={pizzaItem.description}
              // price={pizzaItem.price}
              pizzaItem={pizzaItem}
							
            />
          );
        })}
      </div>
       
    </div>
  );
}

export default Pizza;
