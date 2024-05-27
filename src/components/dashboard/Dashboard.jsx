import { useState } from "react";
import "./Dashboard.css";
import DashboardContent from "./DashboardContent";
import SideBar from "./SideBar";
import Header from "./Header";
import Orders from "./Orders";
import Categories from "./categories/Categories";
import Customers from "./Customers";
import Products from "./Products";
import Reports from "./Reports";
import Settings from "./Settings";
import HelpAndSupport from "./HelpAndSupport";

const Dashboard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [categories, setCategories] = useState([]);

  const OpenSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const handleItemClick = (componentName) => {
    switch (componentName) {
      case "Categories":
        setSelectedComponent(
          <Categories categories={categories} setCategories={setCategories} />
        );
        break;
      case "Customers":
        setSelectedComponent(<Customers />);
        break;
      case "Orders":
        setSelectedComponent(<Orders />);
        break;
      case "Products":
        setSelectedComponent(
          <Products categories={categories} setCategories={setCategories} />
        );
        break;
      case "Reports":
        setSelectedComponent(<Reports />);
        break;
      case "Settings":
        setSelectedComponent(<Settings />);
        break;
      case "Help and Support":
        setSelectedComponent(<HelpAndSupport />);
        break;
      default:
        setSelectedComponent(null);
        break;
    }
  };

  return (
    <div className="dashboard">
      <Header OpenSidebar={OpenSidebar} toggleSidebar={toggleSidebar} />
      <SideBar
        toggleSidebar={toggleSidebar}
        handleItemClick={handleItemClick}
      />
      <div className="dash">
        {selectedComponent ? (
          selectedComponent
        ) : (
          <DashboardContent handleItemClick={handleItemClick} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
