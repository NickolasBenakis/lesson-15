import React, { Fragment } from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { price, imageUrl, name, quantity } }) => {
	return (
		<Fragment>
			<div className="cart-item">
				<img src={imageUrl} alt="itemImg" />
				<div className="item-details">
					<span className="name">{name}</span>
					<span className="price">
						{quantity} x {price}$
					</span>
				</div>
			</div>
		</Fragment>
	);
};

export default CartItem;
