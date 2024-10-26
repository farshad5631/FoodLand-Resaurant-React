import { Icon } from "@iconify/react";
import icon from "../assets/icons/delivery-bike (3).png";
import ButtonWithIcon from "./Buttons/ButtonWithIcon";
import SemiRoundButton from "./Buttons/SemiRoundButton";
import Items from "./Items";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const menuClickHandler = () => {
    navigate("/menu");
  };
  return (
    <div className="container flex flex-col-reverse items-center md:flex-row  w-4/5 mx-auto pt-4">
      <div className=" flex flex-col md:text-left justify-center md:justify-start">
        <div>
          <ButtonWithIcon img={icon}>Bike Delivery</ButtonWithIcon>
        </div>

        <h1 className="font-bold text-xl md:text-7xl md:pr-36 mt-10">
          The Fastest
        </h1>
        <h1 className="font-bold text-xl md:text-7xl md:pr-36">Delivery</h1>
        <h1 className="font-bold text-xl md:text-7xl md:pr-36 mb-10">
          In
          <span className="text-red-500"> Your City</span>
        </h1>
        <p className="md:pr-56 my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed
          proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed
          tortor etiam volutpat ipsum.
        </p>
        <div className="flex flex-row space-x-6">
          <span className="flex flex-row justify-between place-items-center space-x-4">
            <SemiRoundButton onClick={menuClickHandler}>
              See the Menu
            </SemiRoundButton>
          </span>
          <button className="flex flex-row justify-between place-items-center space-x-4">
            <Icon
              className="bg-red-500 text-white rounded-full text-5xl shadow-primary"
              icon="fa-play-circle"
            />
            <span className="font-semibold">Order Process</span>
          </button>
        </div>
      </div>
      <div className="hidden md:flex pt-10">
        <Items />
      </div>
    </div>
  );
};

export default Hero;
