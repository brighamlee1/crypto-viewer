import './styles/CryptoList.css';
import './styles/HeaderFooter.css';
import './styles/Search.css';
import './styles/Coin.css';
import './styles/News.css';
import './styles/Theme.css';
import { useEffect, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Coin from './pages/Coin';
import CryptoList from './pages/CryptoList';
import Header from './components/Header';
import Title from './components/Title';
import Search from './components/Search';
import Footer from './components/Footer';
import News from './pages/News';

export const ThemeContext = createContext('');

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : '')

  const toggleTheme = () => {
    setTheme((curr) => curr === "" ? "dark" : "")
  }

  const filteredCoins = crypto.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()
    ));

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d/";

  const getCrypto = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setCrypto(data);
  };

  const handleChange = async (e) => {
    await e.preventDefault();
    setSearch(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase())
  }
  const onClick = () => {
    setSearch('');
  }
  useEffect(() => {
    getCrypto();
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
        />
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
                crypto={filteredCoins}
                onClick={onClick}
              />
              <Footer />
            </>
          }
          />
          <Route
            path="/:id"
            element={
              <>
                <Coin />
                <Footer />
              </>
            }
          />
          <Route
            path="/news"
            element={
              <>
                <News />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
