import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Loader from "@mui/material/CircularProgress";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PageRoutes from "../../routes";
import { checkIfUserLoggedIn, getHeaderWithToken } from "../../utils";
import { setUserInfo } from "../../redux/userInfo";

const EditProfile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const accessToken = useSelector((state) => state.user.token);
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!checkIfUserLoggedIn()) {
      navigate(PageRoutes.LOGIN);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email && mobile) {
      const toUpdate = {
        email,
        mobile,
        name,
        role: userInfo.role,
        address: userInfo.address,
      };
      axios
        .post(
          process.env.REACT_APP_API_BASE_URL + "users",
          toUpdate,
          getHeaderWithToken(accessToken.accessToken)
        )
        .then((res) => {
         const localUpdate = JSON.parse(localStorage.getItem("loginDet"));
         localUpdate.user = toUpdate;
         localStorage.setItem("loginDet",JSON.stringify(localUpdate));
         dispatch(setUserInfo(toUpdate));
         navigate(PageRoutes.PROFILE);
        })
        .catch((err) => {
         if (err.response.status === 401) {
            localStorage.clear();
            navigate(PageRoutes.LOGIN);
          } else {
            setIsLoading(false);
            setErrorMessage(err.message);
          }
        });
    } else {
      setErrorMessage("All fields are required");
    }
  };
  return (
    <>
      <div className="forHeaderFix">
        <div className="mainTopBar">
          <div className="mainTopBar_left">
            <Link className="topBackBtn" to={PageRoutes.PROFILE}>
              <i className="fas fa-arrow-left"></i>
            </Link>
            Edit Profile
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </div>
          {/* <div className="mainTopBar_right">
                    <ul>
                        <li>
                            <Link to="/edit-profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </div> */}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="editProfile">
            <form className="formWraper" onSubmit={onSubmit}>
              <TextField
                sx={{ width: "100%", maxWidth: "100%" }}
                className="formField"
                label="Full Name"
                placeholder="Enter Your Name"
                variant="standard"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                sx={{ width: "100%", maxWidth: "100%" }}
                className="formField"
                label="Phone number "
                placeholder="Enter Your Phone"
                variant="standard"
                type={"number"}
                value={mobile}
                required
                onChange={(e) => setMobile(e.target.value)}
              />
              <TextField
                sx={{ width: "100%", maxWidth: "100%" }}
                className="formField"
                label="Email ID"
                placeholder="Enter Your Email"
                variant="standard"
                type={"email"}
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="footBtnWrap">
                <Button className="payNowBtn" variant="contained" type="submit">
                  UPDATE
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default EditProfile;
