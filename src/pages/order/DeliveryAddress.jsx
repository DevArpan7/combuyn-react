import React from "react";
import OrderTopBar from "./OrderTopBar";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import { useSelector } from "react-redux";

const DeliveryAddress = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="forHeaderFix forBottomFix">
        <OrderTopBar />

        <div className="orderWrapper">
          <Link to="/add-address" className="uploadPhoto">
            <span>
              <i className="fal fa-plus"></i> Add new Address
            </span>
          </Link>
          {userInfo?.address?.map((item, index)=> {
              return(
                <label className="orderDetails_address" key={index}>
                <div className="orderDetails_address_header">
                  <div className="orderDetails_address_type">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z"
                        stroke="#007CB2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 18.3333V10H12.5V18.3333"
                        stroke="#007CB2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Home</span>
                  </div>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
                <h6>{userInfo?.name}</h6>
                <p>{userInfo?.mobile}</p>
                <p>
                  {`${item.apartment} , ${item.tower}, ${item.flatNo}`}
                </p>
    
                <div className="orderDetails_address_footer">
                  <Link to="/add-address">Edit</Link>
                  <Link to="/">Delete</Link>
                </div>
              </label>
    
              )
          })}
          

          <Link to="/add-address" className="uploadPhoto">
            <span>
              <i className="fal fa-plus"></i> Add Alternative Address
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
