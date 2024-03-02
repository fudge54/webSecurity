
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic input validation
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3333/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.uuid) {
        // Authenticated
        const token = data.uuid;
        onLogin(token);
      } else {
        // Authentication failed
        const message = data.message || 'Authentication failed.';
        alert(message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 5 }}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 5 }}>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
