import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

import categoryImg1 from "../../assets/img/category1.jpg";
import categoryImg2 from "../../assets/img/category2.jpg";
import categoryImg3 from "../../assets/img/category3.jpg";
import categoryImg4 from "../../assets/img/category4.jpg";

const CartPopular = () => {
  return (
    <>
        <div className="popular_apartment">
            <h3>Popular Apartment</h3>
            <div className="catSliderBox_wrap">
                <Swiper
                    className="catSliderBox"
                    spaceBetween={10}
                    slidesPerView={3.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide className="categoryItem">
                        <Link className="d-block" to="/home">
                            <div className="categoryItem_img">
                                <img src={categoryImg1} alt="" />
                            </div>
                            <div className="categoryItem_text">
                                <h4>Fresh Fruits</h4>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="categoryItem">
                        <Link className="d-block" to="/home">
                            <div className="categoryItem_img">
                                <img src={categoryImg2} alt="" />
                            </div>
                            <div className="categoryItem_text">
                                <h4>Vegetables</h4>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="categoryItem">
                        <Link className="d-block" to="/home">
                            <div className="categoryItem_img">
                                <img src={categoryImg3} alt="" />
                            </div>
                            <div className="categoryItem_text">
                                <h4>Fresh Fruits</h4>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="categoryItem">
                        <Link className="d-block" to="/home">
                            <div className="categoryItem_img">
                                <img src={categoryImg4} alt="" />
                            </div>
                            <div className="categoryItem_text">
                                <h4>Cosmetics</h4>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="categoryItem">
                        <Link className="d-block" to="/home">
                            <div className="categoryItem_img">
                                <img src={categoryImg3} alt="" />
                            </div>
                            <div className="categoryItem_text">
                                <h4>Fresh Fruits</h4>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default CartPopular