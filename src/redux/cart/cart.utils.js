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
export const removeItemFromCart = (cartItems, currentItemToRemove) => {
	const existingItem = cartItems.find((item, index, self) => {
		return item.id === currentItemToRemove.id;
	});
	if (existingItem && existingItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== existingItem.id);
	}

	return cartItems.map(cartItem => {
		return cartItem.id === currentItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem;
	});
};

export const clearItemFromCart = (cartItems, currentItem) => {
	const existingItem = cartItems.find((item, index, self) => {
		return item.id === currentItem.id;
	});
	if (existingItem) {
		return cartItems.filter(cartItem => {
			return cartItem.id !== existingItem.id;
		});
	}
	return cartItems;
};
