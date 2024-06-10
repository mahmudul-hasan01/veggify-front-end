import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Page/Home/Home";
import MainLayout from "../MainLayout/MainLayout";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home />
        },
      ]
    },
  ]);