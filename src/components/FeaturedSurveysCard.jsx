import moment from 'moment';

const FeaturedSurveysCard = ({item}) => {
  return (
    <div className="card w-96 bg-green text-neutral-content">
      <div className="card-body items-center text-center  ">
        <h2 className="card-title text-2xl text-white font-bold">{item.category}</h2>
        <p className="text-lime-800 font-semibold">{item.title}</p>
        <p className='text-sm'>{moment(item.timestamp).format("MMMM Do YYYY, h:mm:ss a")}</p>
        
      </div>
    </div>
  );
};

export default FeaturedSurveysCard;
