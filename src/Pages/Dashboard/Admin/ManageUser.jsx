import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ManageUser = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  const updateUserRole = async (userId, newRole) => {
    try {
      await axiosPublic.put(`/users/${userId}`, { role: newRole });
      // Once the role is updated, refetch the user data to display the updated information
      await refetch();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };
  const handleRoleChange = async (userId, event) => {
    const newRole = event.target.value;
    await updateUserRole(userId, newRole);
  };

  return (
    <div className="section-container">
      <div className="my-16 text-center">
        <p className="subtitle">All User</p>
        <h2 className="title">Total User: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Select Role</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  {/* <select className="select select-bordered w-1/2 max-w-xs">
                    <option disabled selected>
                      Select a role
                    </option>
                    <option>Admin</option>
                    <option>Surveyor</option>
                  </select> */}
                  <select
                    className="select select-bordered w-1/2 max-w-xs"
                    value={item.role} // Assuming `item.role` holds the user's current role
                    onChange={(event) => handleRoleChange(item._id, event)}
                  >
                    <option disabled value="">
                      Select a role
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Surveyor">Surveyor</option>
                  </select>
                </td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
