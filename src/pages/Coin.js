import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Coin(props) {

    const [coin, setCoin] = useState(null);

    const params = useParams();
    console.log(params);
    const coinId = params.id;

    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/`;

    const getCoin = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCoin(data);
    }

    useEffect(() => {
        getCoin();
    }, [])


    if (!coin) {
        return (
            <h1>Loading ... </h1>
        )
    }
    return (
        <div className="coin-container">
            <div className="coin-box">
                <div className="titlearea-show-page">
                    <h2>{coin.name}</h2>
                    <h3>({coin.symbol.toUpperCase()})</h3>
                    <img className='show-image' src={coin.image.large} alt={coin.symbol} />
                </div>
                <div className="coin-numbers">
                    <div className="coin-boxes">
                        <h3>Price</h3>
                        <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
                    </div>
                    <div className="coin-boxes">
                        <h3>Market Cap</h3>
                        <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                    </div>
                    <div className="coin-boxes">
                        <h3>Rank</h3>
                        <p>#{coin.market_data.market_cap_rank}</p>
                    </div>
                    <div className="coin-boxes">
                        <h3>Volume</h3>
                        <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
                    </div>
                    <div className="coin-boxes">
                        <h3>All Time High</h3>
                        <p>${coin.market_data.ath.usd.toLocaleString()}</p>
                    </div>
                    <div className="coin-boxes">
                        <h3>All Time Low</h3>
                        <p>${coin.market_data.atl.usd.toLocaleString()}</p>
                    </div>
                    <div className="coin-boxes">
                        <h3>24h Change</h3>
                        {coin.market_data.price_change_percentage_24h < 0 ?
                            <p className="red">{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                            : <p className="green">{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                        }
                    </div>
                    <div className="coin-boxes">
                        <h3>7d Change</h3>
                        {coin.market_data.price_change_percentage_7d < 0 ?
                            <p className="red">{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                            : <p className="green">{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                        }
                    </div>
                    <div className="coin-boxes">
                        <h3>14d Change</h3>
                        {coin.market_data.price_change_percentage_14d < 0 ?
                            <p className="red">{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>
                            : <p className="green">{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>
                        }
                    </div>
                    <div className="coin-boxes">
                        <h3>30d Change</h3>
                        {coin.market_data.price_change_percentage_30d < 0 ?
                            <p className="red">{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>
                            : <p className="green">{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>
                        }
                    </div>
                    <div className="coin-boxes">
                        <h3>60d Change</h3>
                        {coin.market_data.price_change_percentage_60d < 0 ?
                            <p className="red">{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>
                            : <p className="green">{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>
                        }
                    </div>
                    <div className="coin-boxes">
                        <h3>1y Change</h3>
                        {coin.market_data.price_change_percentage_1y < 0 ?
                            <p className="red">{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
                            : <p className="green">{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin;