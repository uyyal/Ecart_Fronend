import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
import '../Styles/AdminViewItems.css';
import { useNavigate } from 'react-router-dom';

const AdminViewItems = () => {
  const [products, setProducts] = useState([]);
  const [force, setForce] = useState(0);
  const navi = useNavigate();

  useEffect(() => {
    axios.get('https://ecart-backend-3kap.onrender.com/Items')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [force]);

  function deleteProduct(id, productname) {
    axios.delete(`https://ecart-backend-3kap.onrender.com/Items/${id}`)
      .then(() => {
        toast.success(`${productname} Deleted Successfully`);
        setForce(force + 1);
      })
      .catch(() => {
        toast.error('Data is not present');
      });
  }

  function editpage(id) {
    navi(`/AdminHomePage/UpdateProducts/${id}`);
    setForce(force + 1);
  }

  return (
    <div className='AdminViewItems'>
      {products.map((product) => (
        <div className="card1" key={product.id}>
          <div className="Thumbnail">
            <img className='thumb' src={product.thumbnail} alt={product.productname} />
          </div>
          <br />
          <div className="description">
            <h4 className='pn'>{product.productname}</h4>
            <span id='cost'>
              M.R.P:
              <big>
                <strike>{product.productprice}</strike>
              </big>
            </span>
            <h5 className='h'>
              Offer price:12% off ₹
              {Math.round(Number(product.productprice) * 0.88)}
            </h5>
            <p className='p'>Description: {product.desc}</p>
            <span className='sp'>Ratings: <b>{product.ratings}*</b></span>
            <br /><br />
            <button className='warning' onClick={() => editpage(product.id)}>
              <EditIcon />Update
            </button>
            <button className='danger' onClick={() => deleteProduct(product.id, product.productname)}>
              <DeleteForeverIcon /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminViewItems;
