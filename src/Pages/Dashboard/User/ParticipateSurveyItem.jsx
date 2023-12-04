import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import moment from "moment";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ParticipateSurveyItem = () => {
  const { register, handleSubmit } = useForm();

  const axiosPublic = useAxiosPublic();

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
    email,
    timestamp,
  } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(like || 0);
  const [dislikeCount, setDislikeCount] = useState(dislike || 0);
  const [voteCount, setVoteCount] = useState(vote);

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [voteClicked, setVoteClicked] = useState(false);

  const handleLikeClick = async () => {
    if (!likeClicked) {
      setLikeCount(likeCount + 1);
      setLikeClicked(true);
      console.log("Like Count:", likeCount);
      const likes = await axiosPublic.put(`/surveys/${_id}`, {
        like: likeCount + 1,
        dislike: dislikeCount,
        vote: voteCount,
      });
      console.log(likes.data);
    }
  };

  const handleDislikeClick = async () => {
    if (!dislikeClicked) {
      setDislikeCount(dislikeCount + 1);
      setDislikeClicked(true);
      const dislikes = await axiosPublic.put(`/surveys/${_id}`, {
        dislike: dislikeCount + 1,
        like: likeCount,
        vote: voteCount,
      });
      console.log(dislikes.data);
    }
  };

  const handleVoteClick = async () => {
    if (!voteClicked) {
      setVoteCount(voteCount + 1);
      setVoteClicked(true);
      const votes = await axiosPublic.put(`/surveys/${_id}`, {
        dislike: dislikeCount,
        like: likeCount,
        vote: voteCount + 1,
      });
      console.log(votes.data);
    }
  };

  const onSubmit = async (data) => {
    console.log(data.feedback);
    const feedBacks = {
      title: title,
      surveyor: email,
      feedBacker: user.email,
      feedback: data.feedback,
    };
    console.log(feedBacks);
        const feed = await axiosPublic.post('/feedbacks',feedBacks)
        console.log(feed.data)
        if(feed.data.insertedId){
            // 
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Thanks For Your FeedBack",
              showConfirmButton: false,
              timer: 1500
            });
            
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
            <button
              onClick={handleLikeClick}
              style={{ color: likeClicked ? "green" : "black" }}
              disabled={likeClicked}
            >
              Like
            </button>
            <span className="ml-1">{likeCount}</span>
          </div>

          <div>
            {/* Dislike button */}
            <button
              onClick={handleDislikeClick}
              style={{ color: dislikeClicked ? "green" : "black" }}
              disabled={dislikeClicked}
            >
              Dislike
            </button>
            <span className="ml-1">{dislikeCount}</span>
          </div>
        </div>
        <div>
          {/* Poll vote */}
          <button
            onClick={handleVoteClick}
            style={{ color: voteClicked ? "green" : "black" }}
            disabled={voteClicked}
          >
            Vote
          </button>
          <span className="ml-1">{voteCount}</span>
        </div>
      </div>

      <form className="text-center space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("feedback")}
          placeholder="Give A FeedBack"
          className="border border-green rounded w-full"
        ></textarea>
        <button className="btn btn-sm bg-green text-white">Report</button>
      </form>
      <div>
        <h2 className="font-bold">Comments:</h2>
      </div>
    </div>
  );
};

export default ParticipateSurveyItem;
