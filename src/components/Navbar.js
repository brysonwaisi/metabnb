import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/metabnb-logo.svg"
import Modal from "./Modal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <div className="container row">
                <a href="#" className="logo">
                    <img src={Logo} alt="metabnb nft place" />
                </a>
                <nav className="navbar">
                    <ul className="nav__list nav__list--primary">
                        <li><Link to="/" className="nav__item">Home</Link></li>

                        <li><Link to="/placestostay" className="nav__item">Place to Stay</Link></li>
                        <li>

                            <a href="#" className="nav__item">Places</a>
                        </li>
                        <li><a href="#" className="nav__item">Community</a></li>
                    </ul>
                    <ul className="nav__list">
                        <li><a href="#" className="nav__item btn-cta" onClick={() => setIsOpen(true)}>Connect Wallet</a></li>
                        {isOpen && <Modal setIsOpen={setIsOpen} />}
                    </ul>
                </nav>
            </div>
        </header>
    )
}