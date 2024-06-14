import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const axiosPublic = useAxiosPublic()
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/item/${id}`)
            return res.data
        }
    })
    const totalTime = parseInt(data?.more?.prep_time.split(' ')[0]) + parseInt(data?.more?.cook_time.split(' ')[0])

    return (
        <section className="min-h-dvh md:flex justify-center items-center">
            <article>
                <div className="bg-white md:my-[5rem] md:py-8 md:rounded-lg">
                    <picture>
                        <img src={data?.thumbnail_image} className="md:max-w-[90%] w-full md:h-[570px] rounded-lg mx-auto" alt="" />
                    </picture>
                    <div className="px-8 space-y-6">
                        <h1 className="text-4xl mt-12 ">{data?.name}</h1>
                        <p>{data?.instructions}</p>
                        <article>
                            <h1 className="text-xl font-semibold ml-2">Preparation time</h1>
                            <ul className="list-disc ml-8 space-y-3 mt-5">
                                <li>
                                    <p>
                                        Total time: <span>{totalTime} minutes</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Prepatation time: <span>{data?.more?.prep_time}</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Cooking time: <span>{data?.more?.cook_time}</span>
                                    </p>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div className="px-8 space-y-6 mt-5">
                        <article>
                            <h1 className="text-xl font-semibold ml-2">Ingredients</h1>
                            <ul className="list-disc ml-8">
                                {
                                    data?.ingredients?.map(item => (
                                        <li key={item?._id} className="pl-4 mt-2">
                                            <span>{item?.name}</span>
                                            <span>{item?.quantity}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </article>
                    </div>
                </div>
            </article>

        </section>
    );
};

export default SingleProduct;