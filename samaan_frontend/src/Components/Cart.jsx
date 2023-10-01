import React from "react";
import CartCard from "./CartCard";
import "./Cart.css";
import AuthContext from "../context/Auth";
import { set } from "mongoose";
const Cart = () => {
  const { authTokens} = React.useContext(AuthContext);
  const [cartdata, setCartdata] = React.useState([]);
  const [total,setTotal] = React.useState(0)
  const fetchCart = async () => {
    if(authTokens){
    const response = await fetch(
      "https://api-krudra9125-gmailcom.vercel.app/api/cart/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens["access"]}`,
        },
      }
    );
    const data = await response.json();

    setCartdata(data);
  };

}
  React.useEffect(() => {
    fetchCart();
  }, []);
  React.useEffect(() => {
    let sum = 0
    cartdata?.map((item)=>{
      sum = sum + (item["product"]["price"]*item["quantity"])
      return null
    })
    setTotal(sum)
  }, [cartdata])

  return (
    <div className="w-[100%] min-h-[100vh] mt-[8rem]">
      <div className="responsive w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-row justify-start  min-h-fit  ">
        <div className="CartOuter">
          <div className="CartHeader">
            <h1>Shopping Cart</h1>
          </div>
          <hr />
          <div className="CartWrapper">
            {cartdata.length!==0?cartdata.map((item) => {
             
              return (<CartCard name={item["product"]["name"]} price={item["product"]["price"]}   imagsrc={item["product"]["img_path"]} Quantity={item["quantity"]} />);
            }):<p className="text-2xl font-bold">No Selected Items</p>}
          </div>
        </div>
        <div className="SubtotalOuter">
          <div className="SubtotalCard">
            <div className="SubtotalHeader">
              <p>
                Subtotal : <span>{total}</span>
              </p>
            </div>
            <button>
                Proceed To Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
