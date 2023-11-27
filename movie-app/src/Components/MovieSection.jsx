import React, { useEffect, useState } from "react";
import Weekdays from "./Weekdays";
import MovieItem from "./MovieItem";
import GlobalApi from "../Services/GlobalApi";
import {Link} from 'react-router-dom';
import Search from './Search';

const MovieSection = () => {
  const [movieList, setMovieList] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [query,setQuery]=useState("")

  useEffect(() => {
    getTrendingList();
  }, []);
  
  useEffect(() => {
    setMovieList(oldData.filter((item) => item.title && item.title.includes(query) || item.name && item.name.includes(query)));
  }, [query]);

  const getTrendingList = () => {
    GlobalApi.getTrendingList.then((res) => {
      setMovieList(res.data.results);
      setOldData(res.data.results)
    });
  };
  const weekDays = [
    {
      id: 0,
      name: "MON",
    },
    {
      id: 1,
      name: "TUE",
    },
    {
      id: 2,
      name: "WEN",
    },
    {
      id: 3,
      name: "THU",
    },
    {
      id: 4,
      name: "FRI",
    },
    {
      id: 5,
      name: "SAT",
    },
    {
      id: 6,
      name: "SUN",
    },
  ];
  return (
    <div className="flex flex-col bg-white mt-20">
      <div className="flex items-center justify-between px-5 mt-10 w-screen py-2 mb-10">
        <div className="w-screen flex items-center ml-5">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className="px-8 cursor-pointer text-base actives ml-2"
            >
              <Weekdays day={day} />
            </div>
          ))}
        </div>
        <p className="date px-10 font-sans text-gray-400">MON,27NOVEMBER</p>
      </div>
      <Search query={query} setQuery={setQuery}/>
      <div>
        {movieList.map((item, index) => (
          <div key={index}>
            <Link to={`product/${item.id}`}>
              <MovieItem item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
