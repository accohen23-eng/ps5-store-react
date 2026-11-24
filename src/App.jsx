import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { products } from "./data/products";
import CartSummary from "./components/CartSummary";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(name, price) {
    setCount(count + 1);
    setSum(sum + price);
    setCartProducts([...cartProducts, name]);
  }

  function resetCart() {
    setCount(0);
    setSum(0);
    setCartProducts([]);
  }

  return (
    <div>
      <CartSummary
        count={count}
        sum={sum}
        cartProducts={cartProducts}
        onReset={resetCart}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="products-grid">
              {products.map(function (product) {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                );
              })}
            </div>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails onAddToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;