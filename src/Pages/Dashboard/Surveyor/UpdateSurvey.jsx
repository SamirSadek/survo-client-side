import moment from "moment";
import useSurvey from "../../../hooks/useSurvey";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const UpdateSurvey = () => {
  const { user } = useContext(AuthContext);
  const [survey] = useSurvey();
  const yourSurvey = survey.filter((item) => item.email === user.email);

  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">Wanna Update</p>
        <h2 className="title">Your Created Surveys</h2>
      </div>
      <div className="my-5">
        <p>Your Created Survey: {yourSurvey?.length} </p>
        {
          //
          yourSurvey.map((item) => (
            <div
              key={item._id}
              className=" my-5 border-2 border-green rounded-tr-3xl rounded-bl-3xl bg-base-100 shadow-2xl"
            >
              <div className="card-body">
                <h2 className="card-title">
                  <span className="font-bold">Title: </span> {item.title}
                </h2>
                <p>
                  <span className="font-bold">Description: </span>
                  {item.description}
                </p>
                <div className="card-actions justify-evenly items-center">
                  <p className="text-xs">
                    <span className="font-bold text-green">Published On: </span>
                    {moment(item.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                  <Link to={`/dashboard/udpatesurvey/${item._id}`}>
                    <button className="btn btn-primary bg-green border-0 text-white hover:text-green hover:bg-base-200">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default UpdateSurvey;
