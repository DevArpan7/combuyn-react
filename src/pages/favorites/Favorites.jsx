import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Loader from "@mui/material/CircularProgress";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BottomBar } from "../../components";
import { getHeaderWithToken, checkIfUserLoggedIn } from "../../utils";
import PageRoutes from "../../routes";
import favorites1 from "../../assets/img/favorites1.png";
import Button from "@mui/material/Button";

const Favorites = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [favoriteList, setFavoriteList] = React.useState([]);
  const accessToken = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  // if not logged in , take to login
  React.useEffect(() => {
    if (!checkIfUserLoggedIn()) {
      navigate(PageRoutes.LOGIN);
    }
  }, []);

  React.useEffect(() => {
    if (accessToken) {
      axios
        .get(
          process.env.REACT_APP_API_BASE_URL + "users/campaigns",
          getHeaderWithToken(accessToken.accessToken)
        )
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setFavoriteList(res.data);
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

  const removeFavorite = (item, index) => {
    setIsLoading(true);
    const toUpdate = [...favoriteList];
    toUpdate.splice(index, 1);
    axios
      .delete(process.env.REACT_APP_API_BASE_URL + "users/campaigns", {
        ...getHeaderWithToken(accessToken.accessToken),
        data: { campaignId: item._id },
      })
      .then(() => {
        setFavoriteList(toUpdate);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.message);
      });
  };
  return (
    <>
      <div className="forHeaderFix forBottomFix">
        <div className="mainTopBar">
          <div className="mainTopBar_left">
            <Link className="topBackBtn" to={PageRoutes.HOME}>
              <i className="fas fa-arrow-left"></i>
            </Link>
            My Favorites
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </div>
          <div className="mainTopBar_right">
            <ul>
              <li>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-bag"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <BottomBar />

        <div className="favoritesListWrap">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {favoriteList.map((item, index) => {
                return (
                  <div className="favoritesList" key={index}>
                    <div className="favoritesListImg">
                      <div className="favoritesListImg__top">
                        <img
                          src={
                            item.images && item.images.length > 0
                              ? item.images[0].link
                              : favorites1
                          }
                          alt=""
                        />
                      </div>
                      <h3>{item.name}</h3>
                    </div>
                    {/* <button className="viewCampanignsBtn">
                      View Campanigns
                    </button> */}
                    <Button
                      component={Link}
                      className="viewCampanignsBtn"
                      to={`${PageRoutes.CAMPAIGN_DETAILS}`}
                      state={{ campaign: item }}
                    >
                      View Campanigns
                    </Button>
                    <Button onClick={() => removeFavorite(item, index)}>
                      Remove as favorite
                    </Button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
