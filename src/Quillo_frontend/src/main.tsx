import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackBarProvider } from "./context/snackbarctx";
import AboutReorg from "./pages/about";
import Authentication from "./pages/auth";
import CreateToken from "./pages/app/token/createtoken";
import Private from "./pages/Private";
import Tokenize from "./pages/app/token/Tokenize";
import ErrorPage from "./pages/error";
import "./styles/index.scss";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <AboutReorg />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/auth/:accType",
      element: <Authentication />,
    },
    {
      path: "/create-token",
      element: (
        <Private>
          <CreateToken />
        </Private>
      ),
    },
    {
      path: "/tokenize",
      element: (
        <Private>
          <Tokenize />
        </Private>
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <SnackBarProvider>
        <RouterProvider router={router} />
      </SnackBarProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
