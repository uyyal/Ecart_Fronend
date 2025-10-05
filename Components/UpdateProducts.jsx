import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../Styles/UpdateProducts.css';

function UpdateProducts() {
  const [Category, setCategory] = useState('');
  const [productname, setProductname] = useState('');
  const [productprice, setProductprice] = useState('');
  const [desc, setDesc] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [ratings, setRatings] = useState('');

  const data = { Category, productname, productprice, desc, thumbnail, ratings };

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the existing product details
  useEffect(() => {
    axios
      .get(`https://ecart-backend-3kap.onrender.com/items/${id}`)
      .then((res) => {
        const product = res.data;
        setProductname(product.productname || '');
        setCategory(product.Category || '');
        setDesc(product.desc || '');
        setProductprice(product.productprice || '');
        setThumbnail(product.thumbnail || '');
        setRatings(product.ratings || '');
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        toast.error('Failed to load product data.');
      });
  }, [id]);

  const updateItem = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/items/${id}`, data)
      .then((res) => {
        toast.success('Updated Successfully');
        navigate('/AdminHomePage/AdminViewItems');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Invalid Data Format');
      });
  };

  return (
    <div className='updateproducts'>
      <form className='update' onSubmit={updateItem}>
        <fieldset className='field'>
          <label className='label6'>Category:</label>
          <select required value={Category} onChange={(e) => setCategory(e.target.value)}>
            <option>Dress Material</option>
            <option>Mobile</option>
            <option>Mobile Accesories</option>
            <option>Electronics</option>
            <option>Groceries</option>
          </select>

          <label className='label6'>Product Name:</label>
          <input
            required
            value={productname}
            onChange={(e) => setProductname(e.target.value)}
            className='input6'
            type='text'
            placeholder='Enter the product name'
          />

          <label className='label6'>Product Price:</label>
          <input
            required
            value={productprice}
            onChange={(e) => setProductprice(e.target.value)}
            className='input6'
            type='number'
            placeholder='Enter the price'
          />

          <label className='label6'>Description:</label>
          <textarea
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows='2'
            cols='30'
            placeholder='Enter Description'
          ></textarea>

          <label className='label6'>Thumbnail:</label>
          <input
            required
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className='input6'
            type='text'
            placeholder='Enter the image address'
          />

          <label className='label6'>Ratings:</label>
          <input
            required
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            className='input6'
            type='number'
            placeholder='Enter the ratings'
          />

          <button className='btn btn-warning'>Update Items</button>
        </fieldset>
      </form>
    </div>
  );
}

export default UpdateProducts;
