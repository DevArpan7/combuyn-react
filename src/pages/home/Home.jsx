import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Loader from "@mui/material/CircularProgress";
import axios from "axios";

import "swiper/css";

import categoryImg1 from "../../assets/img/category1.jpg";

import { Link } from "react-router-dom";
import HomeTopBar from "./HomeTopBar";
import HomeTab from "./HomeTab";
import { BottomBar } from "../../components";
import { getHeaderWithToken } from "../../utils";
import PageRoutes from "../../routes";

const Home = () => {
  const accessToken = useSelector((state) => state.user.token);
  const [categoryList, setCategoryList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  React.useEffect(() => {
    if (accessToken) {
      axios
        .get(
          process.env.REACT_APP_API_BASE_URL + "category",
          getHeaderWithToken(accessToken.accessToken)
        )
        .then((res) => {
          setIsLoading(false);
          setCategoryList(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorMessage(err.message);
        });
    }
  }, [accessToken]);

  return (
    <>
    
      <div className="forHeaderFix forBottomFix">
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {categoryList.map((item, index) => {
                  return (
                    <SwiperSlide className="categoryItem" key={index}>
                      <Link className="d-block" to={PageRoutes.HOME}>
                        <div className="categoryItem_img">
                          <img src={categoryImg1} alt="" />
                        </div>
                        <div className="categoryItem_text">
                          <h4>{item.name}</h4>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </>
            )}
          </Swiper>
        </div>
        <HomeTab />
      </div>
    </>
  );
};

export default Home;
