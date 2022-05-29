import React from 'react'

function PasteItem({image,name,description,price}) {
  return (
    <div className='paste-item'>
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{description}</p>
            <button>{price} lei</button>

    </div>
  )
}

export default PasteItem