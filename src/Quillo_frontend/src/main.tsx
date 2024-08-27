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
import Private from "./components/auth/Private";
import { HomePage } from "./pages/home";
import Register from "./pages/register";
import ComingSoon from "./pages/comingSoon";
import Tokens from "./pages/Tokens";
import KYC from "./pages/Kyc";
import Dex from "./pages/Dex";

import Pool from "./pages/Pool";
import Articles from "./pages/Blog/Articles";
import Article from "./pages/Blog/Article";
import SinglePool from "./pages/Pool/SinglePool";

const App = (): JSX.Element => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", index: true, element: <AboutReorg /> },
        {
          path: "/app",
          element: <HomePage />,
        },
        {
          path: "/app/token",
          element: (
            <Private>
              <Register />
            </Private>
          ),
        },
        {
          path: "/tokens",
          element: <Tokens />,
        },
        {
          path: "/apply",
          element: <KYC />,
        },
        {
          path:"/dex",
          element:<Dex/>
        },
        {
          path:"/pool"  ,
          element:< Pool/>
         },  
        {
          path:"/pool/details/:id"  ,
          element:< SinglePool/>
         },  
         {
          path: "/blog",
          element: <Articles/>,
        },
        {
          path: "/blog/:slug",
          element: <Article/>,
        },
 
        {
          path: "/comingSoon",
          element: <ComingSoon />,
        },
        {
          path: "/auth/:accType",
          element: (
            <Private>
              <Authentication />
            </Private>
          ),
        },
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
