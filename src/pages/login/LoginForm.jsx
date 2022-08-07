import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import PageRoutes from "../../routes";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "auth/otp", {
        mobile: e.target.elements[0].value,
        "type": "login"
      })
      .then(() => {
        navigate(PageRoutes.OTP_LOGIN, {state: {mobile: e.target.elements[0].value}})
      })
      .catch((err) => {
        setErrorMessage(err.message)
      });
  };

  React.useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, [1000])
    }
  }, [errorMessage])

  return (
    <>
     {errorMessage && (
        <Alert severity="error">
        {errorMessage}
      </Alert>
     )}
      <form className="formWraper" onSubmit={onSubmit}>
        <TextField
          type={"number"}
          className="formField phoneNumberField"
          label="Enter Phone Number "
          variant="standard"
          name="mobile"
          required
        />
        <Button type="submit" className="formSubmitBtn" variant="contained">
          Continue
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
