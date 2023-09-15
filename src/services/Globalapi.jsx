import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key= 'a3e82bc46ac0c79fba6991171869026f' ;
const movieByGenreBaseUrl ='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'


const getTrendingVideo = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}&language=en-US`);

const getMovieByGenreId = (id) =>
axios.get(`${movieByGenreBaseUrl}&with_genres=${id}&api_key=${api_key}`)

export default {
    getTrendingVideo ,
    getMovieByGenreId
}