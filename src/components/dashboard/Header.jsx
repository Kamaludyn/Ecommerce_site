import {
  FaAlignJustify,
  FaBell,
  FaCartArrowDown,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ OpenSidebar, toggleSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        {toggleSidebar ? (
          <svg
            className="close-svg"
            width="14"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            onClick={OpenSidebar}
          >
            <g transform="scale(1.5)">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#088179"
                fillRule="evenodd"
              />
            </g>
          </svg>
        ) : (
          <FaAlignJustify className="icon open-icon" onClick={OpenSidebar} />
        )}
        <div className="header-left">
          <Link to={"/"} className="back-to-store">
            <FaCartArrowDown className="icon icon-header" />
            Store
          </Link>
        </div>
      </div>

      <div className="header-right">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;
