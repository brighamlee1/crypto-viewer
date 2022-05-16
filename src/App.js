import './styles/CryptoList.css';
import './styles/HeaderFooter.css';
import './styles/Search.css';
import './styles/Coin.css';
import './styles/News.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Coin from './components/Coin';
import CryptoList from './components/CryptoList';
import Header from './components/Header';
import Title from './components/Title';
import Search from './components/Search';
import Footer from './components/Footer';
import News from './components/News';

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');

  const filteredCoins = crypto.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d/";

  const getCrypto = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setCrypto(data);
  };

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase())
  }

  useEffect(() => {
    getCrypto();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Title />
            <Search
              type="text"
              placeholder="Search by coin name"
              onChange={handleChange}
            />
            <CryptoList
              crypto={filteredCoins} />
            <Footer />
          </>
        }
        />
        <Route
          path="/:id"
          element={<Coin />}
        />
        <Route
          path="/news"
          element={<News />}
        />
      </Routes>
    </div>
  );
}

export default App;
