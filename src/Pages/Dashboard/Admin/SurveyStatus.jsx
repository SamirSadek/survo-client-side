import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdUnpublished } from "react-icons/md";
import Swal from "sweetalert2";

const SurveyStatus = () => {
  const axiosPublic = useAxiosPublic();
  const { data: surveys = [], refetch } = useQuery({
    queryKey: ["surveys"],
    queryFn: async () => {
      const res = await axiosPublic.get("/surveys");
      return res.data;
    },
  });
  const handleDelete = (item ) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Unpublish it!",
      }).then((result) => {
        if (result.isConfirmed) {
            axiosPublic.delete(`/surveys/${item._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Unpublished!",
                text: "Your Survey has been Unpublished.",
                icon: "success",
              });
            }
            refetch()
          });
        }
      });

  }
  return (
    <div className="section-container my-20">
      <div className="my-16 text-center">
        <p className="subtitle">All Surveys</p>
        <h2 className="title">Total Surveys: {surveys.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Unpublish</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {surveys.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td className="text-green">Published</td>
                <td className="py-2 ">
                  <button onClick={() => handleDelete(item)}>
                  <MdUnpublished className="w-12 bg-red text-white btn btn-xs"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyStatus;
