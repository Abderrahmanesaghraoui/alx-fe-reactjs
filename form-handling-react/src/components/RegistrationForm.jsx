import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call for user registration
      console.log('Form submitted:', { username, email, password });
      alert('Registration successful!');
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>User Registration</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username} // Explicitly bind value to username state
            onChange={handleChange}
          />
        </label>
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email} // Explicitly bind value to email state
            onChange={handleChange}
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password} // Explicitly bind value to password state
            onChange={handleChange}
          />
        </label>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;