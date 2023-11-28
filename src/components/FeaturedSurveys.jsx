import FeaturedSurveysCard from "./FeaturedSurveysCard";
import useSurvey from "../hooks/useSurvey";

const FeaturedSurveys = () => {
  const [survey] = useSurvey()

  const sortedSurveys = survey.sort((a, b) => b.vote - a.vote);
  const top6Surveys = sortedSurveys.slice(0, 6);

//   const [survey, setSurvey] = useState([]);
//   useEffect(() => {
//     fetch("survey.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const sortedSurveys = data.sort((a, b) => b.vote - a.vote);
//         const top6Surveys = sortedSurveys.slice(0, 6);
//         console.log(top6Surveys);
//         setSurvey(top6Surveys);
//       });
//   }, []);

  return (
    <section className="section-container">
      <div className="my-16 text-center"> 
        <p className="subtitle">Featured Surveys</p>
        <h2 className="title">Most Voted Surveys</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {
            top6Surveys.map(item => <FeaturedSurveysCard key={item.title} item={item}></FeaturedSurveysCard>)
        }
        </div>
    </section>
  );
};

export default FeaturedSurveys;
