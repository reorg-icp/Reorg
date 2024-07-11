import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface props {
  children: ReactNode;
}

const Private = ({ children }: props) => {
  const principalId: string | null = localStorage.getItem("principal");

  if (!principalId) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default Private;
