import { Link, useLocation } from "react-router-dom";

const NavList = ({ mobile = false, onClick }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const baseStyle = "block py-2";
  const activeStyle = "text-red-500";
  const hoverStyle = "hover:text-red-500";

  return (
    <div
      className={
        mobile ? "flex flex-col space-y-2" : "hidden md:flex flex-row space-x-8"
      }
    >
      <Link
        to="/"
        onClick={onClick}
        className={`${baseStyle} ${hoverStyle} ${
          isActive("/") ? activeStyle : ""
        }`}
      >
        Home
      </Link>

      <Link
        to="/Menu"
        onClick={onClick}
        className={`${baseStyle} ${hoverStyle} ${
          isActive("/Menu") ? activeStyle : ""
        }`}
      >
        Menu
      </Link>

      <Link
        to="/About-Us"
        onClick={onClick}
        className={`${baseStyle} ${hoverStyle} ${
          isActive("/About-Us") ? activeStyle : ""
        }`}
      >
        About Us
      </Link>
    </div>
  );
};

export default NavList;
