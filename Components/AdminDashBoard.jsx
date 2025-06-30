import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/AdminDashBoard.css';

const AdminDashBoard = () => {
  return (
    <div className='AdminDasboard'>
      <div className="home-page">
      <div className="home-image">

        <img src="https://th.bing.com/th/id/OIP.BAFyw2NzIizTLVLl8xIU9QHaEJ?w=332&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="E-commerce Shopping"
          className="ecommerce-image"
        />
      </div>

  
      <div className="home-content">
        <h1>Welcome to Your Ultimate Shopping Destination</h1>
        <p>
          Shop the latest trends in fashion, electronics, home essentials, and more. 
          We bring you high-quality products at unbeatable prices. Experience hassle-free 
          online shopping with fast delivery and secure payments.
        </p>
        

        {/* Call-to-Action */}
        <div className="cta">
          {/* <button className="shop-now-button">Start Shopping Now</button> */}
          <Link to='/AdminHomePage/AdminViewItems'>
          <button className="shop-now-button">Start Shopping Now</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminDashBoard;
