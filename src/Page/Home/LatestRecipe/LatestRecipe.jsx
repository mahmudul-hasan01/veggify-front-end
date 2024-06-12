import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Cart from "../../../Components/Cart/Cart";

const LatestRecipe = () => {

    const axiosPublic = useAxiosPublic()

    const { data } = useQuery({
        queryKey: ['gadgets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/all-items`)
            return res.data
        }
    })

    return (
        <div>
            <h1 className='text-4xl md:text-5xl font-semibold text-center'>Latest Recipw</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    data?.length > 0 ? data.slice(0, 4).map((item) => (
                        <Cart key={item._id} item={item} />
                    ))
                        :
                        <p className="text-center">Loading...</p>
                }
            </div>
            <div className="flex justify-center mt-10">
                <button className={` rounded-lg border border-[#d8af3e] px-4 py-2 text-[12px] font-semibold hover:bg-[#e6ab3e] hover:text-white duration-500 sm:text-sm md:text-base`}>View Latest Recipe</button>
            </div>
        </div>
    );
};

export default LatestRecipe;