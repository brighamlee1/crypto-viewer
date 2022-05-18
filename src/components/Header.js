import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';

function Header(props) {
    return (
        <section className='nav-box'>
            <nav>
                <div className="toggle-theme">
                    <ReactSwitch
                        onChange={props.toggleTheme}
                        checked={props.theme === "dark"}
                        offColor="#272761"
                        onColor="#272761"
                        offHandleColor="#fff"
                        onHandleColor="#000"
                    />
                </div>
                <Link to="/">
                    <h1 className="crypto-viewer-link">Crypto Viewer</h1>
                </Link>
                <Link to="/news">
                    <h1 className="news-link">News</h1>
                </Link>
            </nav>
        </section>
    )
}

export default Header;