import './App.css';
import { useEffect, useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

function App() {
  const [crypto, setCrypto] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const getCrypto = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setCrypto(data);
};

useEffect(() => {
  getCrypto();
}, [])

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
