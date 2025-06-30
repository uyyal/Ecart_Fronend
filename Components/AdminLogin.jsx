import React, { useEffect, useState } from 'react';
import '../Styles/AdminLogin.css';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [admin, setAdmin] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAdmin() {
      try {
        const data = await fetch('http://localhost:8080/Admin');
        const res = await data.json();
        setAdmin(res);
      } catch (err) {
        toast.error("Failed to fetch admin data");
      }
    }
    fetchAdmin();
  }, []);

  const login = (e) => {
    e.preventDefault();
    const val = admin.filter((x) => x.email === Email && x.password === password);
    if (val.length > 0) {
      toast.success("Login Successfully");
      navigate('/AdminHomePage');
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div id='AdminBody'>
      <div className='AdminLogin'>
        <big className='big1'>Welcome to AdminLogin &#128525;</big>
        <br /><br />
        <form className='form1' onSubmit={login}>
          <img
            className='img1'
            src="https://www.bing.com/th/id/OIP.wQFQco1izbZGsWcSyy9aUQHaHa?w=191&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Admin"
          />
          <label className='label1'>Email:</label>
          <input
            className='input1'
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Your Email'
            required
          />
          <br /><br />
          <label className='label1'>Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              className='input1'
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'
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
          <br /><br />
          <button type="submit" className='btn1'>Login</button>
          <br /><br />
          <span className='span1'><Link to='/AdminSignUp'>Create New Account</Link></span>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
