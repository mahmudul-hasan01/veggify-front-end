import image from '../../../assets/about-image.jpg'

const AboutSection = () => {
    return (
        <div className="overflow-hidden flex flex-col md:flex-row justify-between items-center my-4 gap-5 md:gap-10 px-5 lg:px-10">
            <div className='w-full md:w-[500px] space-y-5'>
                <h1 className='text-4xl md:text-5xl font-semibold -3'>Vegan foodie who loves to experiment with recipe</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi perspiciatis maxime cumque possimus sed aspernatur consequuntur magnam quod deserunt porro.</p>
                <button className={` rounded-lg border border-[#d8af3e] px-4 py-2 text-[12px] font-semibold hover:bg-[#e6ab3e] hover:text-white duration-500 sm:text-sm md:text-base`}>View Recipe</button>
            </div>
            <div className='w-full md:w-[600px]'>
                <img src={image} className='w-full rounded-md' alt="" />
            </div>
        </div>
    );
};

export default AboutSection;