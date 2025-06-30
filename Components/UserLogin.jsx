import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Styles/UserLogin.css';

const UserLogin = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchusers() {
      let data1 = await fetch('http://localhost:8080/users');
      let res = await data1.json();
      setUser(res);
    }
    fetchusers();
  }, []);

  function CreateUser(e) {
    e.preventDefault();
    const val = user.filter((y) => y.email === Email && y.password === password);
    if (val.length > 0) {
      toast.success("User Login Successful");
      navigate('/UserHomepage');
    } else {
      toast.error("User Login Failed");
    }
  }

  return (
    <div className='UserBody'>
      <div className='userloginimg'>
        <img
          className='user_img'
          src="https://blog.emb.global/wp-content/uploads/2024/01/Top-AI-Tools-for-E-commerce-Product-Descriptions-1.jpg"
          alt="User Login"
        />
      </div>

      <div className='UserLogin'>
        <form className='form2' onSubmit={CreateUser}>
          <img
            className='img2'
            src="https://th.bing.com/th?q=Kid+Avatar+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
            alt="avatar"
          />
          <p>😍 Welcome!</p>

          <label className="label2">Email:</label>
          <input
            className='input2'
            type="email"
            value={Email}
            onChange={(g) => setEmail(g.target.value)}
            placeholder='Enter Your Email'
            required
          />

          <label className='label2'>Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              className='input2'
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(g) => setPassword(g.target.value)}
              placeholder='Enter Password'
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '10px',
                cursor: 'pointer',
                fontSize: '18px'
              }}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <button className='btn2' type='submit'>Login</button>
          <span className='spann'>Click here to <Link to='/Usersignup'>Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
