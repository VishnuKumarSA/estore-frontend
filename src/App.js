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
import GuestRoute from './Routes/GuestRoute';
import { AuthProvider } from './context/AuthContext';



function App() {


  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>

          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />



            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path='products/:id/:slug' element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
