import React from 'react'
import ProductItem from './ProductItem'

function DesertItem({desertItem,onAdd}) {
  return (
    <ProductItem items={desertItem} onAdd={onAdd}/>
  )
}

export default DesertItem