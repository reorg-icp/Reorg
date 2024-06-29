import { JSX } from "react";
import { useParams } from "react-router-dom";
import GetStartedBusiness from "./app/getStarted/Business";

import { ErrorPage } from "./error";

export const Authentication = ({
  handleConnectWallet,
}: {
  handleConnectWallet: () => void;
}): JSX.Element => {
  const { accType } = useParams<{ accType?: string }>();
  if (accType === "wallet") {
    return <GetStartedBusiness handleConnectWallet={handleConnectWallet} />;
  } else {
    return <ErrorPage />;
  }
};
