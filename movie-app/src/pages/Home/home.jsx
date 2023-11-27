import React from 'react'
import Header from "../../Components/Header";
import Slider from "../../Components/Slider";
import CardSection from "../../Components/CardSection";
import MovieSection from '../../Components/MovieSection';

const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <CardSection/>
      <MovieSection/>
    </div>
  )
}

export default Home
