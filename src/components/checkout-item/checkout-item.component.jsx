import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem, clearItem, addItem } from '../../redux/cart/cart.actions';
const CheckoutItem = ({ item, clearCartItem, removeCartItem, addCartItem }) => {
	const { imageUrl, name, quantity, price } = item;

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeCartItem(item)}>
					&#10094;
				</div>
				<div className='value'>{quantity}</div>
				<div className='arrow' onClick={() => addCartItem(item)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => clearCartItem(item)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	clearCartItem: item => dispatch(clearItem(item)),
	removeCartItem: item => dispatch(removeItem(item)),
	addCartItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
