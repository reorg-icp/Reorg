import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutReorg from "./pages/about";
import { Authentication } from "./pages/auth";
import CreateToken from "./pages/app/token/createtoken";
import { ErrorPage } from "./pages/error";
import WalletPopup from "./components/Wallet"; // Import WalletPopup component
import Private from "./pages/Private";
import Tokenize from "./pages/app/token/Tokenize";
import "./styles/index.scss";

const App = () => {
  const [principal, setPrincipal] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [_, setshowPurchasePopUp] = useState(false);

  const handleConnectWallet = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePurchasePopup = () => {
    setshowPurchasePopUp(true);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <AboutReorg />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/auth/:accType",
      element: <Authentication handleConnectWallet={handleConnectWallet} />,
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
      <RouterProvider router={router} />
      {showPopup && (
        <WalletPopup
          principal={principal}
          setPrincipal={setPrincipal}
          onClose={handleClosePopup}
          handlePurchasePopup={handlePurchasePopup}
        />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
