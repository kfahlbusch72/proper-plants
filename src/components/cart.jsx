function Cart({ cart, addCart, removeCart }) {
  return (
    <>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Nothing in cart.</p>
      ) : (
        <>
          {cart.map((item) => {
            return (
              <div key={item.id}>
                <button
                  onClick={() => {
                    removeCart(item);
                  }}
                  style={{ color: "red" }}
                >
                  -
                </button>{" "}
                <span>
                  {item.image} {item.name}: {item.quantity}
                </span>{" "}
                <button
                  onClick={() => addCart(item)}
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
