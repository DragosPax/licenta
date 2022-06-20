import React from 'react'
import ProductItem from './ProductItem'

function BurgeriItem({burgeriItem,onAdd}) {
  return (
    <ProductItem items={burgeriItem}onAdd={onAdd} />
  )
}

export default BurgeriItem