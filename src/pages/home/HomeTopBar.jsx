import React from 'react'
import { Link } from 'react-router-dom';

import topbarLogo from "../../assets/img/onlylogo.png";

const HomeTopBar = () => {
  return (
    <>
        <div className="home_topbar">
            <div className="home_topbar_left">
                <img src={topbarLogo}  alt=""/>
            </div>

            <div className="home_topbar_right">
                <ul>
                    <li>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default HomeTopBar