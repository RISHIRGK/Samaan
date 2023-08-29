import React, { useEffect } from "react";
import Header from "./Components/Header";
import DOD from "./Components/DOD";
import Carousel from "./Components/Carousel";
import "./App.css";
import axios from "axios";
import ProductCard from "./Components/ProductCard";
import { IoIosArrowForward } from "react-icons/io";
import mongoose, { connect } from "mongoose";

function App() {
  

  return (
    <div >
    <div className="  w-[100vw] h-[100vh]   bg-black ">
      <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-center items-center ">
        <div className=" w-[100%]  bg-green-400  " >
          <Header/>
        </div>
        <div className=" w-[100%] h-[85%] bg-red-400 flex flex-col   ">
          <div id="carousel" className=" w-[100%] h-[80%] bg-pink-400 ">
            <Carousel/>
          </div>

        </div>
      </div>
      <div className="Categories-Outer">
        <Categories/>
      </div>
      <Footer/>
   </div>
  );
}

export default App;

{/* <div class=" w-[100vw] h-[100vh] flex  justify-center items-center bg-black  " >
  <div class=" w-[13rem] h-[18rem] rounded-xl bg-white flex flex-col justify-start items-center " >
    <div class=" w-[100%] h-[50%]  flex justify-center items-center ">svsv</div>
    <div class=" w-[100%] h-[6%] flex justify-center items-start   "></div>
    <div class=" w-[100%] h-[15%]  flex justify-center items-center ">svsv</div>
    <div class=" w-[100%] h-[15%]  flex justify-center items-center ">svsv</div>
    <div class=" w-[100%] h-[20%]  flex justify-center items-center ">svsv</div>
  </div>
</div> */}