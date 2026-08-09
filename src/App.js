import './App.css';

import { Routes, Route } from "react-router-dom";

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Home Pages
import Home from './pages/Home/Home';
import ProductList from './pages/Home/ProductList';
import ProductDetails from './pages/Home/ProductDetails';
import Checkout from './pages/Home/Checkout';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register';
import Categories from './pages/Home/Categories';
import Cart from './pages/Home/Cart/Cart';
import OrderList from './pages/Home/OrderList';
import OrderDetails from './pages/Home/OrderDetails';
import TrackOrder from './pages/Home/TrackOrder';
import NotFound from './pages/Home/NotFound';

// Routes
import ProtectedRoute from './Routes/ProtectedRoute';
import GuestRoute from './Routes/GuestRoute';
import AdminRoute from './Routes/AdminRoute';

// Context
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { AdminProvider } from './context/AdminContext';

// Admin
import AdminLayout from './components/layout/Admin/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import Products from './pages/Admin/Products';
import AdminCategories from './pages/Admin/Categories';
import Orders from './pages/Admin/Orders';
import AdminOrderDetails from './pages/Admin/AdminOrderDetails';
import Customers from './pages/Admin/Customers';

// Toast
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (

    <AuthProvider>

      <AdminProvider>

        <CartProvider>

          <Routes>

            {/* GUEST ROUTES */}

            <Route element={<GuestRoute />}>

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/register"
                element={<Register />}
              />

            </Route>


            {/* PUBLIC STORE ROUTES */}

            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />

            <Route
              path="/products"
              element={
                <>
                  <Navbar />
                  <ProductList />
                  <Footer />
                </>
              }
            />

            <Route
              path="/products/:id/:slug"
              element={
                <>
                  <Navbar />
                  <ProductDetails />
                  <Footer />
                </>
              }
            />

            <Route
              path="/categories"
              element={
                <>
                  <Navbar />
                  <Categories />
                  <Footer />
                </>
              }
            />


            {/*PROTECTED CUSTOMER ROUTES */}

            <Route element={<ProtectedRoute />}>

              <Route
                path="/cart"
                element={
                  <>
                    <Navbar />
                    <Cart />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/checkout"
                element={
                  <>
                    <Navbar />
                    <Checkout />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/orders"
                element={
                  <>
                    <Navbar />
                    <OrderList />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/orders/:id"
                element={
                  <>
                    <Navbar />
                    <OrderDetails />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/orders/track-order/:id"
                element={
                  <>
                    <Navbar />
                    <TrackOrder />
                    <Footer />
                  </>
                }
              />

            </Route>


            {/*ADMIN ROUTES */}

            <Route element={<AdminRoute />}>

              <Route path="/admin" element={<AdminLayout />}>

                <Route
                  index
                  element={<Dashboard />}
                />

                <Route
                  path="products"
                  element={<Products />}
                />

                <Route
                  path="categories"
                  element={<AdminCategories />}
                />

                <Route
                  path="orders"
                  element={<Orders />}
                />

                <Route
                  path="orders/:id"
                  element={<AdminOrderDetails />}
                />

                <Route
                  path="customers"
                  element={<Customers />}
                />

              </Route>

            </Route>


            {/* 404*/}

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>


          <ToastContainer />

        </CartProvider>

      </AdminProvider>

    </AuthProvider>
  );
}

export default App;