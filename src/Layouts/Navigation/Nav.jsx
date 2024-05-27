import logo from "../../assets/images/logo.svg";
import openMenu from "../../assets/images/icon-menu.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import Cart from "./Cart";
import Menu from "./Menu";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global-context/GlobalContext";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();

  const { numberOfProd, dropdown, openDropdownMenu } =
    useContext(GlobalContext);

  const openMobileMenu = () => {
    if (!isLargeScreen) {
      setIsMobileScreen(true);
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    const handleWidth = () => {
      if (window.innerWidth > 799) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
      console.log(isLargeScreen);
    };
    handleWidth();
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <nav>
      <section className="nav-bar">
        <div className="menu-logo-container">
          <img
            onClick={openMobileMenu}
            className="open-menu"
            src={openMenu}
            alt="Logo"
          ></img>
          <NavLink to="/">
            <img className="logo" src={logo} alt="Logo"></img>
          </NavLink>
        </div>
        <div className="search-icon-container">
          <select
            name="Search-options"
            defaultValue={selectedOption}
            onChange={handleChange}
          >
            <option value="" disabled>
              Search by category
            </option>
            <option value="electronics">Electronics</option>
            <option value="computers">Computers & Accessories</option>
            <option value="phones">Phone, Tablets & Accessories</option>
            <option value="home and kitchen">Home & Kitchen</option>
            <option value="automotives">Automotives</option>
            <option value="luggage">Lugage</option>
            <option value="sports & outdoors">Sport & Outdoors</option>
          </select>
          <input type="text" placeholder="Search our site" />
          <FaSearch className="search-icon" />
        </div>
        <div className="cart-dp-container">
          {dropdown && <Cart />}
          <div
            className="cart"
            style={{
              background: `url(${cartIcon})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={openDropdownMenu}
          >
            <span id="numberOfItems">
              {numberOfProd === 0 ? "" : numberOfProd}
            </span>
          </div>
          <div
            className="avatar-cont"
            onClick={() => navigate("/login-sign-up")}
          >
            <img className="avatar" src={avatar} alt=""></img>
          </div>
        </div>
      </section>

      <section className="menu-section">
        {isLargeScreen ? (
          <Menu
            setIsMobileScreen={setIsMobileScreen}
            isMobileScreen={isMobileScreen}
            setIsLargeScreen={setIsLargeScreen}
            IsLargeScreen={isLargeScreen}
          />
        ) : (
          isMobileScreen && (
            <Menu
              setIsMobileScreen={setIsMobileScreen}
              isMobileScreen={isMobileScreen}
              setIsLargeScreen={setIsLargeScreen}
              IsLargeScreen={isLargeScreen}
            />
          )
        )}
      </section>
    </nav>
  );
};

export default Nav;
