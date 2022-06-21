import React from 'react'
import ProductItem from './ProductItem'

function PizzaItem({pizzaItem}) {
  
  return (
    <ProductItem item={pizzaItem} />
    // <div className='pizza-item'>
    //         <div style={{backgroundImage:`url(${image})`}}></div>
    //         <h1>{name}</h1>
    //         <p>{description}</p>
    //         <button onClick={pop}>{price} lei</button>

    // </div>
  )
}

export default PizzaItem