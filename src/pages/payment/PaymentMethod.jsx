import React from 'react'
import { Link } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const PaymentMethod = () => {
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <div className="mainTopBar">
                <div className="mainTopBar_left">
                    <Link className='topBackBtn' to="/home">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Payment Method
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

            <div className="paymentTotal">
                <div className="paymentTotal_left">
                Total:
                </div>
                <div className="paymentTotal_right">
                ₹3497
                </div>
            </div>

            <div className="paymentMethodList">
                <RadioGroup
                    name="radio-buttons-group"
                >
                    <FormControlLabel sx={{m: "0 0 8px 0", p: "5px 0"}} 
                    className='paymentRadio' 
                    labelPlacement="start" 
                    value="kolkata" 
                    control={<Radio />} 
                    label={<><span className='payMImg'><i className="fal fa-credit-card"></i></span> Credit / Debit Cards</>} />

                    <FormControlLabel sx={{m: "0 0 8px 0", p: "5px 0"}} className='paymentRadio' labelPlacement="start" value="dumdum" control={<Radio />} label={<><span className='payMImg'><i class="fal fa-mobile-android"></i></span> Netbanking</>} />
                    <FormControlLabel sx={{m: "0 0 8px 0", p: "5px 0"}} className='paymentRadio' labelPlacement="start" value="laketown" control={<Radio />} label={<><span className='payMImg'><i class="fal fa-money-bill-wave"></i></span> Cash on Delivery</>} />
                    <FormControlLabel sx={{m: "0 0 8px 0", p: "5px 0"}} className='paymentRadio' labelPlacement="start" value="baguiati" control={<Radio />} label={<><span className='payMImg'><i class="fal fa-wallet"></i></span> Wallet</>} />
                </RadioGroup>
            </div>
            <div className="footBtnWrap">
                <Button className="payNowBtn" variant="contained">CONTINUE</Button>
            </div>
        </div>

    </>
  )
}

export default PaymentMethod