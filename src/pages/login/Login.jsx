import React from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";


import LoginForm from "./LoginForm";
import logo from "../../assets/img/logo.png";
import loginImg from "../../assets/img/login-img.png";
import PageRoutes from "../../routes";

const Login = () => {
  const navigate = useNavigate();

  //if already logged in move to home page
  React.useEffect(() => {
    if (localStorage.getItem("loginDet")) {
      navigate(PageRoutes.HOME);
    }
  }, []);
  return (
    <>
      <div className="login_screen">
        <div className="login_screen_top">
          <div className="login_logo">
            <img src={logo} alt="" />
          </div>
          <div className="loginimg">
            <img src={loginImg} alt="" />
          </div>
        </div>
        <div className="login_form">
          <div className="login_form_top">
            <h3>Login Account</h3>
            <p>Hello, welcome back to your account</p>
          </div>
          <LoginForm />
          <div className="login_form_bottom">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
