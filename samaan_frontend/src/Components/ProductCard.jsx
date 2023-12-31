import React from "react";
import "../input.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/Auth";
import { useNavigate } from "react-router-dom";
const ProductCard = ({
  cartquantity,
  productId,
  imgSrc,
  name,
  price,
  weight,
  category,
}) => {
  const [quantity, setquantity] = React.useState(
    cartquantity !== undefined ? cartquantity : 0
  );
  // console.log("quantity",quantity,"name",name)
  const { authTokens } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const changequantaty = async (q) => {
    if (authTokens["access"]) {
      const response = await fetch(
        "https://api-krudra9125-gmailcom.vercel.app/api/cart/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens["access"]}`,
          },
          body: JSON.stringify({ product: productId, quantity: q }),
        }
      );
      const data = await response.json();
      console.log(data);
    }
  };
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div className=" w-[15rem] h-[20rem]   flex flex-col  bg-white  items-center justify-end  rounded-[1.2rem] box-border  ">
        <div className=" w-[100%] h-[80%]      ">
          <div className=" w-[100%] h-[40%]  grad bg-yellow-300  rounded-tl-[2.3rem] rounded-tr-[1.4rem]  skew-y-[12deg] "></div>
          <div className=" w-[100%] h-[60%] bg-yellow-300 relative flex flex-col  rounded-b-3xl grad shadow-xl  ">
            <div className="absolute z-20 w-[100%] h-[30%] bg-yellow-300 -top-11 grad    ">
              <div className="absolute -top-[5.6rem] left-[5rem]  w-[9rem] h-[9rem] ">
                <Link to={`/product/${productId}`}>
                  <img
                    width={150}
                    className="object-contain w-full h-[144px] aspect-video"
                    src={`${imgSrc}`}
                    alt={category}
                  />
                </Link>
              </div>
            </div>
            <div className="w-[100%] px-2 h-[50%]   flex    items-center justify-start ">
              <div className="flex flex-col items-start justify-evenly">
                {/* <div className=" text-[.6rem] font-bold text-white bg-black bg-opacity-25  h-[1rem] w-[3.8rem]  rounded-md px-1 flex  justify-center items-center "> 
           </div> */}
                <div>
                  <p className="font-semibold leading-5 tracking-tight">
                    {name}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] px-2 h-[26%]   flex justify-start items-end ">
              <div className=" text-[.9rem] text-gray-800  font-[500] ">
                {weight}
              </div>
            </div>
            <div className="w-[100%] px-2 h-[40%]   flex justify-between items-center ">
              <div className=" w-[40%] h-[50%] flex items-center t  ">
                <span className="text-sm font-semibold ">&#8377;{price}</span>
                <span className="line-through font-[500] text-sm text-gray-700   pl-1 ">
                  &#8377;245
                </span>
              </div>
              <div className=" w-[40%]  h-[50%] flex justify-center items-center ">
                {quantity > 0 ? (
                  <div className="w-[100%] h-[100%] flex justify-around">
                    <div className="w-[33.33%] h-[100%]">
                      <div
                        className="bg-white w-[1.7rem] h-[1.7rem] text-center font-[900] text-green-800  rounded-full cursor-pointer "
                        onClick={() => {
                          if (quantity > 0) {
                            setquantity(quantity - 1);
                            changequantaty(-1);
                          } else {
                            setquantity(0);
                          }
                        }}
                      >
                        -
                      </div>
                    </div>
                    <div className="w-[33.33%] h-[100%]flex justify-center items-center text-center">
                      {" "}
                      {quantity}
                    </div>
                    <div className="w-[33.33%] h-[100%] ">
                      <div
                        className="bg-white w-[1.7em] h-[1.7rem] text-center font-[900] text-green-800  rounded-full cursor-pointer "
                        onClick={() => {
                          setquantity(quantity + 1);
                          changequantaty(1);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="w-[70%] h-[90%]  shadow-md rounded-md bg-white text-green-800 text-xs font-bold "
                    onClick={() => {
                      if (authTokens) {
                        setquantity(quantity + 1);
                        changequantaty(1);
                      } else {
                        navigate("/signupuser");
                      }
                    }}
                  >
                    {" "}
                    ADD
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
