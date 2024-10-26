import MenuProducts from "../components/MenuProducts";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/footer";

const Menu = () => {
  return (
    <div className="flex flex-col pt-20 md:mx-auto w-full">
      <Navbar />
      <MenuProducts />
      <Footer />
    </div>
  );
};

export default Menu;
