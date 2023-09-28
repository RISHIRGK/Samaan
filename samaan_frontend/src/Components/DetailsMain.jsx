import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./DetailsMain.css";
import Test from "./Test.png";
const DetailsMain = () => {
  const [PinCode, setPinCode] = useState("400020");
  const [EditState, setEditState] = useState(false);

  const handleEditState = () => {
    setEditState(!EditState);
  };

  const handlePincodeChange = (e) => {
    setPinCode(e.target.value);
  };

  return (
    <div>
      <div className="w-[100%] min-h-[100vh] ">
        <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit  ">
          <div className=" w-[100%]  z-10 ">
            <Header />
          </div>
          <div className="DetailsOuter Vflex AroundFlex">
            
            <div className="DetailsImageDiv">
              <div className="DetailsImageOuter">
                <div className="ImageWrap">
                  <img src={Test} alt="" srcset="" />
                </div>
              </div>
            </div>
            <div className="ProductDetailsDiv">
              <div className="ProductNameHeader">
                <h3>
                  Aditya Neutral Wood Cold Pressed Groundnut Oil / Peanut Oil
                  -5L (Un Refined & Un Filtered Pure Oil)
                </h3>
              </div>
              <div className="RatingsDiv"></div>
              <hr />
              <div className="DeliverDiv">
                <h1 className="DeliverHeader">Deliver to</h1>
                <div
                  className="DeliverPinCode"
                  style={EditState ? { display: "flex" } : { display: "none" }}
                >
                  <input
                    type="text"
                    onChange={handlePincodeChange}
                    value={PinCode}
                  />
                  <div className="IconOk" onClick={handleEditState}>
                    <svg
                      fill="#000000"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      width="20px"
                      height="20px"
                      viewBox="0 0 335.765 335.765"
                      space="preserve"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 "></polygon>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  className="InputIcon"
                  style={EditState ? { display: "none" } : { display: "flex" }}
                >
                  {PinCode}
                  <div className="EditIcon" onClick={handleEditState}>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.56078 20.2501L20.5608 8.25011L15.7501 3.43945L3.75012 15.4395V20.2501H8.56078ZM15.7501 5.56077L18.4395 8.25011L16.5001 10.1895L13.8108 7.50013L15.7501 5.56077ZM12.7501 8.56079L15.4395 11.2501L7.93946 18.7501H5.25012L5.25012 16.0608L12.7501 8.56079Z"
                          fill="#080341"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <hr />
              <div className="DescHeader">
                <h3>Description</h3>
                <p>
                  100% Pure Wood Cold Pressed Sunflower Oil Available Quantity:
                  5 litres 3 litres And 1 litre Oil 500 ml This golden, light
                  and healthy oil contains more Vitamin E than any other oil!
                  Multano’s Sunflower oil is prepared by organically extracting
                  the goodness of sunflower seeds through our single-press
                  technique without the application of heat to retain the oil's
                  nutrients and it’s superior quality Vitamin A, Vitamin B,
                  Vitamin E, Calcium,With a mild flavour and high smoke point,
                  Sunflower oil remains one of the most sought after healthy
                  cooking oils. It has more than 80% of monounsaturated fats
                  that makes it great for your heart health. It also helps in
                  reducing cholesterol and triglycerides in the blood which in
                  turn prevents cardiovascular diseases and has ample other
                  health benefits. An excellent source of energy, Mulatno’s
                  Sunflower oil also helps in strengthening the immune system
                  and improving digestion.
                </p>
              </div>
              <hr />
              <div className="ProductInfo">
                <h2>Product Information</h2>
                <div className="ProductTable">
                  <div className="ProductTableRow">
                    <div className="ProductTableTd1">Brand</div>
                    <div className="ProductTableTd2">ADITYA ENTERPRISES</div>
                  </div>
                  <div className="ProductTableRow">
                    <div className="ProductTableTd1">Brand</div>
                    <div className="ProductTableTd2">ADITYA ENTERPRISES</div>
                  </div>
                  <div className="ProductTableRow">
                    <div className="ProductTableTd1">Brand</div>
                    <div className="ProductTableTd2">ADITYA ENTERPRISES</div>
                  </div>
                  <div className="ProductTableRow">
                    <div className="ProductTableTd1">Brand</div>
                    <div className="ProductTableTd2">ADITYA ENTERPRISES</div>
                  </div>
                  <div className="ProductTableRow">
                    <div className="ProductTableTd1">Brand</div>
                    <div className="ProductTableTd2">ADITYA ENTERPRISES</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="RatingsDiv">
            <div className="RatingsWrap">
                <h1 className="RatingsHeader">Ratings & Reviews</h1>
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

export default DetailsMain;
