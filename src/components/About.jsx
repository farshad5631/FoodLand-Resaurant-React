// import RoundButton from "../components/Buttons/RoundedButton";
// import Student from "../assets/icons/Student";
// import Person from "../assets/icons/Person";
// import Coffee from "../assets/icons/Coffee";
// import about1 from "../assets/Images/about 1.png";
// import about2 from "../assets/Images/about 2.png";
// import about3 from "../assets/Images/about 3.png";
// import about4 from "../assets/Images/about4.png";
// import { Icon } from "@iconify/react";
// import MenuList from "./List/MenuList";
// import { useState } from "react";
// import AboutMenu from "./AboutMenu";

// const About = () => {
//   const [selectedCategory, setSelectedCategory] = useState("breakfast");

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <div className="container flex flex-row  w-4/5 mx-auto ">
//         <div className="flex flex-row items-center pl-12">
//           <div className=" flex flex-col items-center mr-6 -mt-24 ">
//             <img className=" h-auto " src={about1} alt="Image1" />
//           </div>
//           <div className="flex flex-col gap-6 pt-28">
//             <img src={about2} alt="" />
//             <img src={about3} alt="" />
//           </div>
//         </div>
//         <div className="text-left justify-start w-1/2 pl-28 pt-36 pr-28">
//           <h1 className="font-bold text-3xl mt-10">
//             Food is an important part Of a balanced Diet
//           </h1>
//           <p className=" my-10">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             diam pellentesque bibendum non dui volutpat fringilla bibendum.
//             Urna, elit augue urna, vitae feugiat pretium donec id elementum.
//             Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
//             velit in consequat.
//           </p>
//           <div className="flex flex-row space-x-6 place-items-center">
//             <a>
//               <RoundButton>Show more</RoundButton>
//             </a>
//             <button className="flex flex-row justify-between place-items-center space-x-4">
//               <Icon
//                 className="bg-white text-red-500 rounded-full text-5xl shadow-primary"
//                 icon="fa-play-circle"
//               />
//               <span className="font-semibold">Watch Video</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="container flex flex-col mt-24 mx-auto w-4/5 justify-center items-center ">
//         <div className="flex flex-col mx-auto justify-center items-center w-2/5 space-y-8 mb-10">
//           <h2 className="text-black text-5xl font-bold">Why Choose Us</h2>
//           <p className="text-center">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//             diam pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
//           </p>
//         </div>
//         <div>
//           <img src={about4} alt="image4" />
//         </div>
//         <div className="flex flex-row justify-between mt-16 space-x-28">
//           <div className="flex flex-col justify-center items-center space-y-6">
//             {/* <Icon
//               className="text-black text-7xl"
//               icon="heroicons:academic-cap"
//             /> */}
//             <Student />
//             <h2 className="text-3xl font-bold">Best Chef</h2>
//             <p className="flex justify-center text-center">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//               diam pellentesque bibendum non dui volutpat{" "}
//             </p>
//           </div>
//           <div className="flex flex-col justify-center items-center space-y-6">
//             <Person />
//             <h2 className="text-3xl font-bold">Clean Environment</h2>
//             <p className="flex justify-center text-center">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//               diam pellentesque bibendum non dui volutpat{" "}
//             </p>
//           </div>
//           <div className="flex flex-col justify-center items-center space-y-6">
//             <Coffee />
//             <h2 className="text-3xl font-bold">120 Item food</h2>
//             <p className="flex justify-center text-center">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//               diam pellentesque bibendum non dui volutpat{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="container flex flex-col my-24 mx-auto w-4/5 justify-center items-center">
//         <div className="flex flex-col mx-auto justify-center items-center w-2/5 space-y-8 mb-10">
//           <h2 className="text-black text-5xl font-bold">Our Food Menu</h2>
//           <p className="text-center">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
//             pharetra dictum neque massa congue{" "}
//           </p>
//         </div>
//         <AboutMenu onCategoryChange={handleCategoryChange} />
//         <hr className="text-gray-700 w-4/5 block" />
//         <MenuList category={selectedCategory} />
//         <RoundButton>contact</RoundButton>
//       </div>
//     </div>
//   );
// };

// export default About;

import RoundButton from "../components/Buttons/RoundedButton";
import Student from "../assets/icons/Student";
import Person from "../assets/icons/Person";
import Coffee from "../assets/icons/Coffee";
import about1 from "../assets/Images/about 1.png";
import about2 from "../assets/Images/about 2.png";
import about3 from "../assets/Images/about 3.png";
import about4 from "../assets/Images/about4.png";
import { Icon } from "@iconify/react";
import MenuList from "./List/MenuList";
import { useState } from "react";
import AboutMenu from "./AboutMenu";

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("breakfast");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-4 md:px-0">
      {/* Section 1 */}
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10 mt-10">
        {/* Images */}
        <div className="flex flex-col sm:flex-row items-center gap-6 md:w-1/2">
          <img src={about1} alt="Image1" className="w-40 sm:w-48 md:w-auto" />

          <div className="flex flex-row sm:flex-col gap-4">
            <img src={about2} alt="" className="w-32 sm:w-40 md:w-auto" />
            <img src={about3} alt="" className="w-32 sm:w-40 md:w-auto" />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl">
            Food is an important part Of a balanced Diet
          </h1>

          <p className="my-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <RoundButton>Show more</RoundButton>

            <button className="flex items-center gap-3">
              <Icon
                className="bg-white text-red-500 rounded-full text-4xl shadow-primary"
                icon="fa-play-circle"
              />
              <span className="font-semibold">Watch Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: Why Choose Us */}
      <div className="container mx-auto max-w-6xl mt-16 text-center px-2">
        <div className="max-w-xl mx-auto space-y-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <img src={about4} alt="image4" className="mx-auto w-full max-w-4xl" />

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <Student />
            <h3 className="text-xl font-bold">Best Chef</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Person />
            <h3 className="text-xl font-bold">Clean Environment</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Coffee />
            <h3 className="text-xl font-bold">120 Item food</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Menu */}
      <div className="container mx-auto max-w-6xl my-16 text-center px-2">
        <div className="max-w-xl mx-auto space-y-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Food Menu</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <AboutMenu onCategoryChange={handleCategoryChange} />

        <hr className="my-6" />

        <MenuList category={selectedCategory} />

        <div className="mt-8">
          <RoundButton>Contact</RoundButton>
        </div>
      </div>
    </div>
  );
};

export default About;
