import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SmallScreen = () => {

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


    return <>
        <div className='flex gap-4 items-center md:hidden'>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <Link to={'/'}>Home</Link>
                        </li>
                        {/* <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
              <Link to={'/'}>About</Link>
            </li> */}
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link to={'/appointment'}>Appointment</Link>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link to={'/login'}>Login</Link>
                        </li>

                    </ul>
                )}
            </div>
            {/* dropDown */}
            <div ref={dropDownRef} className="relative mx-auto w-fit text-black">
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
                        className={`rounded-sm px-6 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'}  ${'hover:bg-slate-300'}`}
                    >
                        Log Out
                    </li>
                </ul>
            </div>

        </div>
    </>
};

export default SmallScreen;