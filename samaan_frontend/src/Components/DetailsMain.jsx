import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./DetailsMain.css";

const DetailsMain = () => {
  const { id } = useParams();
  const [PinCode, setPinCode] = useState("400020");
  const [EditState, setEditState] = useState(false);
  const [Data, setdata] = React.useState();
  const [quantity, setquantity] = React.useState(0);

  const handleEditState = () => {
    setEditState(!EditState);
  };

  const handlePincodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const fetchdata = async () => {
    await fetch(`https://api-krudra9125-gmailcom.vercel.app/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      })
      .catch((err) => console.log(err));
  };
  React.useLayoutEffect(() => {
    fetchdata();
  }, [id]);

  return (
    <div>
      <div className="w-[100%] h-[100%] outer">
        <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit  ">
          <div className="DetailsOuter Vflex AroundFlex">
            <div className="ImageWrapperDiv">
              <div className="ProductNameHeader mobileProduct" style={{padding:'10px 10px'}}>
                <h3>{Data ? Data["name"] : ""}</h3>
              </div>
              <div className=" w-[100%] md:w-[50%] flex justify-center items-center flex-col AddGap mobileProduct" style={{padding:'5px 10px'}}>
                <div
                  className="w-[100%] ProductPriceDiv"
                  style={{ marginLeft: "5px" }}
                >
                  <span className="ProductPrice">
                    {Data ? Data["price"] : ""}
                  </span>
                </div>
              </div>
              <div className="DetailsImageDiv">
                <div className="DetailsImageOuter">
                  <div className="ImageWrap">
                    {console.log("this is data", Data)}
                    {Data ? (
                      <img
                        width={150}
                        className="object-fill w-full h-full aspect-video"
                        src={`${Data["img_path"]}`}
                        alt={"category"}
                      />
                    ) : (
                      ""
                    )}{" "}
                  </div>
                </div>
              </div>
              <div className="w-[100%] AddToCartWrapper ">
                {quantity > 0 ? (
                  <div className="w-[8rem] h-[100%] flex justify-center items-center">
                    <div className="w-[33.33%] h-[100%] flex justify-center">
                      <div
                        className=" bg-yellow-300  text-center font-[900] QuantityIcon text-green-800  rounded-full cursor-pointer "
                        onClick={() => {
                          if (quantity > 0) {
                            setquantity(quantity - 1);
                          } else {
                            setquantity(0);
                          }
                        }}
                      >
                        -
                      </div>
                    </div>
                    <div className="w-[33.33%] h-[100%] flex justify-center items-center text-center">
                      {" "}
                      {quantity}
                    </div>
                    <div className="w-[33.33%] h-[100%] flex justify-center ">
                      <div
                        className="bg-yellow-300  text-center font-[900] text-green-800  rounded-full cursor-pointer QuantityIcon "
                        onClick={() => {
                          setquantity(quantity + 1);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="w-[7rem] h-[90%]  shadow-md rounded-md bg-yellow-300 text-green-800 text-xs font-bold  AddToCartButton"
                    onClick={() => {
                      setquantity(quantity + 1);
                    }}
                  >
                    {" "}
                    Add to cart
                  </button>
                )}
              </div>
            </div>

            <div className="ProductDetailsDiv">
              <div className="ProductNameHeader laptopProduct">
                <h3>{Data ? Data["name"] : ""}</h3>
              </div>
              <div className=" w-[100%] md:w-[50%] flex justify-center items-center flex-col AddGap laptopProduct">
                <div
                  className="w-[100%] ProductPriceDiv"
                  style={{ marginLeft: "5px" }}
                >
                  <span className="ProductPrice">
                    {Data ? Data["price"] : ""}
                  </span>
                </div>
              </div>

              {/* <div className="DeliverDiv">
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
              </div> */}

              <div className="ProductInfo">
                <h2>Product Information</h2>
                <div className="w-[100%] flex flex-col md:flex-row justify-start">
                  <div className="w-[100%]">
                    <div className="ProductTable">
                      <div className="ProductTableRow">
                        <div className="ProductTableTd1">BRAND</div>
                        <div className="ProductTableTd2">
                          {Data ? Data["brand"] : ""}
                        </div>
                      </div>
                      <div className="ProductTableRow">
                        <div className="ProductTableTd1">WEIGHT</div>
                        <div className="ProductTableTd2">
                          {Data ? Data["weight"] : ""}
                        </div>
                      </div>
                      <div className="ProductTableRow">
                        <div className="ProductTableTd1">FLAVOUR</div>
                        <div className="ProductTableTd2">
                          {Data ? Data["flavour"] : ""}
                        </div>
                      </div>
                      <div className="ProductTableRow">
                        <div className="ProductTableTd1">CATEGORY</div>
                        <div className="ProductTableTd2">
                          {Data ? Data["category"] : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="DescHeader">
                <h3>Description</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Excepturi saepe illum molestias iusto fugiat quas consectetur
                  nihil quia laborum illo officia omnis sit error voluptatem
                  autem eos facilis mollitia vero, necessitatibus amet ipsa hic
                  maxime ab! Magnam, ipsa amet? Porro cumque illo corporis
                  itaque dicta pariatur dolore, earum blanditiis nesciunt, cum
                  dignissimos quae neque labore consequatur explicabo impedit
                  laudantium recusandae numquam accusantium nihil vitae, facere
                  similique ipsum! Accusantium, itaque nostrum quae autem illum
                  ipsa rerum ullam aspernatur sapiente necessitatibus! Labore
                  quas expedita sint reiciendis itaque eaque explicabo.
                  Consectetur aperiam debitis, accusamus aspernatur est natus
                  omnis accusantium, tempora nam quibusdam soluta?
                </p>
              </div>
            </div>
          </div>
          {/* <div className="RatingsDiv">
            <div className="RatingsWrap">
              <h1 className="RatingsHeader">Ratings & Reviews</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailsMain;
