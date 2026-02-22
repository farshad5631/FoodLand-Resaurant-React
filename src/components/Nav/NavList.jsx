// import { Link, useLocation } from "react-router-dom";
// const NavList = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="hidden space-x-8 md:flex flex-row">
//       <Link
//         to="/"
//         className={`hover:text-red-500 ${isActive("/") ? "text-red-500" : ""}`}
//       >
//         Home
//       </Link>
//       <Link
//         to="/Menu"
//         className={`hover:text-red-500 ${
//           isActive("/Menu") ? "text-red-500" : ""
//         }`}
//       >
//         Menu
//       </Link>
//       <Link
//         to="/About-Us"
//         className={`hover:text-red-500 ${
//           isActive("/About-Us") ? "text-red-500" : ""
//         }`}
//       >
//         About Us
//       </Link>
//     </div>
//   );
// };

// export default NavList;

// import { Link, useLocation } from "react-router-dom";

// const NavList = ({ mobile = false, onClickItem }) => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   const baseClass = mobile
//     ? "block py-2 text-lg border-b"
//     : "hover:text-red-500";

//   return (
//     <div className={mobile ? "flex flex-col" : "flex gap-8"}>
//       <Link
//         to="/"
//         onClick={onClickItem}
//         className={`${baseClass} ${isActive("/") ? "text-red-500" : ""}`}
//       >
//         Home
//       </Link>

//       <Link
//         to="/Menu"
//         onClick={onClickItem}
//         className={`${baseClass} ${isActive("/Menu") ? "text-red-500" : ""}`}
//       >
//         Menu
//       </Link>

//       <Link
//         to="/About-Us"
//         onClick={onClickItem}
//         className={`${baseClass} ${isActive("/About-Us") ? "text-red-500" : ""}`}
//       >
//         About Us
//       </Link>
//     </div>
//   );
// };

// export default NavList;

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
