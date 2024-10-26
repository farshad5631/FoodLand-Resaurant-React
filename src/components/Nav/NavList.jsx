import { Link, useLocation } from "react-router-dom";
const NavList = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden space-x-8 md:flex flex-row">
      <Link
        to="/"
        className={`hover:text-red-500 ${isActive("/") ? "text-red-500" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/Menu"
        className={`hover:text-red-500 ${
          isActive("/Menu") ? "text-red-500" : ""
        }`}
      >
        Menu
      </Link>
      <Link
        to="/About-Us"
        className={`hover:text-red-500 ${
          isActive("/About-Us") ? "text-red-500" : ""
        }`}
      >
        About Us
      </Link>
    </div>
  );
};

export default NavList;
