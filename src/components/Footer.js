import darkLogo from "../assets/Group.png"
import fb from "../assets/facebook-263-721950.png"
import ig from "../assets/instagram-216-721958.png"
import twitter from "../assets/twitter-241-721979.png"
export default function Footer() {
    return (
        <footer>
            <div className="container footer">
                <div className="socials">
                    <img src={darkLogo} alt="metabnb logo" />
                    <div className="social__media">
                        <img src={fb} alt="facebook" />
                        <img src={ig} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>
                    <p>&copy; 2022 Metabnb</p>
                </div>
                <div className="community">
                    <ul>
                        <h3>Community</h3>
                        <li><a href="#" className="footer__links">NFT</a></li>
                        <li><a href="#" className="footer__links">Tokens</a></li>
                        <li><a href="#" className="footer__links">Landlords</a></li>
                        <li><a href="#" className="footer__links">Discord</a></li>
                    </ul>
                </div>
                <div className="places">
                    <ul>
                        <h3>Places</h3>
                        <li><a href="#" className="footer__links">Castle</a></li>
                        <li><a href="#" className="footer__links">Farms</a></li>
                        <li><a href="#" className="footer__links">Beach</a></li>
                        <li><a href="#" className="footer__links">Learn more</a></li>
                    </ul>
                </div>
                <div className="about">
                    <ul>
                        <h3>About Us</h3>
                        <li><a href="#" className="footer__links">Road Map</a></li>
                        <li><a href="#" className="footer__links">Creators</a></li>
                        <li><a href="#" className="footer__links">Career</a></li>
                        <li><a href="#" className="footer__links">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}