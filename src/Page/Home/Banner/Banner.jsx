import { IoIosSearch } from "react-icons/io";
import Category from "../Category/Category";

const Banner = () => {
    return (
        <div className='px-5 md:w-3/4 lg:w-4/6 mb-10'>
            <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold leading-normal xl:leading-relaxed'>A blog template made for food influencers</h1>
            <form action="search" className="bg-white w-4/5 mx-auto p-4 rounded-md border relative flex items-center mb-10">
                <IoIosSearch className="w-5 h-5 text-neutral-300 mr-2"/>
                <input className="outline-none w-full" name="query" placeholder="Search for a recipe" type="search"   />
            </form>
            <Category/>
        </div>
    );
};

export default Banner;