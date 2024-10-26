import About from "../components/About";
import Footer from "../components/footer";
import Navbar from "../components/Nav/Navbar";

const AboutUs = () => {
  return (
    <div className="flex flex-col pt-20 md:mx-auto w-full">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutUs;
