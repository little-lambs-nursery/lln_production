import './Programmes.css'
import React from 'react'
import blader_bowl from '../../img/program/blader_bowl.webp'
import CAMP from '../../img/program/CAMP.webp'
import PEP from '../../img/program/PEP.webp'
import Smart_Juniorz_Program from '../../img/program/Smart_Juniorz_Program.webp'
import ITSTEM_program from '../../img/program/ITSTEM_program.webp'
import AEP from '../../img/program/AEP.webp'
import CLP from '../../img/program/CLP.webp'
import SSEP from '../../img/program/SSEP.webp'

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="aboutHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title aboutTitle">
                                    <h2>PROGRAMMES</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-5'>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={blader_bowl} alt="blader_bowl" className="img-fluid" />
                                    <div className='programHeaderCardName one'>
                                        <h4>blader & bowl</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={CAMP} alt="CAMP" className="img-fluid" />
                                    <div className='programHeaderCardName two'>
                                        <h4>Child Anxiety Multi-day program</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={PEP} alt="PEP" className="img-fluid" />
                                    <div className='programHeaderCardName three'>
                                        <h4>Picky Eating Program</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={Smart_Juniorz_Program} alt="Smart Juniorz Program" className="img-fluid" />
                                    <div className='programHeaderCardName four'>
                                        <h4>Smart Juniorz Program</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={ITSTEM_program} alt="IT/STEM program" className="img-fluid" />
                                    <div className='programHeaderCardName five'>
                                        <h4>IT/STEM program</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={AEP} alt="AEP" className="img-fluid" />
                                    <div className='programHeaderCardName six'>
                                        <h4>Academic Enrichment Program</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={CLP} alt="CLP" className="img-fluid" />
                                    <div className='programHeaderCardName seven'>
                                        <h4>Communication & Language Program</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                                <div className='programHeaderImgCard'>
                                    <img src={SSEP} alt="SSEP" className="img-fluid" />
                                    <div className='programHeaderCardName eight'>
                                        <h4>Social Studies Education Program</h4>
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