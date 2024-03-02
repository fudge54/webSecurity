
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Fact from './Fact';
import Logout from './Logout';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    setToken('');
  };

  return (
    <div className="app">
      {!token && <LoginForm onLogin={handleLogin} />}
      {token && (
        <>
          <Fact token={token} />
          <Logout onLogout={handleLogout} />
        </>
      )}
    </div>
  );
}

export default App;
