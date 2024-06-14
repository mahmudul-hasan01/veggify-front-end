import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
    return (
        <div className="mb-20 space-y-10">
            <div>
                <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">All Items</h1>
                <p className="text-center sm:w-1/2 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nesciunt nisi eveniet laborum accusamus officia dignissimos incidunt sit consequatur tenetur!</p>
            </div>

            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-white rounded-lg shadow-xl container mx-auto px-10 py-32 flex items-center justify-between">
                    <div className="w-8/12 text-2xl">
                        <FaQuoteLeft className="float-left mr-2" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis voluptatem consequatur laudantium non exercitationem fuga quibusdam praesentium ex quisquam?</p>
                    </div>
                    <div>
                    <button className={`rounded-lg border border-[#d8af3e] px-10 py-2 text-[12px] font-semibold bg-[#e6ab3e] text-white hover:bg-white hover:text-black duration-500 sm:text-sm md:text-base`}>Get Started</button>
                    </div>
            </div>
        </div>
    );
};

export default About;