import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Details from "../Components/Services/Details";
import PostReview from "../Components/Services/PostReview";
import Review from "../Components/Services/Review";
import Services from "../Components/Services/Services";
import Signup from "../Components/Signup/Signup";
import LoginLayout from "../Layouts/LoginLayout";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRoute";

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
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ah-travels-server-site.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/review/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(
            `https://ah-travels-server-site.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/reviews",
        element: <PostReview></PostReview>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
