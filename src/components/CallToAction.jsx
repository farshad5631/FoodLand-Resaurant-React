import ctaImage from "../assets/Images/burger_sandwich_PNG4135 2.png";

const CallToAction = () => {
  return (
    <section className=" flex mx-auto pt-4 justify-center w-4/5">
      <div className="bg-black h-80 flex flex-col md:flex-row items-center px-5 mx-auto rounded-3xl mt-12 justify-between">
        <img
          src={ctaImage}
          alt="CTA Image"
          className="-mt-20 -mb-10 h-auto w-auto"
        />

        <div className="md:ml-20 md:mr-12 md:pt-20 pt-4 md:pb-20 items-center ">
          <h2 className="md:text-3xl text-sm text-center text-white font-semibold mb-2">
            Subcribe To Our Newsletter
          </h2>

          <p className="text-white mb-4 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus
            mauris sem sed urna venenatis vivamus. Egestas in velit nulla
            viverra turpis id ac. Amet faucibus tempus.
          </p>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2  rounded-l-md focus:outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
