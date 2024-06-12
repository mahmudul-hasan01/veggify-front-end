import Banner from "./Banner/Banner";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import LatestRecipe from "./LatestRecipe/LatestRecipe";
import NewsLetter from "./NewsLetter/NewsLetter";


const Home = () => {
    return (
        <div className='space-y-20'>
            <div className="flex flex-col justify-center items-center w-full mt-10">
            <Banner/>
            </div>
            <FeaturedSection/>
            <LatestRecipe/>
            <NewsLetter/>
        </div>
    );
};

export default Home;