import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import useAuth hook

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the useAuth hook

  const handleLogin = () => {
    login(); // Call the login function from useAuth
    navigate('/profile');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;