import React, { useEffect, useState , useRef} from 'react'
import Globalapi from '../services/Globalapi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({genreId}) {
    const [MovieList , setMovieList] = useState([]);
    const elementRef=useRef(null);
    useEffect(()=>{
   getMovieByGenreId();
    },[])
    const getMovieByGenreId = ()=>{
        Globalapi.getMovieByGenreId(genreId).then(res=>{
            setMovieList(res.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className='text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute mt-[65px]
            '/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
        {MovieList.map((item,index)=>(
           <>
      <MovieCard movie={item} />
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className='text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0  mt-[65px]'
            /> 
    </div>
  )
}

export default MovieList