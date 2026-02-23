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
        <div className="flex items-center gap-3">
          {/* Cart Icon Only */}
          <button onClick={() => setShowCart(true)} className="relative">
            <img
              src={shoppingCart}
              alt="Cart"
              className="w-6  bg-red-500 md:hidden rounded-full p-1"
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full md:hidden">
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl md:hidden focus:outline-none"
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
