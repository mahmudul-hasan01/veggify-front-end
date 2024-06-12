import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8">
            <Link to={'/categories/entrees'} className="bg-[#f0f5c4] text-[#59871f] border border-[#59871f] px-4 py-2 rounded-full ">Entrees</Link>

            <Link to={'/categories/breakfast'} className="bg-[#efedfa] text-[#3c3a8f] border border-[#3c3a8f] px-4 py-2 rounded-full ">Breakfast</Link>
            
            <Link to={'/categories/lunch'} className="bg-[#e5f7f3] text-[#1f8787] border border-[#1f8787] px-4 py-2 rounded-full ">Lunch</Link>
            
            <Link to={'/categories/desserts'} className="bg-[#e8f5fa] text-[#397a9e] border border-[#397a9e] px-4 py-2 rounded-full ">Desserts</Link>
            
            <Link to={'/categories/sides'} className="bg-[#e8f5fa] text-[#aa3eb8] border border-[#873c9e] px-4 py-2 rounded-full ">Sides</Link>
            
            <Link to={'/categories/drinks'} className="bg-[#e8f5fa] text-[#ee5151] border border-[#b93d47] px-4 py-2 rounded-full ">Drinks</Link>
        </div>
    );
};

export default Category;