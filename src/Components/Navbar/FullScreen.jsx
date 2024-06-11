import { Link } from 'react-router-dom';

const FullScreen = () => {

    return <>
        <ul className="hidden items-center justify-between gap-10 md:flex">
            <li className="group flex  cursor-pointer flex-col">
                <Link to={'/'}>Home</Link><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <Link to={'/ad'}>About</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <Link to={'/appointment'}>Appointment</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </ul>
    </>
};

export default FullScreen;