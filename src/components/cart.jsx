function Cart({ cart, addCart, removeCart }) {
  return (
    <>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Nothing in cart.</p>
      ) : (
        <>
          {cart.map((cart) => {
            return (
              <div key={cart.id}>
                <button
                  onClick={() => {
                    removeCart(cart);
                  }}
                  style={{ color: "red" }}
                >
                  -
                </button>{" "}
                <span>
                  {cart.plantName}: {cart.quantity} cart
                </span>{" "}
                <button
                  onClick={() => addCart(cart)}
                  style={{ color: "green" }}
                >
                  +
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Cart;
