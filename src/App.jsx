import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import FoodDetailPage from "./components/FoodDetailPage";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/food/:id" element={<FoodDetailPage/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
