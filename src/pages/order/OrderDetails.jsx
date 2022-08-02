import React from 'react'
// import { BottomBar } from '../../components'
import OrderTopBar from './OrderTopBar'
import { Link } from 'react-router-dom'

import OrderItem1 from "../../assets/img/order_item1.png";
import OrderItem2 from "../../assets/img/order_item2.png";
import OrderItem3 from "../../assets/img/order_item3.png";
import { Button } from '@mui/material';

const OrderDetails = () => {
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <OrderTopBar />

            <div className='orderWrapper'>
                <div className='orderDetails_address'>
                    <div className='orderDetails_address_header'>
                        <div className='orderDetails_address_type'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#007CB2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#007CB2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Home</span>
                        </div>
                        <Link to="/add-address">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.625 1.04167C8.85706 0.809602 9.17181 0.67923 9.5 0.67923C9.6625 0.67923 9.82341 0.711237 9.97355 0.773424C10.1237 0.835611 10.2601 0.92676 10.375 1.04167C10.4899 1.15657 10.5811 1.29299 10.6432 1.44312C10.7054 1.59325 10.7374 1.75416 10.7374 1.91667C10.7374 2.07917 10.7054 2.24008 10.6432 2.39021C10.5811 2.54035 10.4899 2.67676 10.375 2.79167L3.08333 10.0833L0.75 10.6667L1.33333 8.33333L8.625 1.04167Z" stroke="#007CB2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Edit</span>
                        </Link>
                    </div>
                    <h6>Manik Mitra</h6>
                    <p>9876543210</p>
                    <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Kolkata -700016</p>
                </div>
                <div className='order_heading'>
                    <p>Order List</p>
                    <p>Order ID - <span>29101997356</span></p>
                </div>
                <ul className='orderItemList'>
                    <li>
                        <div className='item_thumb'>
                            <img src={OrderItem1} alt="" />
                        </div>
                        <div className='item_qty'>
                            <p>1 x</p>
                        </div>
                        <div className='item_details'>
                            <h6>Chocolate Marble Pastrie</h6>
                            <h5>200grms I Category 1</h5>
                        </div>
                        <div className='item_price'>
                            ₹1149
                        </div>
                    </li>
                    <li>
                        <div className='item_thumb'>
                            <img src={OrderItem2} alt="" />
                        </div>
                        <div className='item_qty'>
                            <p>1 x</p>
                        </div>
                        <div className='item_details'>
                            <h6>Chocolate Marble Pastrie</h6>
                            <h5>200grms I Category 1</h5>
                        </div>
                        <div className='item_price'>
                            ₹1149
                        </div>
                    </li>
                    <li>
                        <div className='item_thumb'>
                            <img src={OrderItem3} alt="" />
                        </div>
                        <div className='item_qty'>
                            <p>1 x</p>
                        </div>
                        <div className='item_details'>
                            <h6>Chocolate Marble Pastrie</h6>
                            <h5>200grms I Category 1</h5>
                        </div>
                        <div className='item_price'>
                            ₹1149
                        </div>
                    </li>
                </ul>
                <div className='order_heading'>
                    <p>Order Status</p>
                </div>
                <div className='orderStatusHolder'>
                    <ul className='orderStatusList'>
                        <li>
                            <h5>Order Accepted</h5>
                            <h6>Fri, 15th Jul ‘22</h6>
                        </li>
                        <li>
                            <h5>Out for Delivery</h5>
                            <ul>
                                <li>
                                    <h5>Partial delivery</h5>
                                    <h6>Fri, 15th Jul ‘22</h6>

                                    <ul>
                                        <li>
                                            <h5>1 x Chocolate Marble Cake </h5>
                                            <h6>200grms I Category 1</h6>
                                        </li>
                                        <li>
                                            <h5>1 x Chocolate Marble Cake </h5>
                                            <h6>200grms I Category 1</h6>
                                        </li>
                                        <li>
                                            <h5>1 x Chocolate Marble Cake </h5>
                                            <h6>200grms I Category 1</h6>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className='inActive'>
                            <h5>Delivered</h5>
                        </li>
                        <li className='inCancel'>
                            <h5>Cancelled</h5>
                        </li>
                    </ul>

                    <div className='statusButtonHolder'>
                        <Link to="/cancelrequest" className='statusButton'>Cancle</Link>
                        <Link to="/" className='statusButton'>Share</Link>
                    </div>
                    <div className='statusButtonHolder'>
                        <Link to="/raiseissue" className='statusButton2'>Raise Issue</Link>
                        <Link to="/review" className='statusButton2'>Write a review</Link>
                        <Link to="/" className='statusButton2'>Share</Link>
                    </div>
                </div>
                <table className='subTotal'>
                    <thead>
                        <tr>
                            <th colSpan="2">Price Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total (3 item)</td>
                            <td>₹3447</td>
                        </tr>
                        <tr>
                            <td>Tax 5%</td>
                            <td>₹30</td>
                        </tr>
                        <tr>
                            <td>Service</td>
                            <td>₹20</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total Payable</td>
                            <td>₹3497</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="footBtnWrap">
                    <Button className="payNowBtn" variant="contained">Pay Now</Button>
                </div>
            </div>
        </div>        
    </>
  )
}

export default OrderDetails