import { ReactNode, useEffect } from "react";

import { Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Private = ({ children }: Props) => {
  const navigate = useNavigate();
  const principalId: string | null = localStorage.getItem("principal");
  useEffect(() => {
    setTimeout(() => {
      if (!principalId) {
        return navigate("/");
      }
    }, 1500);
  }, [localStorage.getItem("principal")]);

  if (!principalId) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Alert
          severity="error"
          style={{
            background: "linear-gradient(180deg, #004D40 0%, #00251A 100%)",
            color: "#ffffff",
          }}
        >
          <AlertTitle>Wallet Connection Required</AlertTitle>
          Oops! 🚀 Your wallet isn't connected.{" "}
          <strong>Connect your wallet and try again.</strong>
        </Alert>
      </div>
    );
  }

  return <>{children}</>;
};

export default Private;
