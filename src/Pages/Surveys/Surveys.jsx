import { useState } from "react";
import useSurvey from "../../hooks/useSurvey";
import SurveyCard from "./SurveyCard";

const Surveys = () => {
  const [survey] = useSurvey();
  const [filterCategory, setFilterCategory] = useState("");
  const [sortedSurveys, setSortedSurveys] = useState([]);

  

  // Filter function based on category
  const filteredSurveys = survey.filter(
    (item) =>
      filterCategory === "" ||
      item.category.toLowerCase() === filterCategory.toLowerCase()
  );

  // Function to handle category filter change
  const handleCategoryFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const sortSurveysByMaxVotes = () => {
    const sorted = [...filteredSurveys];
    sorted.sort((a, b) => b.vote - a.vote);
    setSortedSurveys(sorted);
  };
//  className="flex flex-wrap gap-20 section-container justify-center mt-10"
  return (
    <section className="section-container mt-10">
      <div className="flex justify-evenly my-10">
      <div >
        <select className="px-5 py-3 rounded bg-green text-white" value={filterCategory} onChange={handleCategoryFilterChange}>
          <option value="">Filter by Category</option>
          <option value="Demographics">Demographics</option>
          <option value="Education">Education</option>
          <option value="Market Research">Market Research</option>
          <option value="Health">Health</option>
          <option value="Social Issues">Social Issues</option>
        </select>
      </div>
      <div>
          <button className="px-5 py-3 rounded bg-green text-white" onClick={sortSurveysByMaxVotes}>
            Filter by Max Votes*
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center">
        {/* Display sorted or filtered surveys based on button click */}
        {sortedSurveys.length > 0
          ? sortedSurveys.map((item) => (
              <SurveyCard key={item.title} item={item}></SurveyCard>
            ))
          : filteredSurveys.map((item) => (
              <SurveyCard key={item.title} item={item}></SurveyCard>
            ))}
      </div>
    </section>
  );
};

export default Surveys;
