import React from 'react'
import ProductCardTwo from './ProductCardTwo';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import productDetails from '../context/productDetails';

const DealsDiv = ({category}) => {
  const [swiper, setSwiper] = React.useState(null); 

    const product_data=React.useContext(productDetails)
    const [data, setdata] = React.useState();
  const fetchdata = async () => {
    // await fetch("https://api-krudra9125-gmailcom.vercel.app/api/products/")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
      console.log(product_data.product_data?.filter((item)=>item.category===category));
      setdata(product_data.product_data?.filter((item)=>item.category===category));
  };
  React.useLayoutEffect(() => {

    fetchdata();
  }, [product_data]);
  return (
    <Swiper  pagination={{ clickable: true }}
      rewind={false}
      slidesPerView={6}
      autoplay={true}
      // onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
      onSlideChange={() => console.log("slide change")}
      onSwiper={setSwiper}>


{
 data?.map((item , id)=>{
     return(
         <SwiperSlide  key={id} >
             <ProductCardTwo
                key={id}
                name={item.name}
                price={item.price}
                imgSrc={item.img_path}
                weight={item.weight}
                category={item.category}

             />
         
         </SwiperSlide>
     )
 })
}
</Swiper>
  )
}
export default DealsDiv
