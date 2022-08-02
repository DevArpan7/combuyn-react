import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import pbannerimg1 from "../../assets/img/productBanner1.png";
import pbannerimg2 from "../../assets/img/productBanner2.png";
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
                {value === index && (
                <Box>
                    {children}
                </Box>
                )}
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
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HomeTab = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <>
        <Box sx={{ width: '100%' }} className="homeCategoryTab">
            <Tabs className="homeTabtobBar" value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Active Campaigns" {...a11yProps(0)} />
                <Tab label="Weekly Schedule" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className="campaignsList">
                    <div className="campaignsList_item">
                        <Link className="d-block" to="/campaigns">
                            <div className="campaignsList_img">
                                <img src={pbannerimg1} alt="" />
                            </div>
                            <div className="campaignsList_text">
                                <button className='wishList_btn'>
                                    <i className="fal fa-heart"></i>
                                </button>
                                <h4>Fresh Fruits</h4>
                                <p>Freshly sourced Local & imported stock!!</p>
                                <div className='campaignsList_text_bottom'>
                                    <span>End Date - July 14th 2022</span>
                                    <button className='buyNow_btn'>Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="campaignsList_item">
                        <Link className="d-block" to="/campaigns">
                            <div className="campaignsList_img">
                                <img src={pbannerimg2} alt="" />
                            </div>
                            <div className="campaignsList_text">
                                <button className='wishList_btn'>
                                    <i className="fal fa-heart"></i>
                                </button>
                                <h4>Fresh Fruits</h4>
                                <p>Freshly sourced Local & imported stock!!</p>
                                <div className='campaignsList_text_bottom'>
                                    <span>End Date - July 14th 2022</span>
                                    <button className='buyNow_btn'>Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
    </>
  )
}

export default HomeTab