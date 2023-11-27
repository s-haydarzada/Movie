import React from 'react';
import { LuMenu } from "react-icons/lu";

const HeaderItem = ({name}) => {

  return (
    <div className='text-white flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:text-orange-400'>
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
