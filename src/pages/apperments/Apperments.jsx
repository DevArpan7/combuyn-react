import React from 'react'
import { Link } from 'react-router-dom'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



const Apperments = () => {
   
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <div className="mainTopBar">
                <div className="mainTopBar_left">
                    <Link className='topBackBtn' to="/home">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Apperments
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
            
            <div className='orderWrapper searchWrapper'>
                <div className='searchHeader'>
                    <h5>Interests</h5>
                    <p>Text to guide to select their interests</p>
                </div>

                <Paper
                    className="searchApperments"
                    component="form"
                    sx={{ p: '4px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
                    >
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <i className="far fa-search"></i>
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Apperments..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>

                <div className="AppermentsSearchResult">
                    <RadioGroup
                        name="radio-buttons-group"
                    >
                        <FormControlLabel sx={{m: "0", p: "5px 0"}} className='appermentsRadio' labelPlacement="start" value="kolkata" control={<Radio />} label="Kolkata" />
                        <FormControlLabel sx={{m: "0", p: "5px 0"}} className='appermentsRadio' labelPlacement="start" value="dumdum" control={<Radio />} label="DumDum" />
                        <FormControlLabel sx={{m: "0", p: "5px 0"}} className='appermentsRadio' labelPlacement="start" value="laketown" control={<Radio />} label="Laketown" />
                        <FormControlLabel sx={{m: "0", p: "5px 0"}} className='appermentsRadio' labelPlacement="start" value="baguiati" control={<Radio />} label="Baguiati" />
                        <FormControlLabel sx={{m: "0", p: "5px 0"}} className='appermentsRadio' labelPlacement="start" value="newtown" control={<Radio />} label="New Town" />
                        <FormControlLabel sx={{m: "0", p: "5px 0"}} className='appermentsRadio' labelPlacement="start" value="kestopur" control={<Radio />} label="Kestopur" />
                    </RadioGroup>
                </div>
                <div className="footBtnWrap">
                    <Button component={Link} to="/payment-method" className="payNowBtn" variant="contained">Continue</Button>
                </div>
            </div>
        </div>        
    </>
  )
}

export default Apperments