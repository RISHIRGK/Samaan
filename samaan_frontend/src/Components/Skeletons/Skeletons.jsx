import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./cardtwo.css";
const SkeletonCardTwo = () => {
  return (
    <div class="Card shadow-lg  ">
      <div class="ImageContainerSkeleton">
        <Skeleton className="w-[100%] h-[100%]" />
      </div>
      <div class="contentOuter">
        <div class="Timer">
          <div class="SvgTimerIcon"></div>
          {/* <div class="TimerText">20 MINS</div> */}
        </div>
        <div class="Desc">
          <div class="Title">
            <Skeleton width={130} className="mb-[6px]" />
          </div>
          <Skeleton width={40} height={20} />
          <div class="price">
            <Skeleton width={30} height={20} />
            <Skeleton width={66} rounded={10} height={31} />
          </div>
        </div>
      </div>
    </div>
  );
};
const SkeletonCart = () => {
  return (
    <div className="CartCardOuter">
      <div className="CartCardWrapper">
        <div
          className="ImageCart"
          style={{ display: "block", padding: "0px 0px" }}
        >
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="CartDetails">
          <div className="ProductNameCart" style={{ display: "block" }}>
            <h3>
              <Skeleton width="100%" height="100%" />
            </h3>
          </div>
          <div className="PriceCart" style={{ display: "block" }}>
            <Skeleton width="100%" height="100%" />
          </div>
          <div className="QuantityCart">
            <Skeleton width={80} height={20} />
            <div className="EditQuantity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Skeletonprice = () => {
  return <Skeleton width={40} height={20} />;
};
const SkeletonImage = () => {
  return <Skeleton width={150} height={150} />;
};


export { SkeletonCardTwo, SkeletonCart, Skeletonprice, SkeletonImage };
