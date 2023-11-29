import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="section-container flex">
      <div className="w-64 bg-base-200 ">
        <div className="text-center ">
        <p className="btn btn-ghost text-base my-5 font-bold rounded border border-r-0 border-l-0 border-t-8  border-green text-green uppercase">
          Survo
        </p>
        </div>
        <ul className="my-10 px-4">
            <li><NavLink>Manage Users</NavLink></li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
