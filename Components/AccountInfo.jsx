import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/AccountInfo.css';

const AccountInfo = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all items
    axios.get('http://localhost:8080/Items')
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="account-info">
      <h2>Account Info</h2>
      <table className="items-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.Category}</td>
              <td>{item.productname}</td>
              <td>₹{item.productprice}</td>
              <td>{item.desc}</td>
              <td>{item.ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountInfo;
