import React from 'react'
import { Link } from 'react-router-dom'
import { BottomBar } from '../../components'
import favorites1 from "../../assets/img/favorites1.png";
import favorites2 from "../../assets/img/favorites2.png";
import favorites3 from "../../assets/img/favorites3.png";
import favorites4 from "../../assets/img/favorites4.png";

const Favorites = () => {
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <div className="mainTopBar">
                <div className="mainTopBar_left">
                    <Link className='topBackBtn' to="/home">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    My Favorites 
                </div>
                <div className="mainTopBar_right">
                    <ul>
                        <li>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <BottomBar />

            <div className='favoritesListWrap'>
                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites1} alt="" />
                        </div>
                        <h3>Local Baker Campaigns</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites2} alt="" />
                        </div>
                        <h3>Bangalore bakery & Kerala Snacks</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites3} alt="" />
                        </div>
                        <h3>Cosmetic</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites4} alt="" />
                        </div>
                        <h3>Fresh Vegetables</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites1} alt="" />
                        </div>
                        <h3>Local Baker Campaigns</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites2} alt="" />
                        </div>
                        <h3>Bangalore bakery & Kerala Snacks</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites3} alt="" />
                        </div>
                        <h3>Cosmetic</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites4} alt="" />
                        </div>
                        <h3>Fresh Vegetables</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites1} alt="" />
                        </div>
                        <h3>Local Baker Campaigns</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites2} alt="" />
                        </div>
                        <h3>Bangalore bakery & Kerala Snacks</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites3} alt="" />
                        </div>
                        <h3>Cosmetic</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>

                <div className="favoritesList">
                    <div className="favoritesListImg">
                        <div className="favoritesListImg__top">
                            <img src={favorites4} alt="" />
                        </div>
                        <h3>Fresh Vegetables</h3>
                    </div>
                    <button className='viewCampanignsBtn'>View Campanigns</button>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Favorites