import React from "react";
import { Link } from "react-router-dom";
import AdminAccount from './AdminDropdown';
import '../Styles/AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <div className="AdminNavbar">
        <div className="logo">
        <h1>E <span>Kart</span></h1>
        </div>

        <div className="links">
          <Link to='/AdminHomePage/AdminAddProducts'>Add Items</Link>
         <Link to='/AdminHomePage/AdminViewItems'>ShoppingList</Link>
         </div>
          <div className="account">
            <AdminAccount/>
          </div>

      
    </div>
    
  )
}

export default AdminNavbar
