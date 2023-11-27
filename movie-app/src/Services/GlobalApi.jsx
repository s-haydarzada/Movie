import axios from 'axios'

const movieBaseUrl="https://api.themoviedb.org/3";
const api_key="25fd04690e6e712dde58ac89e191a8a4";
// https://api.themoviedb.org/3/trending/all/day?api_key=25fd04690e6e712dde58ac89e191a8a4

const getTrendingVideos=axios.get(movieBaseUrl+"/movie/popular?language=en-US&page=1&api_key="+api_key);
const getTrendingList=axios.get(movieBaseUrl+"/trending/all/day?language=en-US&page=1&api_key="+api_key);
const getTrendingListId=axios.get(movieBaseUrl+"/trending/all/day?language=en-US&page=1&api_key="+api_key);

export default {getTrendingVideos,getTrendingList};