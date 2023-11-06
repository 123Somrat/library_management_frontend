import { Link, useNavigate } from "react-router-dom";
import booklogo from "../../assets/book-4986.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";
import Swal from 'sweetalert2'
import axios from "axios";
export default function Register() {
    // import
const {CreateUser} = useContext(AuthContext)
const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();

    // select the form
      const form = e.target;
   
      // collecting form data
        
      const fname = form.fname.value;
      const lname = form.lname.value;
      const email = form.email.value;
      const password = form.password.value;
      
      CreateUser(email,password)
      .then(user=>{Swal.fire({
        title: 'success',
        text: "User Created Successfully",
        icon: 'success',
        confirmButtonText: 'ok'
      })
       const {email}=user.user;
       const {creationTime} = user.user.metadata;
       const {lastSignInTime} = user.user.metadata;
        const userInfo = {
             fname,
             lname,
             email,
             creationTime,
             lastSignInTime
        }
       fetch("http://localhost:5000/users",{
          method : "post",
          headers:{
             "content-type" : "application/json"
          },
          body:JSON.stringify(userInfo)
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
       

       return navigate("/auth/login") 
    })
      .catch(err=>Swal.fire({
        title: 'error!',
        text: "some thing wrong",
        icon: 'error',
        confirmButtonText: 'ok'
      }))

    form.reset()
  }



  return (
    <div className="mx-12 my-12">
      <img src={booklogo} className="w-8 h-8 m-2 mx-auto" />
      <p className="text-xs text-center text-amber-700">
        Register to use our platform
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-2 md:grid-cols-2">
          <div className="mt-4">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="fname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="lname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-amber-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:amber-blue-500 dark:focus:border-amber-500"
              placeholder="•••••••••"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-amber-600 block hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        <span className='text-xs text-amber-400 inline-block'>Already have an account ?</span><Link to={"/auth/login"}><span className='text-amber-700 mx-1 text-xs underline'>Login </span></Link> 
      </form>
    </div>
  );
}
