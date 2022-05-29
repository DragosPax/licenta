import React from 'react'

function PizzaItem({image,name,description,price}) {
  function pop(){
    
  }
  return (
    <div className='pizza-item'>
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <button onClick={pop}>{price} lei</button>

    </div>
  )
}

export default PizzaItem