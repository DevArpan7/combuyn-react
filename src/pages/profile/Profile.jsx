import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BottomBar } from "../../components";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Drawer from "@mui/material/Drawer";

import profileImg from "../../assets/img/profileImg.png";
import refferImg from "../../assets/img/referImg.png";
import PageRoutes from "../../routes";
import { checkIfUserLoggedIn } from "../../utils";

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (bottom, open) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, bottom: open });
  };
  React.useEffect(() => {
    if (!checkIfUserLoggedIn()) {
      navigate(PageRoutes.LOGIN);
    }
  }, []);

  const signOut = () =>{
      localStorage.clear();
      navigate(PageRoutes.LOGIN);
  }

  return (
    <>
      <div className="forHeaderFix forBottomFix">
        <div className="mainTopBar">
          <div className="mainTopBar_left">
            <Link className="topBackBtn" to={PageRoutes.HOME}>
              <i className="fas fa-arrow-left"></i>
            </Link>
            Profile
          </div>
          <div className="mainTopBar_right">
            <ul>
              <li>
                <Link to={PageRoutes.EDIT_PROFILE}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-edit-3"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <BottomBar />

        <div className="profileTop">
          <div className="profileTop_img">
            <img src={profileImg} alt="" />
          </div>
          <div className="profileTop_right">
            <h3>{userInfo?.name}</h3>
            <p>
              {userInfo && userInfo.address && userInfo.address.length > 0 && (
                <>
                  {`${userInfo?.address[0].apartment}, ${userInfo?.address[0].flatNo}, ${userInfo?.address[0].tower}`}
                </>
              )}
            </p>
          </div>
        </div>

        <div className="profileContact">
          <ul>
            <li>
              <i className="far fa-phone-alt"></i> {userInfo?.mobile}
            </li>
            <li>
              <i className="far fa-envelope"></i> {userInfo?.email}
            </li>
          </ul>
        </div>

        <div className="profileWalletOrder">
          <div className="profileWallet">
            <h3>
              <i className="far fa-rupee-sign"></i> {userInfo?.walletCredits}
            </h3>
            <span>Wallet</span>
          </div>
          <div className="profileOrder">
            <h3>12</h3>
            <span>Order</span>
          </div>
        </div>

        <div className="profileLinks">
          <Paper
            className="profileLink_box"
            sx={{ width: "100%", maxWidth: "100%" }}
          >
            <MenuList>
              <MenuItem>
                <Link to={PageRoutes.ADDRESS_LIST}>
                  <ListItemIcon className="profileMenuIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-map-pin"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </ListItemIcon>
                  <ListItemText className="profileMenuText">
                    Address
                  </ListItemText>
                </Link>
              </MenuItem>
              <MenuItem>
                {["bottom"].map((bottom) => (
                  <>
                    <Link to="/" onClick={toggleDrawer(bottom, true)}>
                      <ListItemIcon className="profileMenuIcon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-share-2"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line
                            x1="8.59"
                            y1="13.51"
                            x2="15.42"
                            y2="17.49"
                          ></line>
                          <line
                            x1="15.41"
                            y1="6.51"
                            x2="8.59"
                            y2="10.49"
                          ></line>
                        </svg>
                      </ListItemIcon>
                      <ListItemText className="profileMenuText">
                        Referral
                      </ListItemText>
                    </Link>
                  </>
                ))}
              </MenuItem>
              <MenuItem>
                <Link to={PageRoutes.PROFILE}>
                  <ListItemIcon className="profileMenuIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-phone-call"
                    >
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText className="profileMenuText">
                    Contact Us
                  </ListItemText>
                </Link>
              </MenuItem>
              <Divider className="menuDivider" />
              <MenuItem>
                <Link to="/">
                  <ListItemIcon className="profileMenuIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </ListItemIcon>
                  <ListItemText className="profileMenuText" onClick={signOut}>
                    Logout
                  </ListItemText>
                </Link>
              </MenuItem>
            </MenuList>
          </Paper>
        </div>
      </div>

      {["bottom"].map((bottom) => (
        <React.Fragment key={bottom}>
          <Drawer
            className="refferDrawer"
            anchor={bottom}
            open={state[bottom]}
            onClose={toggleDrawer(bottom, false)}
          >
            <div className="referImg">
              <img src={refferImg} alt="" />
            </div>
            <h4>Refer A Friend!</h4>
            <div className="referText">
              <h5>Share the referal code with your friend.</h5>
              <p>
                Copy or directly share on social media or email to their family
                & friends.
              </p>
            </div>
            <div className="referCode">
              <h6>Your Referral Code</h6>
              <div className="referCode__box">
                <div className="referCode__box__left">WZI503</div>
                <button className="referCode__box__right">
                  <i className="far fa-clone"></i>
                  Copy
                </button>
              </div>
            </div>
            <div className="referSocial">
              <ul>
                <li>
                  <button className="refertwitter">
                    <i className="fab fa-twitter"></i>
                  </button>
                </li>
                <li>
                  <button className="referfacebook">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </li>
                <li>
                  <button className="referwhatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </button>
                </li>
              </ul>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default Profile;
