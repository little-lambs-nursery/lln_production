import './Difference.css'
import HEALTHY_ENVIRONMENT from '../../img/difference/HEALTHY_ENVIRONMENT.webp'
import personalized_growth from '../../img/difference/personalized_growth.webp'
import equality_of_opportunity from '../../img/difference/equality_of_opportunity.webp'
import innovative_IT_Stem_lab from '../../img/difference/innovative_IT_Stem_lab.webp'
import REGULAR_EXPLORATION from '../../img/difference/REGULAR_EXPLORATION.webp'
import partnership_with_parents from '../../img/difference/partnership_with_parents.webp'

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="aboutHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title aboutTitle">
                                    <h2>THE DIFFERENCE</h2>
                                    <p>WHY CHOOSE Little Lambs Nursery</p>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='differenceHeaderImg'>
                                    <img src={HEALTHY_ENVIRONMENT} alt="HEALTHY_ENVIRONMENT" className='img-fluid' />
                                    <div className='differenceHeaderImgName blue'>
                                        <p>HEALTHY ENVIRONMENT</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='differenceHeaderImg'>
                                    <img src={personalized_growth} alt="personalized_growth" className='img-fluid' />
                                    <div className='differenceHeaderImgName pink'>
                                        <p>personalized growth </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='differenceHeaderImg'>
                                    <img src={equality_of_opportunity} alt="equality_of_opportunity" className='img-fluid' />
                                    <div className='differenceHeaderImgName blue'>
                                        <p>equality of opportunity</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='differenceHeaderImg'>
                                    <img src={innovative_IT_Stem_lab} alt="innovative_IT_Stem_lab" className='img-fluid' />
                                    <div className='differenceHeaderImgName pink'>
                                        <p>innovative IT and Stem lab</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='differenceHeaderImg'>
                                    <img src={REGULAR_EXPLORATION} alt="REGULAR_EXPLORATION" className='img-fluid' />
                                    <div className='differenceHeaderImgName blue'>
                                        <p>rEGULAR eXPLORATION</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='differenceHeaderImg'>
                                    <img src={partnership_with_parents} alt="partnership_with_parents" className='img-fluid' />
                                    <div className='differenceHeaderImgName pink'>
                                        <p>partnership with parents </p>
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