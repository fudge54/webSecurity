
import React from 'react';

function Logout({ onLogout, token }) {
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      // Send request to /logout API endpoint
      const response = await fetch('http://localhost:3333/logout', {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      // Call onLogout with API message as input.
      onLogout(data.message);

      // Parent App component needs to be notified that logout has occurred.
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Logout;
