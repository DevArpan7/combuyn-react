import React, {useState} from 'react';

import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import foodImg1 from "../../assets/img/foodImg.png";


const Review = () => {
    const [value, setValue] = useState(0);
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <div className="mainTopBar">
                <div className="mainTopBar_left">
                    <Link className='topBackBtn' to="/order">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Write a Review
                </div>
                <div className="mainTopBar_right">
                    <ul>
                        <li>
                            <Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='reviewBoxTop'>
                <div className='reviewBoxTop__img'>
                    <img src={foodImg1} alt="" />
                </div>
                <div className='reviewBoxTop__text'>
                    <h3>Local Baker Campaigns</h3>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                </div>
            </div>

            <div className='reviewBox'>
                <div className="formWraper">
                    <textarea className='formField' placeholder='Type your raise query...'></textarea>
                </div>
            </div>

            <div className="reviewImage">
                <p>You can upload photps related to unboxing. <Link to="/">Learn more</Link></p>
                <div className="uploadPhoto">
                    <input type="file" />
                    <span><i className="fal fa-plus"></i> Add Photo</span>
                </div>
            </div>

            <div className="footBtnWrap">
                <Button className="payNowBtn" variant="contained">Done</Button>
            </div>
        </div>
    </>
  )
}

export default Review