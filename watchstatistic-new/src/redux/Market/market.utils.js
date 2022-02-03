export const handleRemoveMarketItem = ({
	prevMarketItems,
	marketItemToRemove
}) => {
	return prevMarketItems.filter(
		(item) => item.reference !== marketItemToRemove.reference
	);
};
