import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>

      <li>
        <a>Surveys</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto">
      <div className="navbar xl:px-24 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <p className="btn btn-ghost text-base font-bold rounded border border-r-0 border-l-0 border-t-8  border-green text-green uppercase">
            Survo
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="signup"
            className="btn bg-green rounded-full px-6 text-white flex items-center"
          >
            <CiLogin />
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
