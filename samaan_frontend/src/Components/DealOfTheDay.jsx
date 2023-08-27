import React, { useEffect, useState } from 'react'
import './DealOfTheDay.css'
import ProductCard from './ProductCard'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css';

const DealOfTheDay = () => {
    const [perpageCards, setperpageCards] = useState(4)

    const splideOptions = {
        type: 'slide',
        pagination: false,
        arrows: false,
        perMove: 1,
        perPage: 4,
        rewind: true,
        autoplay: true,
        interval: 2000,
    };

    
    return (
        <div className='DealsDayOuter'>
            <h1 className='DealsDayHeader'>Deals of the day</h1>
            <div className="DealDayCard">
                <Splide options={splideOptions}>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                    <SplideSlide><ProductCard /></SplideSlide>
                </Splide>
            </div>
        </div>
    )
}

export default DealOfTheDay
