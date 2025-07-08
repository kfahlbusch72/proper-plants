function Cart({ cart, addCart, removeCart }) {
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p>Nothing in cart.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <button onClick={() => removeCart(item)}>-</button>
              <span>
                {item.image} {item.name}: {item.quantity}
              </span>
              <button onClick={() => addCart(item)}>+</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
