import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import {useDispatch} from 'react-redux';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {setToken, setUserInfo} from '../../redux/userInfo';
import PageRoutes from "../../routes";

const OTPbox = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (otp && location.state) {
      axios
        .post(process.env.REACT_APP_API_BASE_URL + "auth/login", {
          mobile: location.state.mobile,
          otp,
        })
        .then((res) => {
          dispatch(setUserInfo(res.data.user));
          dispatch(setToken(res.data.token));
          localStorage.setItem("loginDet", JSON.stringify(res.data));
          navigate(PageRoutes.HOME);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    } else {
      setErrorMessage("Please type your otp to continue");
    }
  };
  React.useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, [1000]);
    }
  }, [errorMessage]);
  return (
    <>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form className="formWraper" onSubmit={onSubmit}>
        <OTPInput
          value={otp}
          onChange={setOtp}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          secure={false}
          className="otp_fields"
        />
        <Button className="formSubmitBtn" variant="contained" type="submit">
          Submit
        </Button>
        <div className="otp_bottom">
          <p>Didn't receive the OTP?</p>
          <ResendOTP
            className="otp_resend_box"
            renderTime={false}
            handelResendClick={() => console.log("Resend clicked")}
          />
        </div>
      </form>
    </>
  );
};

export default OTPbox;
