import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import ShowBooks from "../Pages/Home/ShowBooks/ShowBooks";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/showbooks",
        element: <ShowBooks></ShowBooks>,
      },
      {
        path: "/updatebook/:id",
        element: <UpdateBook></UpdateBook>,
      },
    ],
  },
]);
