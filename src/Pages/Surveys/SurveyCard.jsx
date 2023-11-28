
import moment from 'moment';

const SurveyCard = ({item}) => {
  return (
    <div className="w-1/3"> 
      <div className="card bg-base-100 h-60 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-green">{item.title}!</h2>
          <p>{item.description}</p>

          <p className='text-xs'><span className='text-green'>Published on: </span>{moment(item.timestamp).format("MMMM Do YYYY, h:mm:ss a")}</p>

          <div className="card-actions justify-between">
            <button className="px-4 py-2 bg-green rounded text-white">Total Vote : {item.vote}</button>
            <button className="px-4 py-2 rounded text-green bg-base-200 border-b-4 font-bold border-green">See Survey Details</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SurveyCard;
