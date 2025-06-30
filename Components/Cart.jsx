import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import '../Styles/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className='cart-item'>
            <img src={item.thumbnail} alt={item.productname} />
            <div>
              <h4>{item.productname}</h4>
              <p>Offer Price: ₹{Math.round(item.productprice * 0.88)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
