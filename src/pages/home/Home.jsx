import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import categoryImg1 from "../../assets/img/category1.jpg";
import categoryImg2 from "../../assets/img/category2.jpg";
import categoryImg3 from "../../assets/img/category3.jpg";
import categoryImg4 from "../../assets/img/category4.jpg";

import { Link } from 'react-router-dom';
import HomeTopBar from './HomeTopBar';
import HomeTab from './HomeTab';
import { BottomBar } from '../../components';

const Home = () => {
    // const scollToRef = useRef();

  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <BottomBar />
            <HomeTopBar />
            <div className="categorySlide_top">
                <div className="categorySlide_top_left">
                    <h3>Different Categories</h3>
                </div>
                <div className="categorySlide_top_right">
                    <Link to="/">Show all</Link>
                </div>
            </div>
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
            <HomeTab />
        </div>
    </>
  )
}

export default Home