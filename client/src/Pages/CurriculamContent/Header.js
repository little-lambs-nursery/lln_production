import './Curriculum.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import curriculumHeaderSlider1 from '../../img/curriculum/curriculumHeaderSlider1.webp'
import curriculumHeaderSlider2 from '../../img/curriculum/curriculumHeaderSlider2.webp'
import curriculumHeaderSlider3 from '../../img/curriculum/curriculumHeaderSlider3.webp'
import curriculumHeaderSlider4 from '../../img/curriculum/curriculumHeaderSlider4.webp'
import curriculumHeaderSlider5 from '../../img/curriculum/curriculumHeaderSlider5.webp'
import curriculumHeaderSlider6 from '../../img/curriculum/curriculumHeaderSlider6.webp'
import curriculumHeaderSlider7 from '../../img/curriculum/curriculumHeaderSlider7.webp'
import curriculumHeaderSlider8 from '../../img/curriculum/curriculumHeaderSlider8.webp'
import curriculumHeaderSlider9 from '../../img/curriculum/curriculumHeaderSlider9.webp'

const Header = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="aboutHeaderBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title aboutTitle">
                                    <h1>Curriculum</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="curriculumHeaderSlider">
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                370: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider1} alt="PSED" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider2} alt="Communication and Language" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider3} alt="Physical Development" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider4} alt="Literacy" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider5} alt="Mathematics" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider6} alt="UTW" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider7} alt="EAD" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider8} alt="Social Studies" className="img-fluid" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="curriculumHeaderSliderImg">
                                    <img src={curriculumHeaderSlider9} alt="Information Technology" className="img-fluid" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header