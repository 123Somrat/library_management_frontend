import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/Home/AddBook/AddBook";





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
        }
      ]
    },
  ]);

  export default router;