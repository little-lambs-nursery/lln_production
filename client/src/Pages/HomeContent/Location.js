import rightArrow from "../../img/home/right.webp"


const Location = () => {
    return (
        <>
            <section className="conatiner-fluid p-0">
                <div className="homeLocationBg">
                    <div className="container">
                        <div className="homeLocationBox">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="homeLocationContent">
                                        <p>Villa no 22,
                                            317- 33rd Street,
                                            Near Mankhool Park/ADCB metro station,
                                            Bur Dubai</p>
                                        <button>Visit Now <img src={rightArrow} alt="rightArrow" className="img-fluid" /></button>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="homeLocationContentMap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7431108652836!2d55.2925325150104!3d25.245575983873746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ec1946262012e6f!2zMjXCsDE0JzQ0LjEiTiA1NcKwMTcnNDEuMCJF!5e0!3m2!1sen!2sin!4v1666863547094!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Location