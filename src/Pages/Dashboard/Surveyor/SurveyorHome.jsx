import { PieChart, Pie, Cell, Legend } from "recharts";
import useSurvey from "../../../hooks/useSurvey";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SurveyorHome = () => {
    const { user } = useContext(AuthContext);
    const [survey] = useSurvey();
    const yourSurvey = survey.filter((item) => item.email === user.email);
    const userChartData = [
        { name: "Total Survey", value: survey.length },
        { name: "Your Survey", value: yourSurvey.length },
        
      ];
      const COLORS = ["#0088FE", "#00C49F"];

    return (
        <div className="section-container my-20">
        <div className="my-16 text-center">
          <p className="subtitle">your Profile</p>
          <h2 className="title">
            Welcome Back <span className="text-green">{user?.displayName}</span>{" "}
          </h2>
        </div>
        <div className="stats shadow gap-2 w-full mx-auto">
          <div className="stat place-items-center bg-green">
            <div className="stat-title">Total Survey</div>
            <div className="stat-value">{survey.length}</div>
          </div>
  
          <div className="stat place-items-center bg-green">
            <div className="stat-title">Your Survey</div>
            <div className="stat-value text-secondary">{yourSurvey.length}</div>
          </div>
  
          
        </div>
        <div className="w-full mx-auto">
        <PieChart width={900} height={300}>
              <Pie
                data={userChartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {userChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend align="center" verticalAlign="bottom" height={36} />
            </PieChart>
        </div>
      </div>
    );
};

export default SurveyorHome;