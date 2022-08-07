import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Loader from "@mui/material/CircularProgress";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import pbannerimg1 from "../../assets/img/productBanner1.png";
import { getHeaderWithToken, checkIfUserLoggedIn } from "../../utils";
import PageRoutes from "../../routes";
// import pbannerimg3 from "../../assets/img/productBanner3.png";
// import pbannerimg4 from "../../assets/img/productBanner4.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        className="tabContentWrap"
      >
        {value === index && <Box>{children}</Box>}
      </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeTab = () => {
  const [value, setValue] = useState(0);
  const [campaignList, setCampaignList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const accessToken = useSelector((state) => state.user.token);
  const [successMessage, setSuccessMessage] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!checkIfUserLoggedIn()) {
      navigate(PageRoutes.LOGIN);
    }
  }, []);
  React.useEffect(() => {
    if (accessToken) {
      axios
        .get(
          process.env.REACT_APP_API_BASE_URL + "campaigns",
          getHeaderWithToken(accessToken.accessToken)
        )
        .then((res) => {
          setIsLoading(false);
          setCampaignList(res.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            localStorage.clear();
            navigate(PageRoutes.LOGIN);
          } else {
            setIsLoading(false);
            setErrorMessage(err.message);
          }
        });
    }
  }, [accessToken]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addAsFavorite = (item, e) => {
    e.preventDefault();
    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "users/campaigns",
        {
          campaignId: item._id,
        },
        getHeaderWithToken(accessToken.accessToken)
      )
      .then(() => {
        setSuccessMessage("Item marked as favorite");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  React.useEffect(() => {
    if (successMessage) {
      setSuccessMessage("");
    }
  }, [successMessage]);

  return (
    <>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      <Box sx={{ width: "100%" }} className="homeCategoryTab">
        <Tabs
          className="homeTabtobBar"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Active Campaigns" {...a11yProps(0)} />
          <Tab label="Weekly Schedule" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="campaignsList">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {campaignList.map((item, index) => {
                  return (
                    <div className="campaignsList_item" key={index}>
                      <Link
                        className="d-block"
                        to={`${PageRoutes.CAMPAIGN_DETAILS}`}
                        state={{ campaign: item }}
                      >
                        <div className="campaignsList_img">
                          <img
                            src={
                              item.images && item.images.length > 0
                                ? item.images[0].link
                                : pbannerimg1
                            }
                            alt=""
                          />
                        </div>
                        <div className="campaignsList_text">
                          <button
                            className="wishList_btn"
                            onClick={(e) => addAsFavorite(item, e)}
                          >
                            <i className="fal fa-heart"></i>
                          </button>
                          <h4>{item.name}</h4>
                          <p>{item.shortDescription}</p>
                          <div className="campaignsList_text_bottom">
                            <span>
                              End Date -{" "}
                              {moment(item.endTime).format("MMMM Do YYYY")}
                            </span>
                            <button className="buyNow_btn">Buy Now</button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </>
  );
};

export default HomeTab;
