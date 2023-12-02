import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import moment from "moment";

const ParticipateSurveyItem = () => {
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
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);
  const [voteCount, setVoteCount] = useState(vote);

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [voteClicked, setVoteClicked] = useState(false);

  const handleLikeClick = () => {
    if (!likeClicked) {
      setLikeCount(likeCount + 1);
      setLikeClicked(true);
    }
  };

  const handleDislikeClick = () => {
    if (!dislikeClicked) {
      setDislikeCount(dislikeCount + 1);
      setDislikeClicked(true);
    }
  };

  const handleVoteClick = () => {
    if (!voteClicked) {
      setVoteCount(voteCount + 1);
      setVoteClicked(true);
    }
  };

  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">Give feedback</p>
        <h2 className="title">Participate in a Survey</h2>
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
        <p className="my-5 px-5 text-white">{description}</p>
      </div>

      <div className="flex items-center justify-between px-5">
      <div className="flex gap-5 my-3">
        <div>
          {/* Like button */}
          <button onClick={handleLikeClick} style={{ color: likeClicked ? 'green' : 'black' }} disabled={likeClicked}>
            Like
          </button>
          <span className="ml-1">{likeCount}</span>
        </div>

        <div>
          {/* Dislike button */}
          <button onClick={handleDislikeClick} style={{ color: dislikeClicked ? 'green' : 'black' }} disabled={dislikeClicked}>
            Dislike
          </button>
          <span className="ml-1">{dislikeCount}</span>
        </div>
      </div>
      <div>
        {/* Poll vote */}
        <button onClick={handleVoteClick} style={{ color: voteClicked ? 'green' : 'black' }} disabled={voteClicked}>
          Vote
        </button>
        <span className="ml-1">{voteCount}</span>
      </div>
      
        
      </div>

      <div className="text-center space-y-2">
        <textarea
          className="border border-green rounded w-full"
          name=""
          id=""
          rows="3"
        ></textarea>
        <button className="btn btn-sm bg-green text-white">Report</button>
      </div>
      <div>
        <h2 className="font-bold">Comments:</h2>
      </div>
    </div>
  );
};

export default ParticipateSurveyItem;
