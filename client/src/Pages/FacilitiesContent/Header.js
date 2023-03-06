import category1 from "../../img/home/category1.webp"
import category2 from "../../img/home/category2.webp"
import category3 from "../../img/home/category3.webp"
import category4 from "../../img/home/category4.webp"
import category5 from "../../img/home/category5.webp"

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="aboutHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title aboutTitle">
                                    <h1>Facilities</h1>
                                    <p>WE CATER FOR THE BELOW AGE GROUP</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="LLNCategoryName">
                                <ul>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category1} alt="Baby" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category2} alt="Toddler" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category3} alt="Nursery" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category4} alt="Foundation Stage 1" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="LLNCategoryCircle">
                                            <img src={category5} alt="Foundation Stage 2" className="img-fluid" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
