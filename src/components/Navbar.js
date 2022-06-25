import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const routeColor = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={routeColor("/") ? "#2c2c2c" : "#8f8f8f"}
              height="36px"
              width="36px"
            />
            <p
              className={
                routeColor("/") ? "navbarListItemNameActive" : "ListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={routeColor("/offers") ? "#2c2c2c" : "#8f8f8f"}
              height="36px"
              width="36px"
            />
            <p
              className={
                routeColor("/offers")
                  ? "navbarListItemNameActive"
                  : "ListItemName"
              }
            >
              Offer
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={routeColor("/profile") ? "#2c2c2c" : "#8f8f8f"}
              height="36px"
              width="36px"
            />
            <p
              className={
                routeColor("/profile")
                  ? "navbarListItemNameActive"
                  : "ListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
