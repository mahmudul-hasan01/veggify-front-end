
const NewsLetter = () => {
    return (
        <div className="w-full md:w-2/3 mx-auto felx flex-col items-center p-10">
            <h1 className="text-4xl font-semibold text-center">Sign up for my weekly newsletter</h1>
            <p className="text-center my-5">Weekly emails with my latest recipes, cooking tips and tricks and product recommendations! <br /> You will be set up in minutes.</p>
            <div className="flex gap-4 justify-center mt-10">
                <input name="name" className="rounded-lg border border-[#d8af3e] bg-transparent px-4 py-2 text-black focus:outline-none" placeholder="Name" type="text" />

                <input name="email" className="rounded-lg border border-[#d8af3e] bg-transparent px-4 py-2 text-black focus:outline-none" placeholder="Email" type="email" />

                <button className={` rounded-lg border border-[#d8af3e] px-4 py-2 text-[12px] font-semibold hover:bg-[#e6ab3e] hover:text-white duration-500 sm:text-sm md:text-base`}>Get Started</button>
            </div>

        </div>
    );
};

export default NewsLetter;