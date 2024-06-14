import { useEffect, useRef, useState } from 'react';
import icon from '../../../public/logo.svg'
import { Link } from 'react-router-dom';
import FullScreen from './FullScreen';
import SmallScreen from './SmallScreen';


const Navbar = () => {

  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener('mousedown', closeDropDown);

    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
  }, []);

  // dropDown

  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false)
      }
    };
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('mousedown', close)
    }
  }, []);

  return (
    <nav className="flex w-[424px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] items-center z-50 justify-between  px-10 py-5  rounded-b-md">
      <Link to={'/'} className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all  flex gap-4 items-center">
        <img className='w-20' src={icon} alt="" />
      </Link>
      {/* full-screen */}
      <FullScreen />
      {/* small-screen */}
      <SmallScreen />
      {/* login and dashboard */}
      <div className='lg:flex hidden  gap-10 items-center'>
        <li className="group flex  cursor-pointer flex-col">
          <Link to={'/login'}>Login</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <Link to={'/signUp'}>SingUp</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        {/* dropDown */}
        {/* <div ref={dropDownRef} className="relative mx-auto w-fit text-black">
          <button onClick={() => setOpen((prev) => !prev)}>
            <img width={40} height={40} className="size-10 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80" src={''} alt="avatar drop down navigate ui" />
          </button>
          <ul className={`${open ? 'visible duration-300' : 'invisible'} absolute right-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md`}>
            <Link to={'/profile'}>
              <li
                className={`rounded-sm px-6 py-2 hover:bg-[#07332F] hover:text-white ${open ? 'opacity-100 duration-300' : 'opacity-0'}`}
              >
                Profile
              </li>
            </Link>
            <Link to={'/dashboard/adminHome'}>
              <li
                className={`rounded-sm px-6 py-2 hover:bg-[#07332F] hover:text-white ${open ? 'opacity-100 duration-300' : 'opacity-0'}`}
              >
                Dashboard
              </li>
            </Link>
            <li
              // onClick={logout}
              className={`rounded-sm px-6 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'}  ${'text-red-500 hover:bg-red-600 hover:text-white'}`}
            >
              Log Out
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;