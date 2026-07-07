import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import ProductList from './pages/Home/ProductList';
import ProductDetails from './pages/Home/ProductDetails';
import Cart from './pages/Home/Cart';
import Checkout from './pages/Home/Checkout';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register';
import Categories from './pages/Home/Categories';
import ProtectedRoute from './Routes/ProtectedRoute';
import NotFound from './pages/Home/NotFound';



function App() {


  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/categories" element={<Categories />} />

        </Route>



      </Routes>
    </div>
  );
}

export default App;
