import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import Cart from './components/cart';
import Checkout from './components/checkout';
import { CartProvider } from './components/context';

function App() {
	return (
		<div className="container">
			<CartProvider>
				<Products />
				<Cart />
				<Checkout />
			</CartProvider>
		</div>
	);
}

export default App;
