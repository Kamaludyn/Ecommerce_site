import {
  FaArchive,
  FaChartBar,
  FaCog,
  FaFlag,
  FaListAlt,
  FaPeopleArrows,
  FaTags,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ toggleSidebar, handleItemClick }) => {
  return (
    <aside className={toggleSidebar ? "sidebar-responsive sidebar" : "sidebar"}>
      <ul className="side-list">
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("DashBoard")}
        >
          <Link className="link">
            <FaChartBar className="icon" /> DashBoard Overview
          </Link>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("Categories")}
        >
          <Link className="link">
            <FaTags className="icon" /> Categories
          </Link>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("Products")}
        >
          <Link className="link">
            <FaListAlt className="icon" /> Products
          </Link>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("Customers")}
        >
          <Link className="link">
            <FaPeopleArrows className="icon" /> Customers
          </Link>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("Orders")}
        >
          <Link className="link">
            <FaPeopleArrows className="icon" /> Orders
          </Link>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("Reports")}
        >
          <Link className="link">
            <FaFlag className="icon" /> Reports
          </Link>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("Settings")}
        >
          <Link className="link">
            <FaCog className="icon" /> Settings
          </Link>
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => handleItemClick("Help and Support")}
        >
          <Link className="link">
            <FaCog className="icon" /> Help and Support
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
