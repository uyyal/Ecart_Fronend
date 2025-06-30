import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AdminAccount = () => {
  const navigate = useNavigate();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <AccountCircleIcon /> Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate('/AdminHomePage/AccountInfo')}>Account Info</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate('/')}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AdminAccount;
