import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Category from "../Home/Category/Category";
import Cart from "../../Components/Cart/Cart";

const Recipes = () => {

    const axiosPublic = useAxiosPublic()


    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/all-items`)
            return res.data
        }
    })

    return (
        <div className="px-6 lg:px-12 py-10">
        <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">All Items</h1>
        <Category />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                data?.map(item => (
                    <Cart key={item._id} item={item}/>
                ))
            }
        </div>
    </div>
    );
};

export default Recipes;