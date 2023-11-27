import React, { useState } from "react";
import { logo } from "../assets/images/index";
import HeaderItem from "./HeaderItem";
import { LuMenu } from "react-icons/lu";

const Header = () => {

    const[toggle,setToggle]=useState(false)
  const menu = [
    {
      id: 0,
      name: "HOME",
    },
    {
      id: 1,
      name: "WHAT'S ON",
    },
    {
      id: 2,
      name: "NEWS",
    },
    {
      id: 3,
      name: "SHORTCODES",
    },
    {
      id: 4,
      name: "CONTACT US",
    },
  ];
  return (
    <div className="flex items-center justify-between w-screen p-10">
      <img src={logo} alt="" className="w-[80px] md:w-[150px] object-cover" />
      <div className="hidden md:flex items-center justify-between gap-10 ">
        {menu.map((item) => (
          <div key={item.id}  className="actives cursor-pointer hover:underline underline-offset-8 decoration-orange-400 decoration-2 font-medium">
            <HeaderItem name={item.name}/>
          </div>
        ))}
      </div>
      <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
        <LuMenu />
        {toggle? <div className="absolute left-0 right-0 flex items-center justify-center flex-col mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4">
        {menu.map((item) => (
          <div key={item.id} className="cursor-pointer hover:underline underline-offset-8 decoration-orange-400 decoration-2 font-medium mb-3 border-[1px] border-gray-400 w-full flex items-center justify-center flex-col py-3 hover:bg-blue-950">
            <HeaderItem name={item.name} />
          </div>
        ))}
        </div>:null}
       
      </div>
    </div>
  );
};

export default Header;
