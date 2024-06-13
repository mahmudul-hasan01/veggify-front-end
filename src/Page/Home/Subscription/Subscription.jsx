
const Subscription = () => {
    return (
        <div className="py-20 bg-white rounded-t-md max-w-screen-xl mx-auto px-6 lg:px-20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-20 mb-10">
                <div className="w-1/2">
                    <h1 className="text-2xl font-semibold">Subscribe to our newsletter.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil esse culpa dicta quod, suscipit debitis temporibus eos a velit iure.</p>
                </div>
                <div className="w-1/2 flex flex-col md:flex-row gap-4">
                    <input name="email" className="rounded-md border border-[#d8af3e] bg-transparent px-4 py-2 text-black focus:outline-none" placeholder="Email" type="email" />

                    <button className={` rounded-lg border border-[#d8af3e] px-4 py-2 text-[12px] font-semibold hover:bg-[#e6ab3e] hover:text-white duration-500 sm:text-sm md:text-base`}>Get Started</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Subscription;