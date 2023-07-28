import React from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Shop from "../pages/Shop";
import BlogDetals from "../components/blog/BlogDetals";
import AboutUs from "../components/dropdDownPages/AboutUs";
import ShoppingCart from "../components/Cart/ShoppingCart";
import CheckOut from "../components/dropdDownPages/CheckOut";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainProducts from "../components/products/MainProducts";
import Category from "../pages/Category";
import ShopDetails from "../components/dropdDownPages/ShopDetails";
import EmptyCarts from "../components/EmptyCart/EmptyCarts";
import Page404 from "../pages/404";
import WishList from "../pages/WishList";
import Payment from "../pages/Payment";
import SearchedProduct from "../pages/SearchedProduct";
import Protected from "./Protected";
import { GlobalContext } from "../context/GlobalContext";
const Navigation = () => {
const{isLogin}=GlobalContext()
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Home" element={<DashBoard />} />
        <Route index element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog-details" element={<BlogDetals />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="products" element={<MainProducts />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/empty-cart" element={<EmptyCarts />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/searchedProduct" element={<SearchedProduct />} />
        <Route path="/shopping-cart" element={<Protected isLogin={isLogin}><ShoppingCart /></Protected>}/>
        <Route path="/checkout" element={<Protected isLogin={isLogin}><CheckOut /></Protected>}/>
        <Route path="/payment" element={<Protected isLogin={isLogin}><Payment /></Protected>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default Navigation;
