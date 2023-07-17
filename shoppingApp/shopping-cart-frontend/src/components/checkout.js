import { useContext } from 'react';
import CartContext from '../App';

function Checkout() {
	const cart = useContext(CartContext);

	return (
		<div className="checkout">
			<h1>{cart}</h1>
		</div>
	);
}

export default Checkout;
