import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { GiEngagementRing } from "react-icons/gi";


import {
  MdLogout,
  MdOutlinePayments,
  MdOutlinePriceChange,
  MdPublishedWithChanges,
  MdUpdate,
} from "react-icons/md";
import { FcSurvey } from "react-icons/fc";
import { IoBarChartSharp } from "react-icons/io5";
import { RiSurveyFill } from "react-icons/ri";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  const userEmail = user.email;
  const foundUser = users.find((user) => user.email === userEmail);
  console.log(foundUser);

  return (
    <div className="section-container min-h-screen flex">
      <div className="w-64 bg-base-200 ">
        <div className="text-center ">
          <p className="btn btn-ghost text-base my-5 font-bold rounded border border-r-0 border-l-0 border-t-8  border-green text-green uppercase">
            Survo
          </p>
        </div>

        {/* Admin */}

        {foundUser?.role === "Admin" && (
          <>
            <h2 className="text-center font-bold">Admin Dashboard</h2>
            <ul className="my-10 px-4 space-y-2">
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/manageuser"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <FaUsers />
                  Manage Users
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/surveystatus"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <MdPublishedWithChanges />
                  Survey Status
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/paymenthistory"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <MdOutlinePayments />
                  Payment History
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/surveyresponse"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <FcSurvey />
                  Survey Responses
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/charts"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <IoBarChartSharp />
                  Charts
                </NavLink>
              </li>
            </ul>
          </>
        )}
        {/* Surveyor */}
        {foundUser?.role === "Surveyor" && (
          <>
            <h2 className="text-center font-bold">Surveyor Dashboard</h2>
            <ul className="my-10 px-4 space-y-2">
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/createsurvey"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <IoIosCreate />
                  Create Survey
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/updatesurvey"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <MdUpdate />
                  Update Survey
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/feedbacks"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <VscFeedback />
                  Feedbacks
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/surveyresponse"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <FcSurvey />
                  Survey Responses
                </NavLink>
              </li>
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/charts"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <IoBarChartSharp />
                  Charts
                </NavLink>
              </li>
            </ul>
          </>
        )}
        {/* NormalUser */}
        {foundUser?.role == "NormalUser" && (
          <>
            <h2 className="text-center font-bold">User Dashboard</h2>

            <ul className="my-10 px-4 space-y-2">
              <li className="text-gray-700 font-semibold px-4 ">
                <NavLink
                  to="/dashboard/participate"
                  className="flex  items-center gap-3 aria-[current=page]:text-green"
                >
                  <GiEngagementRing />
                  Participate Survey
                </NavLink>
              </li>
            </ul>
          </>
        )}

        <div className="divider px-8"></div>

        <ul className="my-10 px-4 space-y-2">
          <li className="text-gray-700 font-semibold px-4 ">
            <NavLink to="/" className="flex  items-center gap-3 ">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li className="text-gray-700 font-semibold px-4 ">
            <NavLink to='/surveys' className="flex  items-center gap-3 ">
              <RiSurveyFill />
              Surveys
            </NavLink>
          </li>
          <li className="text-gray-700 font-semibold px-4 ">
            <NavLink to='/pro' className="flex  items-center gap-3 ">
              <MdOutlinePriceChange />
              Pro
            </NavLink>
          </li>
          <li className="text-gray-700 font-semibold px-4 ">
            <NavLink className="flex  items-center gap-3 ">
              <MdLogout />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
