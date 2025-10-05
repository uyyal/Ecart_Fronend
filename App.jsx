import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import UserSignup from "./Components/UserSignup";
import AdminSignUp from "./Components/AdminSignUp";
import AdminHomePage from "./Components/AdminHomePage";
import UserHomepage from "./Components/UserHomepage";
import CartProvider from "./Components/CartContext";
import Cart from './Components/Cart' // Import CartProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/AdminLogin' element={<AdminLogin />} />
            <Route path='/UserLogin' element={<UserLogin />} />
            <Route path='/AdminSignUp' element={<AdminSignUp />} />
            <Route path='/AdminHomePage/*' element={<AdminHomePage />} />
            <Route path='/Usersignup' element={<UserSignup />} />
            <Route path='/UserHomepage/*' element={<UserHomepage />} />
             <Route path='/Cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </CartProvider>
  );
};

export default App;
