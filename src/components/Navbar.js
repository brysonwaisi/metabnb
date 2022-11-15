import { Link } from "react-router-dom";
import Logo from "../assets/metabnb-logo.svg"

export default function Navbar() {
    return (
        <header>
            <div className="container row">
                <a href="#" className="logo">
                    <img src={Logo} alt="metabnb nft place" />
                </a>
                <nav className="navbar">
                    <ul className="nav__list nav__list--primary">
                        <li><a href="#" className="nav__item">Home</a></li>
                        <li><a href="#" className="nav__item">Place to Stay</a></li>
                        <li>
                            <Link to="/places" className="nav__item">Places</Link>
                        </li>
                        <li><a href="#" className="nav__item">Community</a></li>
                    </ul>
                    <ul className="nav__list">
                        <li><a href="#" className="nav__item btn-cta">Connect Wallet</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}