import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../Components/CartContext';
import '../Styles/UserViewitems.css';

const UserViewItems = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get('http://localhost:8080/Items')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='UserViewItems'>
      {products.map((product) => (
        <div className='items' key={product.id}>
          <div className='card2'>
            <div className='Thumbnail2'>
              <img className='thumb2' src={product.thumbnail} alt='' />
            </div>
            <br />
            <div className='description2'>
              <h4>{product.productname}</h4>
              <span id='cost2'>
                M.R.P:<big> <strike>{product.productprice}</strike> </big>
              </span>
              <h5>Offer price: 12% off ₹{Math.round(product.productprice * 0.88)}</h5>
              <p>Description: {product.desc}</p>
              <span>Ratings: <b>{product.ratings}*</b></span>
              <br /><br />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserViewItems;
