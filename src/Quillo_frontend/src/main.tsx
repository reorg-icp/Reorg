import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackBarProvider } from "./context/snackbarctx";
import { AuthDrawerProvider } from "./context/authdrawerctx";
import AboutReorg from "./pages/about";
import Authentication from "./pages/auth";
import ErrorPage from "./pages/error";
import { Layout } from "./components/global/Layout";
import "./styles/index.scss";

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", index: true, element: <AboutReorg /> },
        { path: "/auth/:accType", element: <Authentication /> },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <SnackBarProvider>
        <AuthDrawerProvider>
          <RouterProvider router={router} />
        </AuthDrawerProvider>
      </SnackBarProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
