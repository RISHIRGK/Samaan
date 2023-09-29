import React, { useEffect, useLayoutEffect } from "react";
import  {Routes,Route,Navigate} from 'react-router-dom'
import Main from './Main'
import Signup from './Components/forms/signupform'
import OnSearch from './Components/OnSearch'
import DetailsMain from './Components/DetailsMain'
import Header from "./Components/Header";
import DOD from "./Components/DOD";
import Carousel from "./Components/Carousel";
import "./App.css";
import "./loader.css"
import axios from "axios";
import ProductCard from "./Components/ProductCard";
import { IoIosArrowForward } from "react-icons/io";
// import mongoose, { connect } from "mongoose";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import ProductsDiv from "./Components/ProductsDiv";
import productDetails from "./context/productDetails";
const App = () => {
  const [product_data, setproduct_data] = React.useState(null); 
  useLayoutEffect(()=>{
    const fetchdata = async () => {
      await fetch("https://api-krudra9125-gmailcom.vercel.app/api/products/")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setproduct_data(data);
        })
        .catch((err) => console.log(err));
      
    };
    fetchdata();

  },[])

  const [user, setUser] = React.useState(null)
 
  return (
    <div>
      <productDetails.Provider value={{product_data}}>
      <div className="  w-[100%] h-[100vh]   ">
        <div className="w-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit   ">
          <div className=" w-[100%]  md:min-h-[8rem] top-0 fixed  z-10 " >
            <Header />
          </div>
        <div className="w-[100%] h-[80vh] "  >
       <Routes>
        <Route  path='/' element={
   
            <Main/>
        
       
        
          }  />
        <Route path='/product/:id' element={<DetailsMain/>}  />
        <Route path='/onsearch/:id' element={<OnSearch/>}  />

       
      </Routes>
      <div className=" w-[100%] min-h-[15rem]   " >
            <Footer />
          </div>
          </div>
        </div>
      </div>
      </productDetails.Provider>
    </div>
  )
}

export default App
const Cust = ({children}) => {
  const [user, setUser] = React.useState(null)

  return user?children:<Navigate to="/signupuser" />
  
  
}