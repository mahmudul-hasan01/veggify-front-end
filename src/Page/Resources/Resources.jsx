import { IoMdTime } from 'react-icons/io';
import { blogData } from '../../../public/blog.js'

const Resources = () => {
    return (
        <section className="mb-10">
            <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">Resources</h1>
            <article className="px-6 sm:px-12">
                <div className="space-y-2 text-center">
                    <div className="container p-6 mx-auto space-y-8">
                        <h1 className="text-3xl font-bold">Pertem resources</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                        {
                            blogData?.map((blog, index) => (
                                <div key={index} className="w-[280px] h-[350px] relative flex flex-col space-y-4 rounded-lg bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition duration-700 mx-auto">
                                    <img className="w-full h-[200px] flex-none rounded-lg object-cover" src={blog?.imgSrc} alt="card navigate ui" />
                                    <div className="px-4 grow text-start">
                                        <h1>{blog?.category}</h1>
                                        <h1 className="text-lg font-semibold ">{blog?.title}</h1>
                                    </div>
                                    <div className="flex-none w-full px-4 pb-4">
                                        <div className="flex justify-between">
                                            <p className="flex items-center gap-2"><IoMdTime /> <span>{blog?.date}</span></p>
                                            <p className={``}>{blog?.views}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Resources;