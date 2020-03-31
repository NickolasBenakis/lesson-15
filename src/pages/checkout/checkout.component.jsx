import React from 'react';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartItemsPrice
} from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const CheckoutPage = ({ cartItems, totalPrice }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => {
				return <CheckoutItem key={cartItem.id} item={cartItem} />;
			})}
			<div>TOTAL: ${totalPrice}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartItemsPrice
});
export default connect(mapStateToProps)(CheckoutPage);
