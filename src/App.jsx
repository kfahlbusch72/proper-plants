import { useState } from "react";
import "./App.css";
import PLANTS from "./components/plants";
import Cart from "./components/cart";
import PLANTS from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const addCart = (plant) => {
    const cartExists = cart.find((i) => i.id === plant.id);
    if (cartExists) {
      setCart(
        cart.map((cart) =>
          cart.id === plant.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeCart = (cartToRemove) => {
    setCart(
      cart
        .map((cart) =>
          cart.id === cartToRemove.id
            ? { ...cart, quantity: cart.quantity - 1 }
            : cart
        )
        .filter((cart) => cart.quantity > 0)
    );
  };

  return (
    <>
      <PLANTS plants={PLANTS} addCart={addCart} />
      <Cart cart={cart} addCart={addCart} removeCart={removeCart} />
    </>
  );
}

export default App;
