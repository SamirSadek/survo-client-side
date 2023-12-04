import { useEffect, useState } from "react";

const useSurvey = () => {
    const [survey, setSurvey] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://survo-server.vercel.app/surveys")
      .then((res) => res.json())
      .then((data) => {
        setSurvey(data);
        setLoading(false)
      });
  }, []);
    return [survey,loading]
}
export default useSurvey;