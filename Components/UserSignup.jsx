import React, { useState, useEffect } from 'react';
import '../Styles/UserSignup.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://ecart-backend-3kap.onrender.com/users')
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      toast.error("All fields are required!");
      return;
    }

    // Duplicate email check
    const exists = users.some(u => u.email === email);
    if (exists) {
      toast.error("Email already exists!");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    const userData = { name, email, password, phone };

    axios.post('https://ecart-backend-3kap.onrender.com/users', userData)
      .then(() => {
        toast.success("User registered successfully");
        navigate('/UserLogin');
      })
      .catch(() => {
        toast.error("Error while registering user");
      });
  };

  return (
    <div className='UserBody7'>
      <div className='userloginimg7'>
        <img className='user_img7' src="https://blog.emb.global/wp-content/uploads/2024/01/Top-AI-Tools-for-E-commerce-Product-Descriptions-1.jpg" alt="E-commerce" />
      </div>

      <div className='UserLogin7'>
        <h2 className='big7'>Create a User Account 🔐</h2>

        <form className='form7' onSubmit={handleSubmit}>
          <img className='img7' src="https://th.bing.com/th?q=Kid+Avatar+Icon&w=120&h=120" alt="avatar" />
          <p>😍 Welcome!</p>

          <div>
            <label className="label7">Enter Full Name:</label>
            <input
              className='input7'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Full Name'
              required
            />
          </div>

          <div>
            <label className='label7'>Email Address:</label>
            <input
              className='input7'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Email Address'
              required
            />
          </div>

          <div>
            <label className='label7'>Mobile Number:</label>
            <input
              className='input7'
              type="tel"
              pattern='[0-9]{10}'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Mobile Number'
              required
            />
          </div>

          <div>
            <label className='label7'>Password:</label>
            <div className="password-field7">
              <input
                className='input7 password-input7'
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your Password 🔐'
                required
              />
              <span className="toggle-icon7" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button className='btn7' type='submit' disabled={!name || !email || !password || !phone}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;