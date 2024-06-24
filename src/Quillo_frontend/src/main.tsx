import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutReorg from "./pages/about";
import { Authentication } from "./pages/auth";
import { CreateToken } from "./pages/app/token/createtoken";
import { ErrorPage } from "./pages/error";
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <AboutReorg />,
    errorElement: <ErrorPage />,
  },
  { path: "/auth/:accType", element: <Authentication /> },
  { path: "/create-token", element: <CreateToken /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
