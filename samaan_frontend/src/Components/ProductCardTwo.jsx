import React from 'react'
import "./divcss.css"
const ProductCardTwo = ({imgSrc,name,price,weight,category}) => {
  return (
  <div class="Card shadow-lg ">
<div class="CardImage">
    <img  src={imgSrc} alt=""/>
</div>
<div class="contentOuter">
    <div class="Timer">
        <div class="SvgTimerIcon">
            <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M12 14V11M12 6C7.85786 6 4.5 9.35786 4.5 13.5C4.5 17.6421 7.85786 21 12 21C16.1421 21 19.5 17.6421 19.5 13.5C19.5 11.5561 18.7605 9.78494 17.5474 8.4525M12 6C14.1982 6 16.1756 6.94572 17.5474 8.4525M12 6V3M19.5 6.5L17.5474 8.4525M12 3H9M12 3H15"
                        stroke="rgb(54, 54, 54)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
        </div>
        <div class="TimerText">20 MINS</div>
    </div>
    <div class="Desc">
        <div class="Title">
            <div class="TitleText">{name}</div>
            <div class="Stock">{weight}</div>
        </div>
        <div class="price">
            <div class="PriceText">{price}</div>
            <div class="AddButton">
                <button>ADD</button>
            </div>
        </div>
    </div>
</div>
</div> 
  )
}

export default ProductCardTwo