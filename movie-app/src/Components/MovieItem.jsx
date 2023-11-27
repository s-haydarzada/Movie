import React from "react";
import { card1 } from "../assets/images/index";
import { FaAngleRight } from "react-icons/fa";
import { GoClock } from "react-icons/go";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


const MovieItem = ({item}) => {
  return (
    <div className="mx-12 mb-10">
      <div className="w-full p-4 text-center bg-white border-gray-50 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex">
        <img src={IMAGE_BASE_URL + item.poster_path} alt="" className="w-[150px] h-[200px] rounded object-cover cursor-pointer" />
        <div className="flex flex-col items-start ml-8">
          <h6 className="text-orange-300 text-sm">THRILLER, HORROR</h6>
          <p className="text-gray-500 text-2xl my-5 italic font-semibold">{item.name?item.name:item.title}</p>
          <article className="text-gray-400 text-sm text-left">
            {item.overview}
          </article>
          <span className="flex items-center justify-center">
            <h5 className="mr-2 text-xs my-2 text-orange-400 tracking-widest">FULL SYNOPSIS</h5>
            <FaAngleRight className="text-orange-300" />
          </span>
          <span className="flex items-center justify-center mb-2">
            <GoClock className="text-xs text-gray-700"/>
            <h5 className="ml-2 tracking-widest text-xs text-gray-700">VIEWING TIMES</h5>
          </span>
          <button className="bg-orange-200 mt-5">09.30am</button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
