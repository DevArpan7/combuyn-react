import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pbannerimg1 from "../../assets/img/productBanner1.png";
import foodImg1 from "../../assets/img/foodImg.png";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';



const Campaigns = () => {
    const [count, setCount] = useState(1);

    function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 1) {
            return (prevCount -= 1); 
            } else {
            return (prevCount = 1);
            }
        });
    }

    const [state, setState] = React.useState({
        bottom: false,
      });


    const toggleDrawer = (anchor, open) => (event) => {
        event.preventDefault();
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }    
        setState({ ...state, [anchor]: open });
    };

    //const [checked, setChecked] = React.useState([1]);

  
    

  return (
    <>
        <div className="forHeaderFix">
            <div className="mainTopBar">
                <div className="mainTopBar_left">
                    <Link className='topBackBtn' to="/home">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Campaigns
                </div>
                <div className="mainTopBar_right">
                    <ul>
                        <li>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='campaignsBanner'>
                <div className="campaignsBanner_img">
                    <img src={pbannerimg1} alt=''/>
                </div>
                <div className="campaignsBanner_text">
                    <div className='campaignsBanner_text_top'>
                        <h2>Local Baker Campaigns</h2>
                        <div className='campaignsBanner_star'>
                            4.5
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="campaignsBanner_endTime">
                        End In
                        <span><i className="fal fa-clock"></i> 00h 00m 00s</span>
                    </div>
                </div>
            </div>

            <div className="campaignsItem">
                <h3>Dry Cakes</h3>
                <div className="campaignsItem_list">
                    <div className="campaignsItem_img">
                        <img src={pbannerimg1} alt='' />
                    </div>
                    <div className="campaignsItem_text">
                        <h4>Chocolate Marble Cake</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</p>
                        <div className="campaignsItem_text_bottom">
                            <div className="campaignsItem_price">
                                <i className="far fa-rupee-sign"></i> 1149
                            </div>
                            <div className="campaignsItem_quantity">
                                <button onClick={increment}><i className="fal fa-plus"></i></button>
                                <input min="1" value={count} />
                                <button onClick={decrement}><i className="fal fa-minus"></i></button>
                            </div>
                            <div className="campaignsItem_cart">
                                {(['bottom']).map((anchor) => (
                                <button className='addToCart_btn' onClick={toggleDrawer(anchor, true)}>Add to cart</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="campaignsItem_list">
                    <div className="campaignsItem_img">
                        <img src={foodImg1} alt='' />
                    </div>
                    <div className="campaignsItem_text">
                        <h4>Chocolate Marble Cake</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</p>
                        <div className="campaignsItem_text_bottom">
                            <div className="campaignsItem_price">
                                <i className="far fa-rupee-sign"></i> 1149
                            </div>
                            <div className="campaignsItem_quantity">
                                <button onClick={increment}><i className="fal fa-plus"></i></button>
                                <input min="1" value={count} />
                                <button onClick={decrement}><i className="fal fa-minus"></i></button>
                            </div>
                            <div className="campaignsItem_cart">
                                <button className='addToCart_btn'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="campaignsItem">
                <h3>Dry Cakes</h3>
                <div className="campaignsItem_list">
                    <div className="campaignsItem_img">
                        <img src={pbannerimg1} alt='' />
                    </div>
                    <div className="campaignsItem_text">
                        <h4>Chocolate Marble Cake</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</p>
                        <div className="campaignsItem_text_bottom">
                            <div className="campaignsItem_price">
                                <i className="far fa-rupee-sign"></i> 1149
                            </div>
                            <div className="campaignsItem_quantity">
                                <button onClick={increment}><i className="fal fa-plus"></i></button>
                                <input min="1" value={count} />
                                <button onClick={decrement}><i className="fal fa-minus"></i></button>
                            </div>
                            <div className="campaignsItem_cart">
                                <button className='addToCart_btn'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="campaignsItem_list">
                    <div className="campaignsItem_img">
                        <img src={foodImg1} alt='' />
                    </div>
                    <div className="campaignsItem_text">
                        <h4>Chocolate Marble Cake</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</p>
                        <div className="campaignsItem_text_bottom">
                            <div className="campaignsItem_price">
                                <i className="far fa-rupee-sign"></i> 1149
                            </div>
                            <div className="campaignsItem_quantity">
                                <button onClick={increment}><i className="fal fa-plus"></i></button>
                                <input min="1" value={count} />
                                <button onClick={decrement}><i className="fal fa-minus"></i></button>
                            </div>
                            <div className="campaignsItem_cart">
                                <button className='addToCart_btn'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Add To Cart Modal */}
        {(['bottom']).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer className='drawerBlock'
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
              <div className='drawerHeader'>
                  <h4>Chocolate Marble Cake</h4>
                  <h3>₹1149</h3>
              </div>
              <List
                sx={{
                    width: '100%',
                    maxWidth: "100%",
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
                >
                {[0, 1, 2, 3, 4].map((sectionId) => (
                    <li key={`section-${sectionId}`}>
                    <ul>
                        <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                        {[0, 1, 2].map((item) => (
                        <ListItem key={`item-${sectionId}-${item}`} secondaryAction={
                            <Checkbox
                              edge="end"
                              
                            />
                          }>
                            <ListItemText primary={`Item ${item}`} /> ₹400
                        </ListItem>
                        ))}
                    </ul>
                    </li>
                ))}
                </List>
            <div className="footBtnWrap">
                <Button className="payNowBtn" variant="contained">Add item ₹400</Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  )
}

export default Campaigns