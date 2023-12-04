import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Pro = () => {
const price = 200;
const axiosPublic = useAxiosPublic();
const {user} = useContext(AuthContext)

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  const userEmail = user?.email;
  const foundUser = users.find((user) => user?.email === userEmail);
  console.log(foundUser);
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

          {
            foundUser?.role == "NormalUser" ? <div className="card-actions my-10">
            <Link to='/pro/payment'>
            <button className="btn bg-green text-white px-10 hover:text-green">Pay</button>

            </Link>
       </div> : <p className=" border-2 border-green my-5 px-5 py-1 rounded">This Feature Is only For <span className="text-4xl text-green font-bold"> Normal User</span>. You Are Not!!</p>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Pro;
