import outline from "../../img/home/yellow_outline.webp"
import card1 from "../../img/home/card1.webp"
import card2 from "../../img/home/card2.webp"
import card3 from "../../img/home/card3.webp"
import card4 from "../../img/home/card4.webp"
import card5 from "../../img/home/card5.webp"
import card6 from "../../img/home/card6.webp"
import category1 from "../../img/home/category1.webp"
import category2 from "../../img/home/category2.webp"
import category3 from "../../img/home/category3.webp"
import category4 from "../../img/home/category4.webp"
import category5 from "../../img/home/category5.webp"
import { Link } from "react-router-dom"



const LLNCategory = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="LLNCategoryBg">
                    <div className="container">
                        <div className="row">
                            <div className="LLNCategoryName">
                                <ul>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category1} alt="category icon" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category2} alt="category icon" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category3} alt="category icon" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category4} alt="Service category Icon" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category5} alt="Service category" className="img-fluid" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LLNCategoryCardBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="LLNCategoryCard">
                                    <div className="LLNCategoryCardContent">
                                        <h4>Little lambs nursery the difference</h4>
                                        <img src={card1} alt="Card Icon" className="img-fluid" />
                                        <Link to="/LLN-the-difference">
                                            <button>Explore</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="LLNCategoryCard">
                                    <div className="LLNCategoryCardContent">
                                        <h4>Facilities</h4>
                                        <img src={card2} alt="Books" className="img-fluid" />
                                        <Link to="/facilities">
                                            <button>Explore</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="LLNCategoryCard">
                                    <div className="LLNCategoryCardContent">
                                        <h4>Curriculum</h4>
                                        <img src={card3} alt="Flower Icon" className="img-fluid" />
                                        <Link to="/curriculum">
                                            <button>Explore</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="LLNCategoryCard">
                                    <div className="LLNCategoryCardContent">
                                        <h4>Little lambs nursery
                                            Programmes</h4>
                                        <img src={card4} alt="Service card Icon" className="img-fluid" />
                                        <Link to="/programmes">
                                            <button>Explore</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="LLNCategoryCard">
                                    <div className="LLNCategoryCardContent">
                                        <h4>Offers</h4>
                                        <img src={card5} alt="Nursery Class Room" className="img-fluid" />

                                        <Link to="/offers">
                                            <button>Explore</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="LLNCategoryCard">
                                    <div className="LLNCategoryCardContent">
                                        <h4>Health & Safety</h4>
                                        <img src={card6} alt="Learning Products" className="img-fluid" />
                                        <Link to="/health-and-safety">
                                            <button>Explore</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LLNCategory