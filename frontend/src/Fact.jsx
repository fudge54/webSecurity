
import React, { useEffect, useState } from 'react';

const Fact = ({ token }) => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const getFact = async () => {
      try {
        const response = await fetch('http://localhost:3333/fact', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok && data.fact) {
          setFact(data.fact);
        } else {
          console.error('Failed to fetch Chuck Norris fact.');
        }
      } catch (error) {
        console.error('Error during fetch Chuck Norris fact:', error);
      }
    };

    getFact();
  }, [token]);

  return (
    <>
      <h1>Fact</h1>
      <p>{fact}</p>
    </>
  );
};

export default Fact;
