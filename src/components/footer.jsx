import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white  ">
      <div className="grid md:grid-cols-3 p-4 md:px-40 md:py-28 ">
        <div className="md:px-24 space-y-4">
          <h3 className="text-lg font-bold">FoodLand</h3>
          <p
            className="text-black
          "
          >
            Subscribe our newsletter and get discount 25% off
          </p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2  rounded-l-md focus:outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
              Submit
            </button>
          </div>
        </div>

        <div className=" flex flex-col md:px-14 space-y-4">
          <h3 className="text-lg font-bold">Contact us</h3>
          <p className="text-black">London England, 3rd Floor, Office 45</p>
          <p className="text-black">00965 - 96659986</p>
          <p className="text-black">M.Alyaqout@4house.Co</p>
          <p className="text-black">Sun - Sat / 10:00 AM - 8:00 PM</p>
        </div>

        <div className="md:px-24 flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Links</h3>
          <Link to="/About-Us">About Us</Link>
          <a href="">Contact Us</a>
          <Link to="/Menu">Our Menu</Link>
          <a href="">Our Team</a>
          <a href="">FAQ</a>
        </div>
      </div>

      <div className="bg-red-500 md:w-screen text-white flex text-xs md:text-sm py-3">
        <div className="flex items-center mx-auto w-1/2 justify-center">
          <p>Copyright © 2024 Shawon3 Themes. All rights reserved</p>
        </div>
        <div className="hidden md:flex flex-row mx-auto w-1/2 justify-center space-x-8">
          <a href="">Privacy Policy</a>
          <a href="">Term of Use</a>
          <a href="">Partner</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
