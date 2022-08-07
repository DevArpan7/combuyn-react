import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Loader from "@mui/material/CircularProgress";
import axios from "axios";

import pbannerimg1 from "../../assets/img/productBanner1.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Checkbox from "@mui/material/Checkbox";
import PageRoutes from "../../routes";
import { getHeaderWithToken, checkIfUserLoggedIn, groupBy } from "../../utils";

const Campaigns = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  const [productList, setProductList] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState("");
  const accessToken = useSelector((state) => state.user.token);
  const userInfo = useSelector((state) => state.user.userInfo);

  React.useEffect(() => {
    if (!checkIfUserLoggedIn()) {
      navigate(PageRoutes.LOGIN);
    }
  }, []);
  // fetch details of product
  React.useEffect(() => {
    if (location.state && location.state.campaign) {
      if (accessToken) {
        axios
          .get(
            process.env.REACT_APP_API_BASE_URL + "products",
            getHeaderWithToken(accessToken.accessToken)
          )
          .then((res) => {
            const items = groupBy(res.data, "category");
            setIsLoading(false);
            setProductList(items);
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
      }
    } else {
      navigate(PageRoutes.HOME);
    }
  }, [accessToken]);

  function increment(item, index, categoryKey) {
    const toUpdate = {...productList};
    toUpdate[categoryKey][index].count =  toUpdate[categoryKey][index].count === undefined ? 1 :  toUpdate[categoryKey][index].count + 1;
    setProductList(toUpdate);
  }

  function decrement(item, index, categoryKey) {
    const toUpdate = {...productList};
    toUpdate[categoryKey][index].count =  toUpdate[categoryKey][index].count === undefined ? 0 :  toUpdate[categoryKey][index].count - 1;
    setProductList(toUpdate);
  }

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const addToCart= (product) => {
    setIsLoading(true);
    debugger;
    const toSendData = {
      "customerId": userInfo.id,
    
    "campaigns": [
        {
            "campaignId": location.state?.campaign?.id,
            "products": [
                {
                    "productId": product.id,
                    "vendorId": product.vendorId,
                    "quantity": product.count,
                    "price": product.groupPrice
                }
            ]
        }
    ]
    };
    axios.post(process.env.REACT_APP_API_BASE_URL + "cart", toSendData, getHeaderWithToken(accessToken.accessToken)).then((res)=>{
      console.log(res);
      debugger;
    }).catch((err)=>{
      setIsLoading(false);
      setErrorMessage(err.message);
    })
  }

  //const [checked, setChecked] = React.useState([1]);

  return (
    <>
      <div className="forHeaderFix">
        <div className="mainTopBar">
          <div className="mainTopBar_left">
            <Link className="topBackBtn" to={PageRoutes.HOME}>
              <i className="fas fa-arrow-left"></i>
            </Link>
            Campaigns
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </div>
          <div className="mainTopBar_right">
            <ul>
              <li>
                <Link to="/">
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
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/cart">
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
                    className="feather feather-shopping-bag"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="campaignsBanner">
          <div className="campaignsBanner_img">
            <img
              src={
                location.state?.campaign?.images?.length > 0
                  ? location.state?.campaign?.images[0].link
                  : pbannerimg1
              }
              alt=""
            />
          </div>
          <div className="campaignsBanner_text">
            <div className="campaignsBanner_text_top">
              <h2>{location.state?.campaign?.name}</h2>
              <div className="campaignsBanner_star">
                4.5
                <i className="fas fa-star"></i>
              </div>
            </div>
            <p>{location.state?.campaign?.shortDescription}</p>
            <div className="campaignsBanner_endTime">
              End In
              <span>
                <i className="fal fa-clock"></i> 00h 00m 00s
              </span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {Object.keys(productList).map((item, index) => {
              return (
                <div className="campaignsItem" key={index}>
                  <h3>{item}</h3>
                  {productList[item].map((productItem, index1)=>{
                      return(
                        <div className="campaignsItem_list" key={index1}>
                        <div className="campaignsItem_img">
                          <img src={productItem.imgaes && productItem.images.length> 0 ? productItem.images[0]: pbannerimg1} alt="" />
                        </div>
                        <div className="campaignsItem_text">
                          <h4>{productItem.name}</h4>
                          <p>
                            {productItem.description}
                          </p>
                          <div className="campaignsItem_text_bottom">
                            <div className="campaignsItem_price">
                              <i className="far fa-rupee-sign"></i> {productItem.groupPrice}
                            </div>
                            <div className="campaignsItem_quantity">
                              <button onClick={()=> increment(productItem, index1, item)} disabled={productItem.count === productItem.maxCountPerUser}>
                                <i className="fal fa-plus"></i>
                              </button>
                              <input min="1" value={productItem.count || 0} />
                              <button onClick={()=> decrement(productItem, index1, item)} disabled={productItem.count == 0 || productItem.count == undefined}>
                                <i className="fal fa-minus"></i>
                              </button>
                            </div>
                            <div className="campaignsItem_cart">
                              {["bottom"].map((anchor) => (
                                <button
                                  className="addToCart_btn"
                                  disabled={productItem.count> 0 ? false : true}
                                  //onClick={toggleDrawer(anchor, true)}
                                  onClick={()=> addToCart(productItem)}
                                >
                                  Add to cart
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* Add To Cart Modal */}
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            className="drawerBlock"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="drawerHeader">
              <h4>Chocolate Marble Cake</h4>
              <h3>₹1149</h3>
            </div>
            <List
              sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: 300,
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              {[0, 1, 2, 3, 4].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                  <ul>
                    <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                    {[0, 1, 2].map((item) => (
                      <ListItem
                        key={`item-${sectionId}-${item}`}
                        secondaryAction={<Checkbox edge="end" />}
                      >
                        <ListItemText primary={`Item ${item}`} /> ₹400
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </List>
            <div className="footBtnWrap">
              <Button
                className="payNowBtn"
                component={Link}
                to="/cart"
                variant="contained"
              >
                Add item ₹400
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default Campaigns;
