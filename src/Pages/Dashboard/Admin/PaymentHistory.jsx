import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from "moment";

const PaymentHistory = () => {

    const axiosPublic = useAxiosPublic()
    const {data: payments,isLoading, isError} = useQuery({
        queryKey: ['payments'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/payments')
            console.log(res.data)
            return res.data
        }
    })
    if (isLoading) {
      return <div>Loading...</div>; // Optional loading indicator while data is fetching
  }

  if (isError) {
      return <div>Error fetching data</div>; // Optional error message handling
  }
  return (
    <div className="section-container my-20">
      <div className="my-16 text-center">
        <p className="subtitle">Payments</p>
        <h2 className="title">All Payment History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green text-white">
            <tr>
              <th>#</th>
              <th>TransactionId</th>
              <th>Email</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* rows*/}
            {payments.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>{item.transactionId}</td>
                <td>{item.email}</td>
                <td>
                {moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>{item.price}$</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
