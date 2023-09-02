"use client"
import React from 'react'
import ProductCard from './ProductCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const DOD = () => {
    const [data, setdata] = React.useState();
  const fetchdata = async () => {
    await fetch("https://api-krudra9125-gmailcom.vercel.app/api/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      })
      .catch((err) => console.log(err));
    
  };
  React.useLayoutEffect(() => {

    fetchdata();
  }, []);
  return (
    <div className='CarouselWrapper'>
    <Splide options ={ {
 type         : 'loop',
 gap          : '1rem',
 autoplay     : true,
 pauseOnHover : false,
 resetProgress: false,
fixedWidth   : '15rem',
pagination:false,
width        : '100%',
padding:'5rem',
}} aria-label="My Favorite Images">

{
 data?.map((item , id)=>{
     return(
         <SplideSlide  key={id} >
              <ProductCard
                    key={id}
                    name={item.name}
                    price={item.price}
                    imgSrc={item.img_path}
                    weight={item.weight}
                    category={item.category}


                    />
         </SplideSlide>
     )
 })
}
</Splide>
 </div>
  )
}

export default DOD