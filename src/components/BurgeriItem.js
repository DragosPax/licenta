import React from 'react'

function BurgeriItem({image,name,description,price}) {
  return (
    <div className='burgeri-item'>
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>{price} lei</button>

    </div>
  )
}

export default BurgeriItem