import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutReorg from "./pages/about";
import { Authentication } from "./pages/auth";
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
