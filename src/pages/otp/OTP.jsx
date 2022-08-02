import React from 'react';

import OTPbox from './OTPbox';
import logo from "../../assets/img/logo.png";
import loginImg from "../../assets/img/login-img.png";


const OTP = () => {
  return (
    <>
        <div className="login_screen">
            <div className='login_screen_top'>
                <div className='login_logo'>
                    <img src={logo} alt="" />
                </div>
                <div className="loginimg">
                    <img src={loginImg} alt="" />
                </div>
            </div>
            <div className="login_form">
                <div className='login_form_top'>
                    <h3>Verification Code</h3>
                    <p>We have sent the code verification to <br></br>your Mobile number</p>
                    <h4>+91987654XXXX</h4>
                </div>
                <OTPbox />
            </div>
        </div>        
    </>
  )
}

export default OTP