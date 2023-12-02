import { Link } from "react-router-dom";

const Pro = () => {
const price = 200;
  return (
    <div className="section-container my-10">
      <div className="my-16 text-center">
        <p className="subtitle">Pro User</p>
        <h2 className="title">Pay to Be Pro</h2>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="h-60 w-full">
          <img
            src="https://i.ibb.co/FnJ1trH/US-one-dollar-bill-obverse-series-2009.jpg"
            alt="payment"
            className="rounded-full"
          />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title ">Want To Be PRO USER</h2>
          <p>You can Comment on every survey.</p>
          <p>Your Comment will be shown to all users</p>
          <p>Price : <span className="text-7xl">{price}</span><sub>$</sub> </p>
          <div className="card-actions my-10">
               <Link to='/pro/payment'>
               <button className="btn bg-green text-white px-10 hover:text-green">Pay</button>

               </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;
