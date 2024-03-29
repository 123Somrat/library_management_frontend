import { IoBookSharp } from "react-icons/io5";
import logo from "../../assets/book-4986.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";
import './Nav.css'
export default function Nav() {
  //<IoBookSharp classNameName="w-8 h-8 text-amber-600"/>
  const { User, userSignOut } = useContext(AuthContext);

  // user signOut function
  const signOut = () => {
    userSignOut();
  };
 // md:bg-red-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
  return (
    <div id='nav'>
      <nav className=" dark:bg-gray-900  w-full mx-auto z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex  flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="library Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-transparent  bg-clip-text bg-gradient-to-r from-amber-400 to-amber-700">
              Public Library
            </span>
          </Link>
          <div className="flex md:order-2">
            {User ? (
              <button
                type="button"
                onClick={signOut}
                className="text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                SignOut
              </button>
            ) : (
              <Link to={"auth/login"}>
                {" "}
                <button
                  type="button"
                  className="text-white bg-amber-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </Link>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to={"/"}
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-amber-600 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/books"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  All Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/addBook"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/borrowedBook"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Borrowed book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/space"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Spaces & Rooms
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/requestbook"}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Request for add book
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
