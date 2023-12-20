import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ShowBookDetails from "../Pages/ShowBookDetails/ShowBookDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";
import ReadingBook from "../Pages/ReadingBook/ReadingBook";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import AddBook from "../Pages/AddBook/AddBook";
import Spaces from "../Pages/Spaces/Spaces";
import RequestBook from "../Pages/RequestBook/RequestBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookdetails/:id",
        element: (
          <PrivateRoute>
            <ShowBookDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bookdetails/${params.id}`),
      },
      {
        path: "/readbook/:id",
        element: <ReadingBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/readbook/${params.id}`),
      },
      {
        path: "/borrowedBook",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
        //loader : () =>
      },
      {
        path: "/space",
        element: (
          <PrivateRoute>
            <Spaces />
          </PrivateRoute>
        ),
      },
      {
        path: "/requestbook",
        element: (
          <PrivateRoute>
            <RequestBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/requestbook",
        element: <h1>Comeing Soon,Stay Tune</h1>,
      },
      {
        path: "auth/register",
        element: <Register />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
