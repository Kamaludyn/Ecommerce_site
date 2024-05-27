import { Outlet } from "react-router-dom";
import Nav from "./Navigation/Nav";
import Footer from "./Footer";
const MainLayout = ({ openDropdownMenu, dropdown, setDropdown }) => {
  return (
    <>
      <Nav
        dropdown={dropdown}
        setDropdown={setDropdown}
        openDropdownMenu={openDropdownMenu}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
