import { IoMdTime } from "react-icons/io";

const Cart = ({ item }) => {

    const categoryColors = {
        Entrees: {
            'bg': '#f0f5c4',
            'text': '#59871f'
        },
        Breakfast: {
            'bg': '#efedfa',
            'text': '#3c3a8f'
        },
        Lunch: {
            'bg': '#efedfa',
            'text': '#1f8787'
        },
        Desserts: {
            'bg': '#efedfa',
            'text': '#397a9e'
        },
        Sides: {
            'bg': '#efedfa',
            'text': '#aa3eb8'
        },
        Drinks: {
            'bg': '#efedfa',
            'text': '#ee5151'
        },
    }
    console.log(item?.category === categoryColors);

    return (
            <div className="w-[280px] h-[350px] relative flex flex-col space-y-4 rounded-lg bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition duration-700 cursor-pointer">
                <img className="w-full flex-none rounded-lg object-cover" src={item?.thumbnail_image} alt="card navigate ui" />
                <div className="px-4 grow">
                    <h1 className="text-lg font-semibold ">{item?.name}</h1>
                </div>
                <div className="flex-none w-full px-4 pb-4">
                    <div className="flex justify-between">
                        <button className={` rounded-lg bg-slate-800 px-4 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base`}>{item?.category}</button>
                        <p className="flex items-center gap-2"><IoMdTime /> <span>{item?.more?.prep_time}</span></p>
                    </div>
                </div>
                <p className="px-3 py-2 rounded-md bg-white absolute top-0 right-3">{item?.more?.difficulty}</p>
            </div>
    );
};

export default Cart;