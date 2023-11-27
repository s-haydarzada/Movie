import React, { useState } from 'react';
import Card from './Card';

const CardSection = () => {
    const menu =[
        {
            img:"../../src/assets/images/card1.jpg",
            name:"The end of days"
        },
        {
            img:"../../src/assets/images/card2.jpg",
            name:"DayLight"
        },
        {
            img:"../../src/assets/images/card3.jpg",
            name:"Locked In"

        }

    ]
  return (
    <>
    <div className='md:hidden h-[400px] relative w-screen flex overflow-x-auto px-10 py-4 scrollbar-hide scroll-smooth'>
     {
        menu.map((item,index)=>(
            <div key={index} className='px-16 cursor-pointer py-20'>
                 <Card name={item.name} img={item.img}/>
            </div>
           
        ))
     }
    </div>
    <div className='hidden relative w-screen md:flex items-center justify-center'>
     {
        menu.map((item,index)=>(
            <div key={index} className='px-16 cursor-pointer py-20'>
                 <Card name={item.name} img={item.img}/>
            </div>
           
        ))
     }
    </div>
   
    </>

  );
}

export default CardSection;
