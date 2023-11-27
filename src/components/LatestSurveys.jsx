import { useEffect, useState } from "react";
import LatestSurveyCard from "./LatestSurveyCard";

const LatestSurveys = () => {
    const [survey, setSurvey] = useState([]);
    useEffect(() => {
      fetch("survey.json")
        .then((res) => res.json())
        .then((data) => {
            const sortedByTimestamp = data.sort((a, b) => {
                const timestampA = new Date(a.timestamp);
                const timestampB = new Date(b.timestamp);
                return timestampB - timestampA;
              });
              const top6Surveys = sortedByTimestamp.slice(0, 6);
          setSurvey(top6Surveys);
        });
    }, []);
  return (
    <section className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">Latest Surveys</p>
        <h2 className="title">Most Recently Created Surveys</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {survey.map((item) => (
          <LatestSurveyCard
            key={item.title}
            item={item}
          ></LatestSurveyCard>
        ))}
      </div>
    </section>
  );
};

export default LatestSurveys;
