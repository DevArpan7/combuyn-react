import React, {useState} from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const OTPbox = () => {
    const [OTP, setOTP] = useState("");

  return (
    <>
        <form className="formWraper">
            <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure={false}
                className="otp_fields"
            />
            <Button component={Link} 
            // to="/chooseapartment" 
            to="/home"
            className="formSubmitBtn" variant="contained">Submit</Button>
            <div className="otp_bottom">                
                <p>Didn't receive the OTP?</p>
                <ResendOTP className="otp_resend_box" renderTime={false} handelResendClick={() => console.log("Resend clicked")} />
            </div>
        </form>
    </>
  )
}

export default OTPbox