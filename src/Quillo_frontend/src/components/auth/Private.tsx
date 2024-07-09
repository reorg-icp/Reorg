// import { Navigate } from "react-router-dom";
import { Auth, useAuthStore } from "../../store";

const Private = ({ children }: any) => {
  const { principal, accountId } = useAuthStore((state: Auth) => state);

  // If accessToken doesn't exist, redirect to login
  if (!principal || !accountId) {
    // return <Navigate to="/auth/wallet" />;
  }

  return <>{children}</>;
};

export default Private;
