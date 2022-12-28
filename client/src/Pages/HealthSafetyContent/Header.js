import './HealthSafety.css'
import header1 from '../../img/health&support/header1.webp'
import header2 from '../../img/health&support/header2.webp'
import header3 from '../../img/health&support/header3.webp'

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="aboutHeaderBg">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="offerHeaderImg">
                                    <img src={header1} alt="header1" className='img-fluid' />
                                    <h2>Maintenance</h2>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="offerHeaderImg">
                                    <img src={header2} alt="header2" className='img-fluid' />
                                    <h2>Trained Staff</h2>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="offerHeaderImg">
                                    <img src={header3} alt="header3" className='img-fluid' />
                                    <h2>Safe & Secure</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
