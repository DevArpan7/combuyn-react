import React from 'react';
import { Link } from "react-router-dom";

import RegisterForm from './RegisterForm';
import logo from "../../assets/img/logo.png";
import loginImg from "../../assets/img/login-img.png";

const Register = () => {
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
                    <h3>Sign Up</h3>
                    <p>Sign in now to access your account</p>
                </div>
                <RegisterForm />
                <div className="login_form_bottom">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register