import { useEffect, useRef, useState } from 'react';
import icon from '../../../public/logo.svg'
import { Link } from 'react-router-dom';
import FullScreen from './FullScreen';
import SmallScreen from './SmallScreen';


const Navbar = () => {


  

  return (
    <nav className="flex w-[424px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] items-center z-50 justify-between  px-10 py-5  rounded-b-md">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all  flex gap-4 items-center">
        <img className='w-20' src={icon} alt="" />
      </div>
      {/* full-screen */}
      <FullScreen/>
      {/* small-screen */}
      <SmallScreen/>
    </nav>
  );
};

export default Navbar;