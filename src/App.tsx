import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    // Fetch data from the FastAPI backend
    axios.get('http://127.0.0.1:8000/api/data')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default function Homepage() {
  return (
    <>
      <div className="h-screen w-screen bg-red-500 text-red-700">This is the about</div>
    </>
  );
}

