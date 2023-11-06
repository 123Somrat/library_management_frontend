import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/Home/AddBook/AddBook";
import ShowBookDetails from "../Pages/ShowBookDetails/ShowBookDetails"
import Login from "../Pages/Login/Login";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children : [ 
        {
            path:"/",
            element:<Home/>,
          
        },
        {
        path:"/addBook",
        element:<AddBook/>
        },
        {
         path:"/bookdetails/:id",
         element:<ShowBookDetails/>,
         loader : ({params})=>fetch(`http://localhost:5000/bookdetails/${params.id}`)
        },{
          path:"/auth/login",
          element :<Login/>
        }
      ]
    },
  ]);

  export default router;