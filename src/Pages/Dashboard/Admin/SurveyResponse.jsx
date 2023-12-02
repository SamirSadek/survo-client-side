import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from 'moment';

const SurveyResponse = () => {
    const axiosPublic = useAxiosPublic();
    const { data: surveys = [] } = useQuery({
      queryKey: ["surveys"],
      queryFn: async () => {
        const res = await axiosPublic.get("/surveys");
        return res.data;
      },
    });
  return (
    <div className="section-container my-20">
      <div className="my-16 text-center">
        <p className="subtitle">All Surveys</p>
        <h2 className="title">Total Surveys: {surveys.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Time</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {surveys.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                {moment(item.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>{item.vote}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyResponse;
