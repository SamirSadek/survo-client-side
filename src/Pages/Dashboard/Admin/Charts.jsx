import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Charts = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: stats={} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/admin-stats");
      return res.data;
    },
  });
   const userChartData = [
    { name: "Other Users", value: stats.users - stats.proUser },
    { name: "Pro Users", value: stats.proUser },
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
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat place-items-center bg-green">
          <div className="stat-title">Pro Users</div>
          <div className="stat-value text-secondary">{stats.proUser}</div>
        </div>

        <div className="stat place-items-center bg-green">
          <div className="stat-title">Surveys</div>
          <div className="stat-value">{stats.surveys}</div>
        </div>
        <div className="stat place-items-center bg-green">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}$</div>
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

export default Charts;
