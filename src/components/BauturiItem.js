import React from 'react'
import ProductItem from './ProductItem'

function BauturiItem({bauturiItem,onAdd}) {
  return (
    <ProductItem items={bauturiItem} onAdd={onAdd} />
  )
}

export default BauturiItem