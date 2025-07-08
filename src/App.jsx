import { useState } from "react";
import "./App.css";
import Plants from "./components/plants";
import Cart from "./components/cart";
import PLANTS from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const addCart = (plant) => {
    const exists = cart.find((item) => item.id === plant.id);
    if (exists) {
      increaseQuantity(plant.id);
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const removeCart = (plant) => {
    decreaseQuantity(plant.id);
  };

  const clearCart = () => {
    setCart([]); // empties the cart
  };

  return (
    <>
      <Plants plants={PLANTS} addCart={addCart} />
      <Cart
        cart={cart}
        addCart={addCart}
        removeCart={removeCart}
        clearCart={clearCart}
      />
    </>
  );
}

export default App;
