import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import CartModal from "./components/CartModal/CartModal";

import "./App.css";
import { useState } from "react";

function App() {
   const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="App">
      <ProductList />
      <Cart />
      <h1>Todo Bien POP</h1>
      <button onClick={() => setIsCartOpen(true)}>🛒 View Cart</button>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;
