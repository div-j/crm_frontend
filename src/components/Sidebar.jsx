import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import {  FaChevronRight } from 'react-icons/fa';
import { RiSettingsLine } from "react-icons/ri";
import { LuMessageCircleQuestion, LuSquareUserRound } from "react-icons/lu";
import AuthContext from '../context/AuthContext';



const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-screen p-4 pt-8 bg-white text-sidebarText flex items-center justify-between flex-col w-24 md:w-full sticky top-0">
      <section>
          <div className="flex items-center justify-center mb-10">
            <RiSettingsLine size={30} className="mr-3" />
            <h1 className="text-2xl font-bold hidden md:block">Dashboard</h1>
          </div>
          <div>
              <NavLink to="/users" className="flex  mb-6 items-center justify-between p-2 w-full text-white  bg-primary rounded-md ">
            <div className=" flex items-center ">
                <LuSquareUserRound size={20} className="mr-3" /> <p className='hidden md:block'>Users</p>
            </div>
              <FaChevronRight size={10} className="text-white font-light" />
              </NavLink>
              <NavLink to="/users" className="flex  mb-6 items-center justify-between p-2 w-full text-black  rounded-md ">
            <div className=" flex items-center ">
            <LuMessageCircleQuestion className="mr-3" /> <p className='hidden md:block'>Help</p>
            </div>
              <FaChevronRight size={10} className=" font-light" />
              </NavLink>
          
          </div>
      </section>
      <div className="">
        <div className='mb-10 hidden md:block'>
            <img src="assets/access.png" alt="" className='w-full' />
        </div>
        <div className="flex items-center">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-bold hidden md:block">{user?.name}</p>
            <p className="text-sm hidden md:block">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
