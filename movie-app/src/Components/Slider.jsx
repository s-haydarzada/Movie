import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
// console.log(screenWidth)

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const element=useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      // console.log(res.data.results)
      setMovieList(res.data.results);
    });
  };

  const sliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110;
  }

  const sliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110;
  }

  return (
    <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer" onClick={()=>sliderLeft(element.current)}/>
        <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] right-0 cursor-pointer" onClick={()=>sliderRight(element.current)}/>

       <div ref={element} className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth">
      {movieList.map((item, index) => (
        <img
        key={index}
          src={IMAGE_BASE_URL + item.backdrop_path}
          alt=""
          className="min-w-full md:h-[400px] object-cover mr-5 rounded-md hover:border-[2px] border-gray-400 transition-all duration-100 ease-in"
        />
      ))}
    </div> 
    </div>
    
  );
};

export default Slider;
