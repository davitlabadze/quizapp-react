import ErrorPage from '../error-page';
import Root from "./root";
import ReactRouter from "./react";
import Vue from "./vue";
import Angular from "./angular";
import { createBrowserRouter } from 'react-router-dom';
const Router =  createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "react",
      element: <ReactRouter />,
    },
    {
      path: "vue",
      element: <Vue />,
    },
    {
      path: "angular",
      element: <Angular />,
    },
  ]);
export default Router
