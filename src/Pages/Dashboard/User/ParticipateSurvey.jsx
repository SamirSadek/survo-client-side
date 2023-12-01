import moment from "moment";
import useSurvey from "../../../hooks/useSurvey";
import { Link } from "react-router-dom";

const ParticipateSurvey = () => {
  const [survey] = useSurvey();

  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">Wanna join</p>
        <h2 className="title">Participate in a Survey</h2>
      </div>
      <div className="my-5">
        {
          //
          survey.map((item) => (
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
                  <Link to={`/dashboard/participatesurvey/${item._id}`}>
                    <button className="btn bg-green hover:bg-base-200 hover:text-green border-0 text-white">
                      Participate
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

export default ParticipateSurvey;
