import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import booklogo from "../../assets/book-4986.svg";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";
export default function Login() {
  const { LoginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    // prevent defult  form relode behaviour
    e.preventDefault();

    // selecte form
    const form = e.target;

    // getting form data
    const email = form.email.value;
    const password = form.password.value;

    LoginUser(email, password)
      .then((data) => {
        Swal.fire({
          title: "success",
          text: "User login Successfully",
          icon: "success",
          confirmButtonText: "ok",
        });
        return location.state === null
          ? navigate("/")
          : navigate(location.state);
      })
      .catch((err) => {
        Swal.fire({
          title: "error",
          text: { err },
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  };

  return (
    <div className="mx-12 md:mx-40 lg:mx-56 my-12 lg:shadow-md lg:px-4 py-8 md:mb-[169px]">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>

      <img src={booklogo} className="w-8 h-8 m-2 mx-auto" />
      <p className="text-xs text-center text-amber-700 mb-2">
        Login in to access your account
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 lg:w-12/12 mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-amber-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 lg:w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-amber-600 mb-2 block hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          Login
        </button>
        <span className="text-xs text-amber-400 inline-block">
          Don't have an account yet?
        </span>
        <Link to={"/auth/register"}>
          <span className="text-amber-700 mx-1 text-xs underline">
            Register{" "}
          </span>
        </Link>
      </form>
    </div>
  );
}
