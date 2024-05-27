import { NavLink } from "react-router-dom";
import closeMenu from "../../assets/images/icon-close.svg";

const Menu = ({ setIsMobileScreen, isLargeScreen }) => {
  const closeMobileMenu = () => {
    setIsMobileScreen(isLargeScreen);
  };
  return (
    <div className="menu">
      <img
        onClick={closeMobileMenu}
        id="close"
        src={closeMenu}
        alt="icon"
      ></img>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activated" : "false")}
          >
            Collections
          </NavLink>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/collection1">Collection </NavLink>
              </li>
              <li>
                <NavLink to="/collection2">Collection 2</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to="/men"
            className={({ isActive }) => (isActive ? "activated" : "false")}
          >
            Men
          </NavLink>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/collection1">Collection 1</NavLink>
              </li>
              <li>
                <NavLink to="/collection2">Collection 2</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? "activated" : "false")}
          >
            Women
          </NavLink>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/collection1">Collection 1</NavLink>
              </li>
              <li>
                <NavLink to="/collection2">Collection 2</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activated" : "false")}
          >
            About
          </NavLink>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink to="/collection1">Collection 1</NavLink>
              </li>
              <li>
                <NavLink to="/collection2">Collection 2</NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "activated" : "false")}
          >
            Contact Us
          </NavLink>
          <div className="dropdown">
            <ul>
              <li>
                <NavLink class to="/collection1">
                  Phones and Accessories
                </NavLink>
              </li>
              <li>
                <NavLink to="/collection2">Collection 2</NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
