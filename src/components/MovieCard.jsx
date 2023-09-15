import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
function MovieCard({movie}) {
  return (
    <> <div className='flex flex-col'>
        <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} className="w-[220px] md:w-[250px] hover:border-[3px] hover:scale-110 border-gray-400 rounded-lg transition-all duration-300 ease-in cursor-pointer"/>
        <h2 className='w-[110px] md:w-[260px] text-white
    mt-2'>{movie.title}</h2>
    </div>
    </>
  )
}

export default MovieCard