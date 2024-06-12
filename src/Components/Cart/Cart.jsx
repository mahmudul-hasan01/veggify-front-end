
const Cart = ({item}) => {

    const categoryColors = {
        Entrees: {
            'bg': '#f0f5c4',
            'text':'#59871f'
        },
        Breakfast: {
            'bg': '#efedfa',
            'text':'#3c3a8f'
        },
        Lunch: {
            'bg': '#efedfa',
            'text':'#1f8787'
        },
        Desserts: {
            'bg': '#efedfa',
            'text':'#397a9e'
        },
        Sides: {
            'bg': '#efedfa',
            'text':'#aa3eb8'
        },
        Drinks: {
            'bg': '#efedfa',
            'text':'#ee5151'
        },
    }
    console.log(item?.category === categoryColors);

    return (
        <div>
            <div className="w-[280px] h-[350px] flex flex-col space-y-4 rounded-lg bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition duration-700 cursor-pointer">
                <img className="w-fit flex-none rounded-lg object-cover" src={item?.thumbnail_image} alt="card navigate ui" />
                <div className="px-4 grow">
                    <h1 className="text-lg font-semibold ">{item?.name}</h1>
                </div>
                <div className="flex flex-none gap-4 px-4 pb-4">
                    <button className={` rounded-lg bg-slate-800 px-4 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base`}>{item?.category}</button>
                    <button className="rounded-md border border-black px-4  py-2  duration-300 hover:bg-gray-200">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;