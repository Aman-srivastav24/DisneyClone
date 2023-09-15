import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import GlobalApi from '../services/Globalapi'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideo.then(res => {
            console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }
    const slideRight = (element) => {
        element.scrollLeft += 1250;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 1250;
    }
    return (

        <div>
            <HiChevronLeft className='hidden md:block text-white text-[40px] absolute mx-8 mt-[235px] cursor-pointer' onClick={() => slideLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[40px] absolute mx-8 mt-[235px] cursor-pointer right-0' onClick={() => slideRight(elementRef.current)} />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth ' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img src={`${IMAGE_BASE_URL}${item.backdrop_path}`} className="min-w-full md:h-[470px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in" />
                ))}
            </div>
        </div>
    )
}

export default Slider