import React from 'react'

const ProductCard = () => {
  return (
    <div>
   
  <div className=" w-[15rem] h-[20rem] overflow-hidden flex flex-col  bg-white  items-center justify-end  rounded-[1.2rem]  ">
    <div className= " w-[100%] h-[80%]  ">
    <div className=" w-[100%] h-[40%]  bg-yellow-300  rounded-tl-[2.3rem] rounded-tr-[1.4rem]  skew-y-[12deg] "  ></div>
    <div className=" w-[100%] h-[60%] bg-yellow-300 relative flex flex-col  "  >
      <div className="absolute w-[100%] h-[30%] bg-yellow-300 -top-11   "></div>
      <div className="w-[100%] px-2 h-[34%] ring-1 bg-yellow-300 flex   items-center justify-start " >
        <div className="  flex flex-col justify-evenly items-start " > 
          <div className=" text-[.6rem] font-bold text-white bg-black bg-opacity-25  h-[1rem] w-[3.8rem]  rounded-md px-1 flex  justify-center items-center "> <img src="" className=" w-[.7rem] h-[.7rem] bg-white  "  alt=""> </img> <span className="  " > 15 MINS</span>
           </div>
        <div>
          <p className="font-semibold leading-5 tracking-tight"  >Krack Jack 20-20</p>
          </div>
          
          </div>
      </div>
      <div className="w-[100%] px-2 h-[26%]  bg-yellow-300 flex justify-start items-end " >
        <div className=" text-[.9rem] text-gray-800  font-[500] ">5 kg</div>
      </div>
      <div className="w-[100%] px-2 h-[40%]  bg-yellow-300 flex justify-between items-center " >
        <div className=" w-[40%] h-[50%] flex items-center t  " >
          <span className=" text-sm font-semibold" >$234</span>
          <span className="line-through font-[500] text-sm text-gray-700   pl-1 " >$245</span>
        </div>
        <div className=" w-[40%]  h-[50%] flex justify-center items-center " >
          <button className="w-[70%] h-[90%]  shadow-md rounded-md bg-white text-green-800 text-xs font-bold " > ADD</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

  
  )
}

export default ProductCard