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
                                    <h2>Why choose Little Lambs Nursery</h2>
                                    <p>Little Lambs Nursery is an all-rounder nurturing British Curriculum Nursery following the Early Years Foundation Stage (EYFS) located in the heart of Al Mankhool area. With our friendly and highly qualified staff and modern facilities, we at Little Lambs not only provide a healthy, safe and secure learning environment for our children, but also an enabling learning space alongside the high safety standards, which will promote positivity of learning and fun for the kids. Little Lambs Nursery accepts children from 45 days-5 years. We at LLN strongly believe and promote the ideology that ‘every child is unique’. Our aim is to develop the child’s potential and build on the inspiration of learning in their world so that they ‘Love to Learn at Little Lambs’.</p>
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
