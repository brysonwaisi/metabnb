import Navbar from "../../Navbar"
import Footer from "../../Footer"
import { Data } from "../../Data"
import stars from "../../../assets/inspiration-images/stars.png";
import settingsIcon from "../../../assets/setting-icon.svg"

export default function PlacesToStay() {
    const filterNames = [
        "Restaurant",
        "Cottage",
        "Castle",
        "fantasy city",
        "beach",
        "Carbins",
        "Off-grid",
        "Farm"
    ]
    return (
        <>
            <Navbar />
            <main className="container">

                <section>
                    <div className="row filter__section">

                        {filterNames.map((filterName) => (
                            <button className="filter-btn" key={filterName}>{filterName}</button>
                        ))}
                        <button className="location__select">
                            <p>Location</p>
                            <img src={settingsIcon} alt="" />
                        </button>
                    </div>
                </section>
                <section className="grid places__section">
                    {Data().map((item) => (
                        <div
                            key={item.id}
                            className="grid-item"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                            />
                            <section>
                                <div className="">
                                    <p>{item.name}</p>
                                    <p>{item.size}</p>
                                </div>
                                <div className="">
                                    <p>{item.distance}</p>
                                    <p>{item.duration}</p>
                                </div>
                                {/* stars */}
                                <img src={stars} alt="stars" />
                            </section>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}