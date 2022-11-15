import heroImg from "../assets/Group 4028.png"

export default function Hero() {
    return (
        <section className="hero container">
            <div className="hero__text">
                <h1>Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple"> Metaverse</span></h1>
                <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to relaity at your comfort zone.</p>
                <form action="" className="form__area">
                    <input type="search" placeholder="search for location" className="search-location" name="" id="" />
                    <button type="submit" className="submit-location">Search</button>
                </form>
            </div>
            <div className="hero__image">
                <img src={heroImg} alt="" />
            </div>
        </section>
    )
}