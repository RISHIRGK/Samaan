import React, { useEffect, useLayoutEffect } from "react";
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

function App() {
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

  return (
    <div>
      <productDetails.Provider value={{product_data}}>
      <div className="  w-[100%] h-[100vh]   ">
        <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit  ">
          <div className=" w-[100%]  md:min-h-[8rem]  z-10 " >
            <Header />
          </div>
          <div className=" w-[100%] md:min-h-[32rem]   " >
            <Carousel />
          </div>
          <div className=" w-[100%] min-h-[27rem]  flex justify-center items-center " >
          {product_data?  <div
              id="products"
              className="  w-[100%]   flex flex-col gap-4  justify-between items-start  "
            >

              <div className="w-[100%] h-[20%] flex justify-between px-2   md:px-8 items-center ">
                <div>

                  <span className=" text-xl md:text-5xl  font-[900] drop-shadow-xl    ">
                    DEALS OF THE DAY
                  </span>
                </div>
                <div>
                  <button className="bg-yellow-300 text-black   md:w-[11.6rem]  flex  rounded-xl shadow-lg md:text-2xl  items-center py-2 px-2 font-bold  ">
                    <span>Explore More</span>
                    <IoIosArrowForward />{" "}
                  </button>
                </div>
              </div>
              <div className="w-[100%] h-[80%] flex justify-between gap-8 items-center  ">
                
                <DOD />

              </div>

            </div>:<span class="loader">SAMAAN.COM</span>}
          </div>

          {product_data?<ProductsDiv title={"Dairy,Bread&Eggs"} Category="dairy" />:<span class="loader">SAMAAN.COM</span>}
          {product_data?<ProductsDiv title={"biscuts"} Category="biscuts" />:<span class="loader">SAMAAN.COM</span>}
          {product_data?<ProductsDiv title={"namkeen"} Category="namkeen" />:<span class="loader">SAMAAN.COM</span>}
          {product_data?<ProductsDiv title={"Munchies"} Category="snacks" />:<span class="loader">SAMAAN.COM</span>}
          <div className=" w-[100%] min-h-[15rem]  " >
            <Footer />
          </div>
          {/* <div className=" w-[100%]  h-[20%]  ">
            <Header />
          </div>
          <div className=" w-[100%] h-[85%] flex flex-col overflow-scroll   ">
            <div id="carousel" className=" bg-pink-500 w-[100%] h-[70%] ">
              <Carousel />
            </div> */}
          {/* <div className="  w-[100%]  flex flex-col  ">
              <div className=" h-[10%] w-[100%] text-center  text-2xl font-bold " >Shop By Category</div>
              <div className="w-[100%] h-[90%] flex flex-wrap justify-center items-center gap-3 " >
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>
                <div className=" h-[12rem] w-[10rem] bg-green-500  flex flex-col " >
                  <div className="w-[100%] h-[70%] bg-pink-500 "></div>
                  <div className="w-[100%] h-[30%] bg-yellow-500 text-xl font-extrabold break-all text-center ">Snack&Munchies</div>
                </div>

              </div>
              
            </div> */}
          {/* <div
              id="products"
              className=" ring-1 w-[100%]   flex flex-col gap-4  justify-between items-start  "
            >
           
              <div className="w-[100%] h-[20%] flex justify-between px-2   md:px-8 items-center ">
                <div>
            
                  <span className=" text-xl md:text-5xl  font-[900] drop-shadow-xl    ">
                    DEALS OF THE DAY
                  </span>
                </div>
                <div>
                  <button className="bg-yellow-300 text-black   md:w-[11.6rem]  flex  rounded-xl shadow-lg md:text-2xl  items-center py-2 px-2 font-bold  ">
                    <span>Explore More</span>
                    <IoIosArrowForward />{" "}
                  </button>
                </div>
              </div>
              <div className="w-[100%] h-[80%] flex justify-between gap-8 items-center  ">

          <DOD/>
             
              </div>

            </div> */}
        </div>
      </div>
      </productDetails.Provider>
    </div>
    // </div>
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