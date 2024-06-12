import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useParams, useSearchParams } from "react-router-dom";
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Search = () => {

    const [params, setParams] = useSearchParams()
    const axiosPublic = useAxiosPublic()
    const searchText = params.get('query')
    const [query, setQuery] = useState(searchText)

    const { data } = useQuery({
        queryKey: ['gadgets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/items?search=${query}`)
            return res.data
        }
    })

    const handleChange = (e) => {
        setQuery(e.target.value)
    }



    return (
        <div className="px-6 lg:px-12 py-20">
            <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">Search</h1>
            {/* <div className="bg-white w-4/5 mx-auto p-4 rounded-md border relative flex items-center mb-10">
                <IoIosSearch className="w-5 h-5 text-neutral-300 mr-2" />
                <input className="outline-none w-full" name="query" placeholder="Search for a recipe" type="search" />
            </div> */}
            <div className="bg-white w-4/5 mx-auto p-4 rounded-md border relative flex items-center mb-10">
                <IoIosSearch className="w-5 h-5 text-neutral-300 mr-2" />
                <input value={query} onChange={handleChange} className="outline-none w-full" name="query" placeholder="Search for a recipe" type="search" />
            </div>
            {
                data?.map(item => (
                    <p key={item._id}>{item?.name}</p>
                ))
            }
        </div>
    );
};

export default Search;