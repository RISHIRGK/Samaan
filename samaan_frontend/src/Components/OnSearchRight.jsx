import React from "react";
import "./OnSearchRight.css";
import ProductCardTwo from "./ProductCardTwo";

const OnSearchRight = ({data}) => {
  return (
    <div>
      <div className="RightOuter">
        <div className="ProductsDiv"> 
          {data && data.map((item,id) => {
            return (
              <ProductCardTwo
              key={id}
              name={item.name}
              price={item.price}
              imgSrc={item.img_path}
              weight={item.weight}
              category={item.category}
              productId={item.id}

           />
            );
          })}
         
        </div>
      </div>
    </div>
  );
};

export default OnSearchRight;
