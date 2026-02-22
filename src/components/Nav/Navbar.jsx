// import React, { useContext, useState } from "react";
// import CartOverlay from "../../components/CartOverlay";
// import { CartContext } from "../../context/CartContext";
// import logo from "../../assets/Images/FoodLand.png";
// import NavList from "./NavList";
// import RoundedButton from "../Buttons/RoundedButton";
// import shoppingCart from "../../assets/icons/shopping-cart.svg";

// const Navbar = () => {
//   const [showCart, setShowCart] = useState(false);
//   const { cart } = useContext(CartContext);

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <nav className=" md:px-44 py-4 fixed w-full px-2 bg-white top-0 z-10 md:mx-auto">
//       <div className="flex flex-row items-center justify-between ">
//         <a href="/" className="pt-2 cursor-pointer  ">
//           <img src={logo} alt="Logo" className="md:w-36 w-28" />
//         </a>
//         <NavList />
//         <RoundedButton>contact</RoundedButton>
//         <RoundedButton
//           onClick={() => setShowCart(!showCart)}
//           className="bg-blue-500 p-2 relative"
//           img={shoppingCart}
//         >
//           cart ({totalItems})
//         </RoundedButton>
//         {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from "react";
// import CartOverlay from "../../components/CartOverlay";
// import { CartContext } from "../../context/CartContext";
// import logo from "../../assets/Images/FoodLand.png";
// import NavList from "./NavList";
// import RoundedButton from "../Buttons/RoundedButton";
// import shoppingCart from "../../assets/icons/shopping-cart.svg";

// const Navbar = () => {
//   const [showCart, setShowCart] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cart } = useContext(CartContext);

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <nav className="fixed top-0 w-full bg-white z-20 shadow-sm px-3 md:px-20 py-3">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" className="cursor-pointer">
//           <img src={logo} alt="Logo" className="w-28 md:w-36" />
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <NavList />
//           <RoundedButton>Contact</RoundedButton>
//           <RoundedButton
//             onClick={() => setShowCart(true)}
//             className="bg-blue-500 p-2 relative"
//             img={shoppingCart}
//           >
//             Cart ({totalItems})
//           </RoundedButton>
//         </div>

//         {/* Mobile Right Side */}
//         <div className="flex items-center gap-3 md:hidden">
//           {/* Cart Icon */}
//           <button onClick={() => setShowCart(true)} className="relative p-2">
//             <img src={shoppingCart} alt="cart" className="w-6" />
//             {totalItems > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
//                 {totalItems}
//               </span>
//             )}
//           </button>

//           {/* Hamburger */}
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden mt-3 border-t pt-3 flex flex-col gap-4 bg-white">
//           <NavList mobile onClickItem={() => setMenuOpen(false)} />
//           <RoundedButton className="w-full">Contact</RoundedButton>
//         </div>
//       )}

//       {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartOverlay from "../../components/CartOverlay";
import { CartContext } from "../../context/CartContext";
import logo from "../../assets/Images/FoodLand.png";
import NavList from "./NavList";
import RoundedButton from "../Buttons/RoundedButton";
import shoppingCart from "../../assets/icons/shopping-cart.svg";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-20 py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 md:w-36" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavList />
          <RoundedButton>Contact</RoundedButton>
          <RoundedButton
            onClick={() => setShowCart(true)}
            className="bg-blue-500 p-2 relative"
            img={shoppingCart}
          >
            Cart ({totalItems})
          </RoundedButton>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Cart Icon Only */}
          <button onClick={() => setShowCart(true)} className="relative">
            <img src={shoppingCart} alt="Cart" className="w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-4 animate-slide-down">
          <NavList mobile onClick={() => setMobileMenuOpen(false)} />
          <RoundedButton className="w-full">Contact</RoundedButton>
        </div>
      )}

      {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
    </nav>
  );
};

export default Navbar;
