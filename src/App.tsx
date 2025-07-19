import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/cart" element={<CartPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
