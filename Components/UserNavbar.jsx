import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Components/CartContext';
import '../Styles/UserNavbar.css';


const UserNavbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='usernav'>
      <h1>EKart</h1>
      {/* <Link to='/'>View Items</Link> */}
      <div className='accounts'>
        <Link to='/cart'>
          🛒 <span className='cart-count'>{cartItems.length}</span>
        </Link>
      </div>
      
    </div>
  );
};

export default UserNavbar;
