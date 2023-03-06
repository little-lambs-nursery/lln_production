import './Home.css'
import enrollBtn from "../../../src/img/home/enrollButton.webp"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import slider1 from "./../../img/home/slider1.webp"
import slider2 from "./../../img/home/slider2.webp"
import slider3 from "./../../img/home/slider3.webp"
import Axios from "axios";
import { BASEURL } from '../../Constents/Constents';

const Header = () => {

    const [input, setInput] = useState({});
    const [program, setProgram] = useState();
    const [offer, setOffer] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("child name:", input.childName);
        console.log("child age:", input.childAge);
        console.log("parent name:", input.parentName);
        console.log("parent number:", input.parentNumber);
        console.log("email:", input.email);
        console.log("Program:", program);
        console.log("Offer:", offer);

        await Axios.post(`${BASEURL}api/enrollData`, {
            childName: input.childName,
            childAge: input.childAge,
            parentName: input.parentName,
            parentNumber: input.parentNumber,
            email: input.email,
            program: program,
            offer: offer
        });
    };

    return (
        <>

            <section className="container-fluid p-0">
                <div className="homeHeaderBg">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="homeHeaderSlider">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"fade"}
                                    fadeEffect={{
                                        crossFade: true
                                    }}
                                    navigation={true}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src={slider1} alt="Child" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={slider2} alt="Child" className="img-fluid" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={slider3} alt="Child" className="img-fluid" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className='homeHeaderOverlay'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='homeHeaderTagLine'>
                                        <h1>Love to Learn at Little Lambs</h1>
                                        <h2><span className='loving'>Loving</span>, <span className='learning'>Learning</span>, <span className='nurturing'>Nurturing</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='container headerFormContent'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'></div>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='enrollFormModal'>
                                    <div className="contactFormTitle">
                                        <div className="contactFormTitleName">
                                            <h2>Enroll Your Child</h2>
                                        </div>
                                        <div className="contactFormTitleBefore"></div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="formGroup row">
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        id="childName"
                                                        name="childName"
                                                        placeholder="Himanshu Sharma"
                                                        value={input.childName || ""}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="childName">Child Name</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="childAge"
                                                        name="childAge"
                                                        placeholder="9"
                                                        value={input.childAge || ""}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="childAge">Child Age</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        id="parentName"
                                                        name="parentName"
                                                        placeholder="Himanshu Sharma"
                                                        value={input.parentName || ""}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="parentName">Parent Name</label>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="parentNumber"
                                                        name="parentNumber"
                                                        placeholder="9555271705"
                                                        value={input.parentNumber || ""}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="parentNumber">Parent Number</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="sharmagi1998@gmail.com"
                                                        value={input.email || ""}
                                                        onChange={handleChange}
                                                    />
                                                    <label for="email">Email Address</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-floating mb-3">
                                                    <select
                                                        className="form-select"
                                                        id="program"
                                                        name="program"
                                                        value={program}
                                                        onChange={(e) => {
                                                            setProgram(e.target.value);
                                                        }}
                                                    >
                                                        <option selected>Select Program</option>
                                                        <option value="Pre School">Pre School</option>
                                                        <option value="Nursery">Nursery</option>
                                                        <option value="Foudation Stages">Foudation Stages</option>
                                                        <option value="Smart Juniors">Smart Juniors</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-floating mb-3">
                                                    <select
                                                        className="form-select"
                                                        id="offer"
                                                        name="offer"
                                                        value={offer}
                                                        onChange={(e) => {
                                                            setOffer(e.target.value);
                                                        }}
                                                    >
                                                        <option selected>Select Offer</option>
                                                        <option value="Easy Start">Easy Start</option>
                                                        <option value="Start Smart">Start Smart</option>
                                                        <option value="Growth Plan">Growth Plan</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formGroup row">
                                            <div className="col-12">
                                                <div className="formBtn">
                                                    {input.childName == undefined ||
                                                        input.childAge == undefined ||
                                                        input.parentName == undefined ||
                                                        input.parentNumber == undefined ||
                                                        input.email == undefined ||
                                                        program == undefined ||
                                                        offer == undefined ? (
                                                        <button className="w-100 disable">Submit</button>
                                                    ) : (
                                                        <button className="w-100">Submit</button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </section>
        </>
    )
}

export default Header