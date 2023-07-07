# Router Wont Navigate back to Parent Router

Install:

````
npm install
npm start
```

Router Setup: 

-> (home) -> /orders (Slot) -> /[id] (Stack) -> /products (Stack) -> /[productId] -> /details (Stack)

To Reproduce bug:

- Go to: `/orders/1/products/1/details`
- Click on the button