import React from 'react'
import ProductCardTwo from './ProductCardTwo';
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
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
    await fetch(`https://api-krudra9125-gmailcom.vercel.app/api/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      })    
      .catch((err) => console.log(err));
      
  };
  React.useLayoutEffect(() => {

    fetchdata();
  }, [product_data]);

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
     
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 6,
  
    }
  };

  return (
    <Swiper  pagination={{ clickable: true }}
      breakpoints={breakpoints}
      rewind={false}
      slidesPerView={6}
      autoplay={true}
      navigation={true}
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
                productId={item.id}

             />
         
         </SwiperSlide>
     )
 })
}
</Swiper>
  )
}
export default DealsDiv
