import React from 'react'

function BauturiItem({image,name,description,price}) {
  return (
    <div className='bauturi-item'>
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>{price} lei</button>

    </div>
  )
}

export default BauturiItem