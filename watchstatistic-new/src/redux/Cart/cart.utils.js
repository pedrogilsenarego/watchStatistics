export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
	return prevCartItems.find(
		(cartItem) => cartItem.reference === nextCartItem.reference
	);
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
	const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

	if (cartItemExists) {
		return prevCartItems.map((cartItem) =>
			cartItem.reference === nextCartItem.reference
				? {
						...cartItem
				  }
				: cartItem
		);
	}

	return [
		...prevCartItems,
		{
			...nextCartItem
		}
	];
};

export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
	return prevCartItems.filter(
		(item) => item.documentID !== cartItemToRemove.documentID
	);
};

export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }) => {
	const existingCartItem = prevCartItems.find(
		(cartItem) => cartItem.documentID === cartItemToReduce.documentID
	);

	if (existingCartItem.quantity === 1) {
		return prevCartItems.filter(
			(cartItem) => cartItem.documentID !== existingCartItem.documentID
		);
	}

	return prevCartItems.map((cartItem) =>
		cartItem.documentID === existingCartItem.documentID
			? {
					...cartItem,
					quantity: cartItem.quantity - 1
			  }
			: cartItem
	);
};
