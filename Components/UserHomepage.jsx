import React from 'react';
import UserNavbar from './UserNavbar';
import UserViewItems from './UserViewItems';
import Cart from './Cart';
import { Routes, Route } from 'react-router-dom';

const UserHomepage = () => {
  return (
    <div className='UserHomepage'>
      <UserNavbar />
      <Routes>
        <Route path='/' element={<UserViewItems />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default UserHomepage;
