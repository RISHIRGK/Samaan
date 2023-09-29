import React from "react";
import CartCard from "./CartCard";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="w-[100%] min-h-[100vh]">
      <div className="responsive w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-row justify-start  min-h-fit  ">
        <div className="CartOuter">
          <div className="CartHeader">
            <h1>Shopping Cart</h1>
          </div>
          <hr />
          <div className="CartWrapper">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </div>
        <div className="SubtotalOuter">
          <div className="SubtotalCard">
            <div className="SubtotalHeader">
              <p>
                Subtotal : <span>39,840.00</span>
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
