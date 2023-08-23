import React from 'react'
import  "../input.css"
const ProductCard = ({imgSrc}) => {
  return (
    <div>
   
  <div className=" w-[15rem] h-[20rem]   flex flex-col  bg-white  items-center justify-end  rounded-[1.2rem] box-border  ">
    <div className= " w-[100%] h-[80%]      ">
    <div className=" w-[100%] h-[40%]  grad bg-yellow-300  rounded-tl-[2.3rem] rounded-tr-[1.4rem]  skew-y-[12deg] "  ></div>
    <div className=" w-[100%] h-[60%] bg-yellow-300 relative flex flex-col  rounded-b-3xl grad shadow-xl  "  >
      <div className="absolute z-20 w-[100%] h-[30%] bg-yellow-300 -top-11 grad    ">
        <div className='absolute -top-[5.6rem] left-[5rem]  w-[9rem] h-[9rem] ' >
          <img width={150} className=' aspect-square object-fill w-full h-full    ' src={imgSrc} alt="biscuits"  />
        </div>
        
      </div>
      <div className="w-[100%] px-2 h-[50%]   flex    items-center justify-start " >
        <div className="  flex flex-col justify-evenly items-start  " > 
          <div className=" text-[.6rem] font-bold text-white bg-black bg-opacity-25  h-[1rem] w-[3.8rem]  rounded-md px-1 flex  justify-center items-center "> <img src="" className=" w-[.7rem] h-[.7rem] bg-white  "  alt=""/>  <span className="  " > 15 MINS</span>
           </div>
        <div>
          <p className="font-semibold leading-5 tracking-tight"  >Krack Jack 20-20</p>
          </div>
          
          </div>
      </div>
      <div className="w-[100%] px-2 h-[26%]   flex justify-start items-end " >
        <div className=" text-[.9rem] text-gray-800  font-[500] ">5 kg</div>
      </div>
      <div className="w-[100%] px-2 h-[40%]   flex justify-between items-center " >
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