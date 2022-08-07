import React from 'react';
import Button from '@mui/material/Button';

import CartTopBar from './CartTopBar';
import CartPopular from './CartPopular';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
        <div className="forHeaderFix forBottomFixBtn">
            <CartTopBar />

            <div className="cartItemList">
                <div className="cartItem">
                    <h3>Local Baker Campaigns</h3>
                    <div className="campaignsBanner_endTime">End In<span><i className="fal fa-clock"></i> 00h 00m 00s</span></div>
                    <div className="deliveryTime">Delivery by Jul 25 I 00:00AM</div>
                    <Link to="/cart-summary" className="d-block">
                        <div className="campaignsCartBox">
                            <h4>Item Bought: <span>Dry cakes</span> <span>Pastries</span> <span>Fresh Breads</span> <span>Fresh Breads</span></h4>
                            <div className="totalQty">
                                <span>Qty Total:</span> 3kgs
                            </div>
                            <div className="deliveryAddress">
                                <span>Delivery to:</span> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Kolkata -700016
                            </div>
                            <div className="totalPrice">
                                Total Price: <span>₹3497</span>
                            </div>
                            <div className="cartSinglepayBtn">
                                <button className="deleteCartBtn"><i className="fal fa-trash-alt"></i></button>
                                <button className="payforThisBtn">Pay only for this</button>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="cartItem">
                    <h3>Fresh Fruits</h3>
                    <div className="campaignsBanner_endTime">End In<span><i className="fal fa-clock"></i> 00h 00m 00s</span></div>
                    <div className="deliveryTime">Delivery by Jul 25 I 00:00AM</div>
                    <div className="campaignsCartBox">
                        <h4>Item Bought: <span>Dry cakes</span> <span>Pastries</span> <span>Fresh Breads</span> <span>Fresh Breads</span></h4>
                        <div className="totalQty">
                            <span>Qty Total:</span> 3kgs
                        </div>
                        <div className="deliveryAddress">
                            <span>Delivery to:</span> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Kolkata -700016
                        </div>
                        <div className="totalPrice">
                            Total Price: <span>₹3497</span>
                        </div>
                        <div className="cartSinglepayBtn">
                            <button className="deleteCartBtn"><i className="fal fa-trash-alt"></i></button>
                            <button className="payforThisBtn">Pay only for this</button>
                        </div>
                    </div>
                </div>
            
                <div className="cartItem">
                    <h3>Fresh Fruits</h3>
                    <div className="campaignsBanner_endTime">End In<span><i className="fal fa-clock"></i> 00h 00m 00s</span></div>
                    <div className="deliveryTime">Delivery by Jul 25 I 00:00AM</div>
                    <div className="campaignsCartBox">
                        <h4>Item Bought: <span>Dry cakes</span> <span>Pastries</span> <span>Fresh Breads</span> <span>Fresh Breads</span></h4>
                        <div className="totalQty">
                            <span>Qty Total:</span> 3kgs
                        </div>
                        <div className="deliveryAddress">
                            <span>Delivery to:</span> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Kolkata -700016
                        </div>
                        <div className="totalPrice">
                            Total Price: <span>₹3497</span>
                        </div>
                        <div className="cartSinglepayBtn">
                            <button className="deleteCartBtn"><i className="fal fa-trash-alt"></i></button>
                            <button className="payforThisBtn">Pay only for this</button>
                        </div>
                    </div>
                </div>
            </div>

            <CartPopular />

            <div className="footBtnWrap">
                <Button component={Link} to="/payment-method" className="payNowBtn" variant="contained">Pay Now</Button>
            </div>
        </div>
        
    </>
  )
}

export default Cart