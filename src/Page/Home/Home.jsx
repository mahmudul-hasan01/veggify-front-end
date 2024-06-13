import AboutSection from "./AboutSection/AboutSection";
import Banner from "./Banner/Banner";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import LatestRecipe from "./LatestRecipe/LatestRecipe";
import NewsLetter from "./NewsLetter/NewsLetter";
import Subscription from "./Subscription/Subscription";


const Home = () => {
    return (
        <div className='space-y-20'>
            <div className="flex flex-col justify-center items-center w-full mt-10">
            <Banner/>
            </div>
            <FeaturedSection/>
            <LatestRecipe/>
            <NewsLetter/>
            <AboutSection/>
            <CompanyLogo/>
            <Subscription/>
        </div>
    );
};

export default Home;