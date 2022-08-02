import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  return (
    <>
        <form className="formWraper">
            <TextField className="formField phoneNumberField" label="Enter Phone Number " variant="standard" />
            <Button component={Link} to="/otp" className="formSubmitBtn" variant="contained">Continue</Button>
        </form>
    </>
  )
}

export default LoginForm