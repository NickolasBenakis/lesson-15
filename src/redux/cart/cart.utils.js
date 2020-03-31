export const addItemToCart = (cartItems, currentItem) => {
	const existingItem = cartItems.find((item, index, self) => {
		return item.id === currentItem.id;
	});
	if (existingItem) {
		return cartItems.map(cartItem => {
			if (existingItem.id === cartItem.id) {
				return { ...cartItem, quantity: cartItem.quantity + 1 };
			} else {
				return cartItem;
			}
		});
	}

	return [...cartItems, { ...currentItem, quantity: 1 }];
};
