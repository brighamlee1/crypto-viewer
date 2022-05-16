import { Link } from 'react-router-dom';

function Header() {
    return (
        <section className='nav-box'>
            <nav>
                <Link to="/">
                    <h1>Crypto Viewer</h1>
                </Link>
                <Link to="/news">
                    <h1>News</h1>
                </Link>
            </nav>
        </section>
    )
}

export default Header;