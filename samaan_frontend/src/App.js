import React from "react";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import "./App.css";
import ProductCard from "./Components/ProductCard";
import {IoIosArrowForward} from "react-icons/io"
function App() {
  return (
    <div >

    <div className="  w-[100vw] h-[100vh]   ">
      <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-center items-center ">
        <div className=" w-[100%]   " >
          <Header/>
        </div>
        <div className=" w-[100%] h-[85%] flex flex-col overflow-scroll   ">
          <div id="carousel" className=" w-[100%] h-[90%]  ">
            <Carousel/>
          </div>
          <div id="products" className=" ring-1 w-[100%] h-[80%]    flex flex-col gap-4  justify-between items-center  ">
            <div className="w-full h-[20%] flex justify-between px-8 items-center " >
              <div> <span className=" text-5xl  font-[900] drop-shadow-xl    " >DEALS OF THE DAY</span></div>
              <div><button className="bg-yellow-300 text-black  flex  rounded-xl shadow-lg text-2xl  items-center py-2 px-2 font-bold  " ><span>Explore More</span><IoIosArrowForward/> </button></div>
            </div>
            <div className="w-[100%] h-[80%] flex justify-between gap-8 items-center overflow-auto " >
            <ProductCard imgSrc={"./britannia-50-50-maska-chaska-biscuits.png"}/>
            <ProductCard imgSrc={"./cadbury-bournvita-biscuit.png"}/>
            <ProductCard imgSrc={"./britannia-nutrichoice-hi-fibre-digestive-biscuits.png"}/>
            <ProductCard imgSrc={"./britannia-50-50-maska-chaska-biscuits.png"}/>
            <ProductCard imgSrc={"./cadbury-bournvita-biscuit.png"}/>
            <ProductCard imgSrc={"./britannia-nutrichoice-hi-fibre-digestive-biscuits.png"}/>
            <ProductCard imgSrc={"./britannia-50-50-maska-chaska-biscuits.png"}/>
            <ProductCard imgSrc={"./cadbury-bournvita-biscuit.png"}/>
            <ProductCard imgSrc={"./britannia-nutrichoice-hi-fibre-digestive-biscuits.png"}/>
            </div>
          
      
            </div>

        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
