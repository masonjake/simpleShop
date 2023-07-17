import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((currentCart) => [...currentCart, item]);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
