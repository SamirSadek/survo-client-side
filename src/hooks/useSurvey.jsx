import { useEffect, useState } from "react";

const useSurvey = () => {
    const [survey, setSurvey] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/surveys")
      .then((res) => res.json())
      .then((data) => {
        setSurvey(data);
        setLoading(false)
      });
  }, []);
    return [survey,loading]
}
export default useSurvey;