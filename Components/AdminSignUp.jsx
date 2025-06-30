import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../Styles/AdminSignUp.css';
import { useNavigate } from 'react-router-dom';

const AdminSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle state

  const navigate = useNavigate();

  const addAdmin = (e) => {
    e.preventDefault();

    const data = { name, email, password, phone };

    axios.post('http://localhost:8080/Admin', data)
      .then((res) => {
        toast.success("Successfully created account!");
        navigate('/AdminLogin');
      })
      .catch((err) => {
        toast.error("Invalid details or failed to create account!");
      });
  };

  return (
    <div className='AdminSignUp'>
      <div className="signupimg">
        <img
          className='signup_img'
          src="https://img.freepik.com/premium-photo/two-factor-authentication-concept-illustration_1108314-57292.jpg"
          alt="Admin Sign Up"
        />
      </div>

      <form className='form3' onSubmit={addAdmin}>
        <h1 className='h1'>Create User Account</h1>

        <label className='label3'>Name:</label>
        <input
          className='input3'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter the Name'
          required
        />

        <label className='label3'>Email:</label>
        <input
          className='input3'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Email Address'
          required
        />

        <label className='label3'>Password:</label>
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            className='input3'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
              cursor: 'pointer',
              fontSize: '18px'
            }}
            title={showPassword ? "Hide Password" : "Show Password"}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <label className='label3'>Phone:</label>
        <input
          className='input3'
          type='tel'
          pattern='[0-9]{10}'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Enter Phone Number'
          required
        />

        <button type="submit" className='btn3'>Sign Up</button>
      </form>
    </div>
  );
};

export default AdminSignUp;
