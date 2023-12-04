import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const FeedbackUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedbacks");
      return res.data;
    },
  });
  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">All Feedback From Users</p>
        <h2 className="title">Total FeedBack: {feedbacks.length}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
      {feedbacks.map((feedback) => (
        <div key={feedback._id} className="card w-96 bg-green text-neutral-content">
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title">{feedback.title}</h2>
            <p>User Feedback : {feedback.feedback}</p>
            <div className="text-blue-800 ">
              <p className="">Surveyor: {feedback.surveyor}</p>
              <p className="">User : {feedback.feedBacker}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FeedbackUsers;
