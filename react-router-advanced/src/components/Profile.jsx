import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom'; // Import Routes, Route, and Outlet
import ProfileDetails from './ProfileDetails'; // Import ProfileDetails
import ProfileSettings from './ProfileSettings'; // Import ProfileSettings

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes will render here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} /> {/* Nested route for ProfileDetails */}
        <Route path="settings" element={<ProfileSettings />} /> {/* Nested route for ProfileSettings */}
      </Routes>

      {/* Outlet is used to render nested routes */}
      <Outlet />
    </div>
  );
};

export default Profile;