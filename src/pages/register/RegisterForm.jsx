import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <>
        <form className="formWraper">
            <TextField className="formField phoneNumberField" label="Your name" variant="standard" />
            <TextField className="formField phoneNumberField" label="Email ID or Phone number" variant="standard" />
            <Button component={Link} to="/otp" className="formSubmitBtn" variant="contained">Sign Up</Button>
        </form>
    </>
  )
}

export default RegisterForm