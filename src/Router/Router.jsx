import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Page/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Components/Error/ErrorPage";
import CategoryPage from "../Page/Home/Category/CategoryPage";
import Search from "../Page/Home/Search/Search";
import SingleProduct from "../Page/Product/SingleProduct";
import Recipes from "../Page/Recipes/Recipes";

  
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
        {
            path: '/categories/:category',
            element: <CategoryPage />
        },
        {
            path: '/search',
            element: <Search />
        },
        {
            path: '/item/:id',
            element: <SingleProduct />
        },
        {
            path: '/recipes',
            element: <Recipes />
        },
      ]
    },
  ]);