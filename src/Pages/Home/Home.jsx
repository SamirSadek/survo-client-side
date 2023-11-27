import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";
import FeaturedSurveys from "../../components/FeaturedSurveys";
import LatestSurveys from "../../components/LatestSurveys";
import Testimonials from "../../components/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedSurveys/>
            <LatestSurveys/>
            <FAQ/>
            <Testimonials/>
           
        </div>
    );
};

export default Home;