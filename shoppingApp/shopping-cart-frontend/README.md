## App structure

1. Products

- List of products
- each product is a component with its own button to add to cart.
- list of products comes from strapi database
- use effect with useReducer to grab the products list from strapi
- get random images for products

- programmatically create cart components

2. Cart

- List of products in cart
- each product is a component with its own button to remove from cart.

3. Checkout

- list with all prices
- button to checkout that adds the total cost
- will need global context for the data

4. Restock
