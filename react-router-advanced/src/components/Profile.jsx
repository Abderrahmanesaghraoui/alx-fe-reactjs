import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
};

export default Profile;