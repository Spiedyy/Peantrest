"use client";
import React, { useState, useEffect } from 'react';
import Cards from './card';

function Fetch() {
  const [data, setData] = useState<APIResponse | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/images')
      .then((response) => response.json())
      .then((result: APIResponse) => setData(result))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <Cards data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Fetch;
