import React from 'react';

export default function ProductItem({ onAdd, items }) {
	return (
		<div className='product-item'>
			<div style={{ backgroundImage: `url(${items.image})` }}></div>
			<h1>{items.name}</h1>
			<p>{items.description}</p>
			<button onClick={() => onAdd(items)}>{items.price} lei</button>
		</div>
	);
}
