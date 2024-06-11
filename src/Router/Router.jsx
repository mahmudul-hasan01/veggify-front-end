import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Page/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Components/Error/ErrorPage";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home />
        },
      ]
    },
  ]);