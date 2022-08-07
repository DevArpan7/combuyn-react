import React from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/style.css';
import '../src/assets/css/new_style.css';
import {setToken, setUserInfo} from './redux/userInfo';
import PageRoutes from './routes';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login, Register, Home, OTP, Order, Campaigns, Cart, CartSummary, Review, Favorites, Profile, EditProfile, AddAddress, OrderDetails, CancelRequest, RaiseIssue, DeliveryAddress, Apperments, PaymentMethod } from "./pages";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    if (localStorage.getItem("loginDet")) {
      const det = JSON.parse(localStorage.getItem("loginDet"));
      dispatch(setUserInfo(det.user));
      dispatch(setToken(det.token));
    }
  },[])
  return (
    <>
        <Router>
            <Routes>
                <Route path={PageRoutes.LOGIN} element={<Login />} />
                <Route path={PageRoutes.HOME}element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path={PageRoutes.OTP_LOGIN} element={<OTP />} />
                <Route path={PageRoutes.ORDER_LIST} element={<Order />} />
                <Route path={`${PageRoutes.CAMPAIGN_DETAILS}`} element={<Campaigns />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/cart-summary' element={<CartSummary />} />
                <Route path='/review' element={<Review />} />
                <Route path={PageRoutes.FAVORITES} element={<Favorites />} />
                <Route path={PageRoutes.PROFILE} element={<Profile />} />
                <Route path={PageRoutes.EDIT_PROFILE} element={<EditProfile />} />
                <Route path='/add-address' element={<AddAddress />} />
                <Route path={PageRoutes.ORDER_DETAILS} element={<OrderDetails />} />
                <Route path='/cancelrequest' element={<CancelRequest />} />
                <Route path='/raiseissue' element={<RaiseIssue />} />
                <Route path={PageRoutes.ADDRESS_LIST} element={<DeliveryAddress />} />
                <Route path='/chooseapartment' element={<Apperments />} />
                <Route path='/payment-method' element={<PaymentMethod />} />
            </Routes>
        </Router>      
    </>
  )
}

export default App