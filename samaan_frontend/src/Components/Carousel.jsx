import React from 'react'
import './Carousel.css'
import I1 from './CarouselImages/image1.png'
import I2 from './CarouselImages/image2.png'
import I3 from './CarouselImages/image3.png'
import I4 from './CarouselImages/image4.png'
import I5 from './CarouselImages/image5.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Carousel = () => {
    const splideOptions = {
        type: 'loop',
        pagination: false,
        arrows: false,
        perMove: 1,
        perPage: 1,
        autoplay: true,
        interval: 1000,
    };
    const ImgandLinkObjects = [{ image: I1, link: '1' }, { image: I2, link: '2' }, { image: I3, link: '3' }, { image: I4, link: '4' }, { image: I5, link: '5' }]
    return (
        <div className='CarouselWrapper'>
            <Splide options={splideOptions}>
                {
                    ImgandLinkObjects.map((obj, index) => {
                        return (
                            <SplideSlide key={index}  >
                                <img src={obj.image} alt="" className="CarouselImage" />
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}

export default Carousel
