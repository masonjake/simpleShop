import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './context';

function Products() {
	const URL = 'http://localhost:1337/api/products';
	const [data, setData] = useState([]);
	const [cart, setCart] = useState([]);

	const getProduct = async () => {
		const response = await axios.get(URL);
		setData(response.data.data);
	};
	useEffect(() => {
		//cleanup function
		//implement useReducer

		//make context for the items in cart

		getProduct();
		//what does this do
	}, []);

	function ProductItem({ product }) {
		const [stock, setStock] = useState(product.attributes.stock);
		const { CartItems } = useContext(CartContext);
		const { addToCart } = useContext(CartContext);
		const handleAddToCart = (e) => {
			setStock(stock - 1);
			// could make an object with the number of items and the item name
			//prettier-ignore
			addToCart({amount:stock,name:product.attributes.name})
		};
		/** why does this shorthand work stock < 1*/
		return (
			<tr className="product-table-row">
				<td>{stock} </td>
				<td>{product.attributes.name}</td>

				<td>
					<button onClick={handleAddToCart} disabled={stock < 1}>
						Add to cart
					</button>
				</td>
			</tr>
		);
	}

	return (
		<div className="products">
			<h1>Products</h1>
			<table className="product-table">
				<thead>
					<tr>
						<th>Stock</th>
						<th>Name</th>
						<th>Buy</th>
					</tr>
				</thead>
				{data &&
					data.map((product, i) => {
						return (
							<tbody>
								<ProductItem product={product} />
							</tbody>
						);
					})}
			</table>
		</div>
	);
}

export default Products;
