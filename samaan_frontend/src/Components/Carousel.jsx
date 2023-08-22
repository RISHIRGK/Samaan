import React, { useEffect, useState } from 'react'
import './Carousel.css'
import I1 from './CarouselImages/image1.png'
import I2 from './CarouselImages/image2.png'
import I3 from './CarouselImages/image3.png'
import I4 from './CarouselImages/image4.png'
import I5 from './CarouselImages/image5.png'

const Carousel = () => {
    const images = [I1 , I2 , I3 , I4 , I5]
    const linksa = ['1' , '2' ,'3' ,'4' ,'5']
    const [Index , setIndex] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            return(
                Index < 4 ? setIndex(Index + 1) : setIndex(0)
            )
        }, 1000);
    },[Index])
  return (
    <div className='CarouselWrapper'>
        <a href={linksa[Index]}>
        <img src={images[Index]} alt="" className='CarouselImage'/>
        </a>
    </div>
  )
}

export default Carousel
