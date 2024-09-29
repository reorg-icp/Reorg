import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { SnackBarProvider } from "./context/snackbarctx";
import { AuthDrawerProvider } from "./context/authdrawerctx";
import AboutReorg from "./pages/about";
import Authentication from "./pages/auth";
import ErrorPage from "./pages/error";
import { Layout } from "./components/global/Layout";
import "./styles/index.scss";
import Private from "./components/auth/Private";
import { HomePage } from "./pages/home";
// import Register from "./pages/register";
import ComingSoon from "./pages/comingSoon";
import Tokens from "./pages/Tokens";
// import KYC from "./pages/Kyc";
import Dex from "./pages/Dex";

import Pool from "./pages/Pool";
import Articles from "./pages/Blog/Articles";
import Article from "./pages/Blog/Article";
import SinglePool from "./pages/Pool/SinglePool";
import SingleBlogPost from "./pages/Blog/SingleBlogPost";
import BlogsPosts from "./pages/Blog";
import TermsOfService from "./pages/TermsOfService";
import WhitePaper from "./pages/WhitePaper";
import Roadmap from "./pages/Roadmap";
import KYC from "./pages/Kyc";
import Register from "./pages/register";
import Marketplace from "./pages/MarketPlace";
import BuyNowPage from "./pages/MarketPlace/BuyNowPage";
import CheckoutPage from "./pages/MarketPlace/CheckOutPage";
import TokenLaunchSuccessWrapper from "./pages/DeveloperLaunch/LaunchSuccessWrapper";

// import KYC from "./pages/Kyc";
 
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
          path: "/launch-success",
          element: <TokenLaunchSuccessWrapper/>
           
        },
        {
          path: "/market",
          element: <Marketplace />,
        },
        {
          path: "/Buy/:id",
          element: <BuyNowPage />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage/>,
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
          path:'singleblog/:slug',
          element:<SingleBlogPost />
         },
         {
          path:'/blogposts',
          element:<BlogsPosts />
         },
         
         {
          path:'/TermsOfServices',
          element:<TermsOfService />
         },
         {
          path:'/WhitePaper',
          element:<WhitePaper />
         },
         {
          path:'/Roadmap',
          element:<Roadmap />
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
