import React from "react";
import { BottomBar } from "../../components";
import OrderTopBar from "./OrderTopBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Loader from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import { getHeaderWithToken, checkIfUserLoggedIn } from "../../utils";
import PageRoutes from "../../routes";

const Order = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [orderList, setOrderList] = React.useState([]);
  const accessToken = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!checkIfUserLoggedIn()) {
      navigate(PageRoutes.LOGIN);
    }
  }, []);
  React.useEffect(() => {
    if (accessToken) {
      axios
        .get(
          process.env.REACT_APP_API_BASE_URL + "orders",
          getHeaderWithToken(accessToken.accessToken)
        )
        .then((res) => {
          setIsLoading(false);
          setOrderList(res.data);
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
  }, [accessToken]);

  const getTotalPrice = (item) => {
    const sum = item.campaigns[0].products.reduce(function (a, b) {
      return a + b.price;
    }, 0);
    return sum;
  };
  return (
    <>
      
      <div className="forHeaderFix forBottomFix">
        <OrderTopBar />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <ul className="orderList">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {orderList.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className="orderBox" to={`${PageRoutes.ORDER_DETAILS}`}
                        state={{ orderDetails: item }}>
                      <svg
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 11L5.5 6L0.5 1"
                          stroke="#1E1E1E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h4>
                        {item.campaigns &&
                          item.campaigns.length > 0 &&
                          item.campaigns[0].name}
                      </h4>
                      <p>End in Jul 21 I 00:00AM</p>
                      <p className="text-orange">
                        Delivery by{" "}
                        {moment(item.deliveryDate).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}{" "}
                      </p>
                      <h5>
                        Total Price: <span>{getTotalPrice(item)}</span>
                      </h5>
                    </Link>
                  </li>
                );
              })}
            </>
          )}
        </ul>

        <BottomBar />
      </div>
    </>
  );
};

export default Order;
