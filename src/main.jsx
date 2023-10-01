import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import ReactRouter from "./routes/react";
import Vue from "./routes/vue";
import Angular from "./routes/angular";
import "./index.css";
import Dashboard from "./routes/dashboard.";
import Javascript from "./routes/javascript";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "javascript",
        element: <Javascript />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
