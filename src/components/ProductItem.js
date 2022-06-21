import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../actions/cart';

export default function ProductItem(props) {
	const { item } = props;
	const dispatch = useDispatch(); //asa se apeleaza functiile din Redux

	return (
		<div className='product-item'>
			<div style={{ backgroundImage: `url(${item.image})` }}></div>
			<h1>{item.name}</h1>
			<p>{item.description}</p>
			<button onClick={() => dispatch(addProductToCart(item))}>{item.price} lei</button>
		</div>
	);
}
