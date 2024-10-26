import React, { useContext, useState } from "react";
import CartOverlay from "../../components/CartOverlay";
import { CartContext } from "../../context/CartContext";
import logo from "../../assets/Images/FoodLand.png";
import NavList from "./NavList";
import RoundedButton from "../Buttons/RoundedButton";
import shoppinCart from "../../assets/icons/shopping-cart.svg"


const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className=" md:px-44 py-4 fixed w-full px-2 bg-white top-0 z-10 md:mx-auto">
      <div className="flex flex-row items-center justify-between ">
        <a href="/" className="pt-2 cursor-pointer  ">
          <img src={logo} alt="Logo" className="md:w-36 w-28" />
        </a>
        <NavList />
        <RoundedButton>contact</RoundedButton>
        <RoundedButton
          onClick={() => setShowCart(!showCart)}
          className="bg-blue-500 p-2 relative"
          img={shoppinCart}
        >
          cart ({totalItems})
        </RoundedButton>
        {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
