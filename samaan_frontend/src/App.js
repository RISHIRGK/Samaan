import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Signup from "./Components/forms/Signupform";
import OnSearch from "./Components/OnSearch";
import DetailsMain from "./Components/DetailsMain";
import Header from "./Components/Header";
import DOD from "./Components/DOD";
import Carousel from "./Components/Carousel";
import "./App.css";
import "./loader.css";
import axios from "axios";
import ProductCard from "./Components/ProductCard";
import { IoIosArrowForward } from "react-icons/io";
// import mongoose, { connect } from "mongoose";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import ProductsDiv from "./Components/ProductsDiv";
import Cart from "./Components/Cart";
import productDetails from "./context/productDetails";
import { AuthProvider } from "./context/Auth";
import Home from "./Home";
const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <div className="  w-[100%] h-[100vh]   ">
      <AuthProvider>
        
      <Routes>
        <Route to="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailsMain />} />
          <Route path="/onsearch/:id" element={<OnSearch />} />
        </Route>
        <Route path="/signupuser" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
const Cust = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return user ? children : <Navigate to="/signupuser" />;
};
