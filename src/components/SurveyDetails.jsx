import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SurveyDetails = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await axiosPublic.get("/users");
          return res.data;
        },
      });
      const userEmail = user.email;
      const foundUser = users.find((user) => user.email === userEmail);
      console.log(foundUser);
    const {
        _id,
        title,
        category,
        options,
        description,
        like,
        dislike,
        vote,
        name,
        timestamp,
      } = useLoaderData();
  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">Survey Details</p>
        <h2 className="title">Get Into a Survey</h2>
      </div>
      <div className="bg-green  p-2 rounded">
        <h2 className="text-center text-2xl font-bold text-white p-2 rounded">
          Title: {title}
        </h2>
        <div className="flex justify-evenly text-gray-800">
          <p> Created By: {name}</p>
          <p>
            Created At: {moment(timestamp).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
        </div>
        <p className="my-5 px-5 text-white text-center">{description}</p>
        <div className="mt-10 flex justify-evenly text-blue-700 font-bold">
          <p>Like: {like}</p>
          <p>Dislike: {dislike}</p>
          <p>Vote: {vote}</p>
        </div>

      </div>
      <div className="text-center my-5">
{ foundUser?.role == "NormalUser" || foundUser?.role == "ProUser" ?
         
            <Link to={`/dashboard/participatesurvey/${_id}`}>
            <button className="btn bg-green text-white">
                Participate
            </button>
            </Link> : ''
}
      </div>
    </div>
  );
};

export default SurveyDetails;
