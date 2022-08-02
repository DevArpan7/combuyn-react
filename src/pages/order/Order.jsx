import React from 'react'
import { BottomBar } from '../../components'
import OrderTopBar from './OrderTopBar'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <OrderTopBar />

            <ul className='orderList'>
              <li>
                <Link className="orderBox"  to="/orderdetails">
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 11L5.5 6L0.5 1" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4>Local Baker Campaigns</h4>
                  <p>End in Jul 21 I 00:00AM</p>
                  <p className='text-orange'>Delivery by Jul 25 I 00:00AM</p>
                  <h5>Total Price: <span>₹3497</span></h5>
                </Link>
              </li>
              <li>
                <Link className="orderBox"  to="/orderdetails">
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 11L5.5 6L0.5 1" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4>Local Baker Campaigns</h4>
                  <p>End in Jul 21 I 00:00AM</p>
                  <p className='text-orange'>Delivery by Jul 25 I 00:00AM</p>
                  <h5>Total Price: <span>₹3497</span></h5>
                </Link>
              </li>
              <li>
                <Link className="orderBox"  to="/orderdetails">
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 11L5.5 6L0.5 1" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4>Local Baker Campaigns</h4>
                  <p>End in Jul 21 I 00:00AM</p>
                  <p className='text-orange'>Delivery by Jul 25 I 00:00AM</p>
                  <h5>Total Price: <span>₹3497</span></h5>
                </Link>
              </li>
              <li>
                <Link className="orderBox"  to="/orderdetails">
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 11L5.5 6L0.5 1" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4>Local Baker Campaigns</h4>
                  <p>End in Jul 21 I 00:00AM</p>
                  <p className='text-orange'>Delivery by Jul 25 I 00:00AM</p>
                  <h5>Total Price: <span>₹3497</span></h5>
                </Link>
              </li>
              <li>
                <Link className="orderBox"  to="/orderdetails">
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 11L5.5 6L0.5 1" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4>Local Baker Campaigns</h4>
                  <p>End in Jul 21 I 00:00AM</p>
                  <p className='text-orange'>Delivery by Jul 25 I 00:00AM</p>
                  <h5>Total Price: <span>₹3497</span></h5>
                </Link>
              </li>
              <li>
                <Link className="orderBox"  to="/orderdetails">
                  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 11L5.5 6L0.5 1" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4>Local Baker Campaigns</h4>
                  <p>End in Jul 21 I 00:00AM</p>
                  <p className='text-orange'>Delivery by Jul 25 I 00:00AM</p>
                  <h5>Total Price: <span>₹3497</span></h5>
                </Link>
              </li>
            </ul>

            <BottomBar />
        </div>        
    </>
  )
}

export default Order