import healthy_environment from "../../img/home/healthy_environment.webp"
import best_price from "../../img/home/best_price.webp"
import eyfs from "../../img/home/eyfs.webp"

const WhyLL = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="whyLLBg">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="title whyLL">
                                    <h2>why little lambs nursery</h2>
                                    <p>Little Lambs Nursery Dubai, a British curriculum nursery (EYFS), located in the heart of Mankool. We at Little Lambs Nursery promises to provide a learning adventure combined with enjoyment and entertainment along with a secure learning environment for your little ones.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="whyLLCard">
                                    <div className="whyLLCardIcon one">
                                        <img src={healthy_environment} alt="healthy_environment" className="img-fluid" />
                                    </div>
                                    <div className="whyLLCardContent">
                                        <h4>Healthy Learning <br />Environment</h4>
                                        <p>Little Lambs Nursery engages children in highest quality
                                            learning by creating an environment both
                                            indoors and outdoors which is healthy, age
                                            appropriate, enabling, relevant, enjoyable,
                                            stimulating, meaningful, active and inviting.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="whyLLCard">
                                    <div className="whyLLCardIcon two">
                                        <img src={best_price} alt="best_price" className="img-fluid" />
                                    </div>
                                    <div className="whyLLCardContent">
                                        <h4>Best Price & <br />Offers</h4>
                                        <p>Little Lambs Nursery is offering the highest quality education at the best prices, We have made our plans & offers very feasable for parents at unbeatable prices.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="whyLLCard">
                                    <div className="whyLLCardIcon three">
                                        <img src={eyfs} alt="eyfs" className="img-fluid" />
                                    </div>
                                    <div className="whyLLCardContent">
                                        <h4>Early Year Foundation <br />Stage based Learning</h4>
                                        <p>Little Lambs Nursery Follows EYFS based learning programme,
                                            the first curriculum in England to cross the
                                            division between pre school and school.</p>
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

export default WhyLL