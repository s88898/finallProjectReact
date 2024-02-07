import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import BusinessDetails from "./BusinessDetails/BusinessDetails";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MDetailsStore from '../Data/Stores/MDetailsStore';

function ManagementPage() {

  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    MDetailsStore.setManagerEntrance(false);
    window.location.href = '../../App';
  };

  return (
    <>
      <Tooltip title="LogOut">
  <div>
    <IconButton onClick={handleLogout}>
      <ArrowBackIcon />
    </IconButton>
    LogOut
  </div>
</Tooltip>


      <BusinessDetails />
      <Button variant="contained" component={Link} to="/admin/services">
        Services
      </Button>

      <Button variant="contained" component={Link} to="/admin/appointments">
        Appointments
      </Button>

      <Outlet />

    </>
  );
}

export default ManagementPage;
