import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomBar = () => {
  return (
    <>
        <div className="bottomMenu">
            <ul>
                <li>
                    <NavLink activeclassname="active" to="/home">
                        <i className="far fa-home"></i>
                        <div className="menuItem">
                            Home
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeclassname="active" to="/order">
                        <i className="far fa-shopping-bag"></i>
                        <div className="menuItem">
                            My Order
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wishlist">
                        <i className="far fa-heart"></i>
                        <div className="menuItem">
                            My Favorites
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="far fa-user-circle"></i>
                        <div className="menuItem">
                            Profile
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default BottomBar