import { Link } from 'react-router-dom';

function CryptoList(props) {
    const crypto = props.crypto;

    return (
        <>
            <div className="labels">
                <div className="labels-row">
                    <div className="labels-coin">
                        <p>Coin</p>
                    </div>
                    <div className="labels-data">
                        <p className="symbol-label">Symbol</p>
                        <p className="price-label">Price</p>
                        <p className="label-24h">24h Change</p>
                        <p className="label-7d">7d Change</p>
                        <p className="market-cap-label">Market Cap</p>
                    </div>
                </div>
            </div>
            {crypto.map((coin, idx) => {
                return (
                    <div className="crypto-list" key={idx}>
                        <Link to={`/${coin.id}`}>
                            <div className="crypto-row">
                                <div className="crypto-coin">
                                    <img src={coin.image} />
                                    <h1>{coin.name}</h1>
                                </div>
                                <div className="crypto-data">
                                    <p className="symbol">{coin.symbol.toUpperCase()}</p>
                                    <p className="price">${coin.current_price.toLocaleString()}</p>
                                    {coin.price_change_percentage_24h_in_currency < 0 ? (
                                        <p className="percentage-24h
                                    red">
                                            {coin.price_change_percentage_24h_in_currency.toFixed(2)}%</p>
                                    ) : (
                                        <p className="percentage-24h
                                    green">{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</p>
                                    )}
                                    {coin.price_change_percentage_7d_in_currency < 0 ? (
                                        <p className="price-7d red">{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</p>
                                    ) : (
                                        <p className="price-7d green">{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</p>
                                    )
                                    }
                                    <p className="market-cap">${coin.market_cap.toLocaleString()}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
            }
        </>
    )
}

export default CryptoList;