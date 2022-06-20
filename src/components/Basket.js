import React from 'react';
import '../styles/Basket.css';

export default function Basket(props) {
	const { cartItems, onAdd, onRemove } = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
	const transport = 12;
	const total = itemsPrice + transport;
	return (
		<div className='basket'>
			<span onClick={() => props.setShowBasket(false)}>X</span>
			<h2>Cart Items</h2>
			{cartItems.length === 0 && <p>Cart Is empty</p>}
			{cartItems.map((item) => (
				<>
					<div key={item.id} className='item-add'>
						<div className='name'>{item.name}</div>
						<div className='btns'>
							<button onClick={() => onAdd(item)} className='add'>
								+
							</button>
							<button onClick={() => onRemove(item)} className='add'>
								-
							</button>
						</div>
						<div className='qty'>
							{item.qty} x {item.price} lei
						</div>
					</div>
				</>
			))}
			{cartItems.length !== 0 && (
				<>
					<hr></hr>
					<div style={{marginBottom:'20px',marginTop:'20px',float:'right'}}>Transport : {transport} lei</div>
					<div style={{marginBottom:'20px',marginTop:'100px',textAlign:'center'}}>
						<b >Total: {total.toFixed(2)} lei</b>
					</div>
					<button className='finalizeaza'>Finalizare comanda!</button>
				</>
			)}
		</div>
	);
}
