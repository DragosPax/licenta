import React from 'react'
import ProductItem from './ProductItem'

function PasteItem({pasteItem,onAdd}) {
  return (
    <ProductItem items={pasteItem} onAdd={onAdd}/>
  )
}

export default PasteItem