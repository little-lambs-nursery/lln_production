import './About.css';
import header1 from '../../img/about/header1.webp'
import header2 from '../../img/about/header2.webp'
import header3 from '../../img/about/header3.webp'
import header4 from '../../img/about/header4.webp'
import header5 from '../../img/about/header5.webp'

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="aboutHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title aboutTitle">
                                    <h1>about Us</h1>
                                </div>
                            </div>
                        </div>
                        <div className='headerImgBox'>
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <div className="headerImage start">
                                        <img src={header2} alt="Nursery School" className='img-fluid' />
                                        <img src={header3} alt="Play School" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                                    <div className="headerImage middle">
                                        <img src={header4} alt="Play School" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                    <div className="headerImage end">
                                        <img src={header5} alt="Play Schoo" className='img-fluid' />
                                        <img src={header1} alt="Kids' Play School" className='img-fluid' />
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

export default Header