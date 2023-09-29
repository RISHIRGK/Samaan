import React, { useState } from "react";
import "./CartCard.css";
import logo from "./Test.png";
const CartCard = () => {
  const [QuantityEditState, setQuantityEditState] = useState(false);
  const [quantity, setquantity] = useState(2)
  const handleQuantityEdit = () => {
    setQuantityEditState(!QuantityEditState);
  };
  const handleQuantityChange = (e) => {
    setquantity(e.target.value)
  }
  return (
    <div className="CartCardOuter">
      <div className="CartCardWrapper">
        <div className="ImageCart">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="CartDetails">
          <div className="ProductNameCart">
            <h3>Product Name</h3>
          </div>
          <div className="PriceCart">
            <p>230</p>
          </div>
          <div className="QuantityCart">
            <p
              style={
                QuantityEditState ? { display: "flex" } : { display: "none" }
              }
            >
              <input type="number" value={quantity}  onChange={handleQuantityChange} style={{padding:'0 5px'}} />
            </p>
            <p
              style={
                QuantityEditState ? { display: "none" } : { display: "flex" }
              }
            >
              {quantity}
            </p>
            <div className="EditQuantity" onClick={handleQuantityEdit}>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={
                  QuantityEditState ? { display: "none" } : { display: "flex" }
                }
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
                style={
                  QuantityEditState ? { display: "flex" } : { display: "none" }
                }
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
        </div>
      </div>
    </div>
  );
};

export default CartCard;
