import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./cardtwo.css"
const SkeletonCardTwo = () => {
    return (
       
        <div class="Card shadow-lg  ">
         
            <div class="ImageContainer">
             <Skeleton className="w-[198px] h-[144px]"  />            
          </div>
          <div class="contentOuter">
            <div class="Timer">
              <div class="SvgTimerIcon">
                
              </div>
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
   
    )
}
const SkeletonCart = () => {
    return(
       
   
        <div className="CartCardOuter">
        <div className="CartCardWrapper">
          <div className="ImageCart">
            <Skeleton width={160} height={160}   />
          </div>
          <div className="CartDetails">
            <div className="ProductNameCart">
              <h3><Skeleton  width={90} height={20}  /></h3>
            </div>
            <div className="PriceCart">
           <Skeleton  width={40} height={20}  />  
            </div>
            <div className="QuantityCart">
        
                <Skeleton width={80} height={20} />
              <div className="EditQuantity">
              
              </div>
            </div>
          </div>
        </div>
      </div>
   
  
    )
}

export {SkeletonCardTwo,SkeletonCart}