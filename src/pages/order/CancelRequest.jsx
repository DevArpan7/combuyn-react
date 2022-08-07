import React from 'react'
import OrderTopBar from './OrderTopBar'
import { Button } from '@mui/material';
import OrderItem3 from "../../assets/img/cancle.png";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import TextField from '@mui/material/TextField';

const CancelRequest = () => {
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <OrderTopBar />
            <div className='CancelHeader'>
                <figure>
                    <img src={OrderItem3} alt="" />
                </figure>
                <figcaption>
                    <h5>Local Baker Campaigns</h5>
                    <p>200grms I Category 1</p>
                    <h4>₹1149</h4>
                </figcaption>
            </div>
            <div className='reasonWrap'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Reason For Cancellation</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="I have changed my mind" control={<Radio />} label="I have changed my mind" />
                        <FormControlLabel value="I have changed my mind" control={<Radio />} label="I have changed my mind" />
                        <FormControlLabel value="I have changed my mind" control={<Radio />} label="I have changed my mind" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='formWrap'>
                <TextField fullWidth
                    id="standard-textarea"
                    label="Write your comments"
                    placeholder="Write your comments"
                    multiline
                    variant="standard"
                />
            </div>
            
            <div className="footBtnWrap">
                <Button className="payNowBtn" variant="contained">Submit Request</Button>
            </div>
        </div>        
    </>
  )
}

export default CancelRequest