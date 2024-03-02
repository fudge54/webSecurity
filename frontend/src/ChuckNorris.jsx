
import React, { useState, useEffect } from 'react';

const ChuckNorris = ({ token }) => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

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
          // Set the fact in state
          setFact(data.fact);
        } else {
          // Handle the case when the request fails
          console.error('Failed to fetch Chuck Norris fact.');
        }

        // Set loading to false, regardless of the result
        setLoading(false);
      } catch (error) {
        console.error('Error during fetch Chuck Norris fact:', error);
        // Set loading to false in case of an error
        setLoading(false);
      }
    };

    // Call getFact when the component is mounted
    getFact();
  }, [token]);

  return (
    <>
      <h1>Chuck Norris Fact</h1>
      {loading ? <p>Loading...</p> : <p>{fact}</p>}
    </>
  );
};

export default ChuckNorris;
