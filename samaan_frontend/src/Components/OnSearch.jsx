import React from "react";
import "./OnSearch.css";
import Header from "./Header";
import Footer from "./Footer";
import OnSearchLeft from "./OnSearchLeft";
import OnSearchRight from "./OnSearchRight";

const OnSearch = () => {
  return (
    <div>
      <div className="w-[100%] min-h-[100vh] ">
        <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit  ">
          <div className=" w-[100%]  md:min-h-[8rem]  z-10 ">
            <Header />
          </div>
          <div className="OnSearchOuter Vflex AroundFlex">
            <div className="OnSearchInnerLeft">
              <OnSearchLeft />
            </div>
            <div className="OnSearchInnerRight">
              <OnSearchRight />
            </div>
          </div>
          <div className=" w-[100%] min-h-[15rem]  ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSearch;
