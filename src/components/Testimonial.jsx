import TestImage from "../assets/Images/testomonial.png";
import image from "../assets/Images/fast-food-banner-junk-food.png";

import TitleCard from "./Cards/TitleCard";
const Testimonial = () => {
  const heading = {
    heading: "Our Happy Client Says",
    title: "Testimonials",
  };
  return (
    <div className="flex flex-col mb-20 ">
      <TitleCard title={heading.title} heading={heading.heading} />
      <div className="container flex flex-col md:flex-row mx-auto pt-4 justify-center">
        <div className="flex flex-col items-center w-full md:w-2/5 my-auto mr-8">
          <div className="relative shadow-primary bg-white rounded-3xl px-10 py-14">
            <div className="flex justify-center mb-10 space-x-4 ">
              <img src={TestImage} className="hidden md:w-16 rounded-full" alt="" />
              <div className="flex-col justify-center">
                <h5 className="text-lg font-bold">Willians Jhone</h5>
                <p className="text-left">CEO & Co-Founder</p>
              </div>
            </div>

            <div className="text-center">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit
              sed dignissim ac, aliquet. Metus egestas habitant feugiat neque
              ultrices nunc, dolor egestas mus.”
            </div>
          </div>
        </div>
        <img src={image} alt="" className="w-2/5" />
      </div>
    </div>
  );
};

export default Testimonial;
