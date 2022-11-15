import ctaFrame from "../assets/Frame 59546.png"
export default function CTA() {
    return (
        <section className="cta">
            <div className="container row">
                <div className="text__section">

                    <h2>Metabnb NFTS</h2>
                    <p>Discover our NFT gift card collection. Loyal customers get amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.</p>
                    <button className="btn-learn-more">Learn more</button>
                </div>
                <div className="img__section">
                    <img src={ctaFrame} alt="NFt in airbnbs" />
                </div>
            </div>
        </section>
    )
}