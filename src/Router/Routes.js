import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Details from "../Components/Services/Details";
import Services from "../Components/Services/Services";
import Signup from "../Components/Signup/Signup";
import LoginLayout from "../Layouts/LoginLayout";
import Main from "../Layouts/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        element: <Details></Details>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
