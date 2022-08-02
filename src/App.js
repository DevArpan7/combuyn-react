import React from 'react'
import './App.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/style.css';
import '../src/assets/css/new_style.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login, Register, Home, OTP, Order, Campaigns, Cart, CartSummary, Review, Favorites, Profile, EditProfile, AddAddress, OrderDetails, CancelRequest, RaiseIssue, DeliveryAddress, Apperments, PaymentMethod } from "./pages";

const App = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/otp' element={<OTP />} />
                <Route path='/order' element={<Order />} />
                <Route path='/campaigns' element={<Campaigns />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/cart-summary' element={<CartSummary />} />
                <Route path='/review' element={<Review />} />
                <Route path='/wishlist' element={<Favorites />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/edit-profile' element={<EditProfile />} />
                <Route path='/add-address' element={<AddAddress />} />
                <Route path='/orderdetails' element={<OrderDetails />} />
                <Route path='/cancelrequest' element={<CancelRequest />} />
                <Route path='/raiseissue' element={<RaiseIssue />} />
                <Route path='/deliveryaddress' element={<DeliveryAddress />} />
                <Route path='/chooseapartment' element={<Apperments />} />
                <Route path='/payment-method' element={<PaymentMethod />} />
            </Routes>
        </Router>      
    </>
  )
}

export default App