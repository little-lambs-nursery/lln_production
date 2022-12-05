import img1 from '../../img/difference/1.webp'
import img2 from '../../img/difference/2.webp'
import img3 from '../../img/difference/3.webp'
import arrow from '../../img/icons/Arrow.png'
import arrowBig from '../../img/icons/ArrowBig.png'
import EnrollFormModal from '../Includes/EnrollForm/EnrollFormModal'
import React, {useState} from "react"

const LLNOffers = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <EnrollFormModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <section className="container-fluid p-0">
                <div className="LLNOfferBg">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-9">
                                <div className="LLNOfferTitle">
                                    <h2>LLN- offers</h2>
                                    <p>Flexible Plans</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-9">
                                <div className="LLNOfferCardBox">
                                    <div className="LLNOfferCard">
                                        <div className="LLNOfferCardIconBox">
                                            <div className="LLNOfferCardIcon">
                                                <img src={img1} alt="img1" className='img-fluid' />
                                            </div>
                                            <div className="LLNOfferCardName">
                                                <h4>Easy Start</h4>
                                            </div>
                                        </div>
                                        <div className='LLNOfferCardContent'>
                                            <ul>
                                                <li><span>5% </span> DISCOUNT</li>
                                                <li>Termly payment </li>
                                            </ul>
                                            <button  onClick={() => setModalShow(true)}>CHOOSE PLAN <img src={arrow} alt="arrow" className='img-fluid' /></button>
                                        </div>
                                    </div>

                                    <div className="LLNOfferCard popular">
                                        <div className="LLNOfferCardIconBox">
                                            <div className="LLNOfferCardIcon">
                                                <img src={img2} alt="img2" className='img-fluid' />
                                            </div>
                                            <div className="LLNOfferCardName">
                                                <h4>Start Smart</h4>
                                            </div>
                                        </div>
                                        <div className='LLNOfferCardContent'>
                                            <ul>
                                                <li><span>20% </span> DISCOUNT</li>
                                                <li>Annual payment  </li>
                                            </ul>
                                            <button onClick={() => setModalShow(true)}>CHOOSE PLAN <img src={arrowBig} alt="arrow" className='img-fluid' /></button>
                                        </div>
                                    </div>

                                    <div className="LLNOfferCard">
                                        <div className="LLNOfferCardIconBox">
                                            <div className="LLNOfferCardIcon">
                                                <img src={img3} alt="img3" className='img-fluid' />
                                            </div>
                                            <div className="LLNOfferCardName">
                                                <h4>Growth Plan</h4>
                                            </div>
                                        </div>
                                        <div className='LLNOfferCardContent'>
                                            <ul>
                                                <li><span>10% </span> DISCOUNT</li>
                                                <li>Half Yearly Payment</li>
                                            </ul>
                                            <button onClick={() => setModalShow(true)}>CHOOSE PLAN <img src={arrow} alt="arrow" className='img-fluid' /></button>
                                        </div>
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

export default LLNOffers