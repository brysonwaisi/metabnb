import { Data } from "./Data";
import stars from "../assets/inspiration-images/stars.png";

export default function BNB() {
    console.log(Data);
    return (
        <section className="bnb">
            <div className="container">
                <h1 className="inspiration">Inspiration for your next adventure</h1>
                <div className="grid">
                    {Data()
                        .slice(0, 8)
                        .map((item) => (
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
                </div>

            </div>
        </section>
    )
}