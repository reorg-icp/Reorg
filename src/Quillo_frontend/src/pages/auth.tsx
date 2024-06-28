import { JSX } from "react";
import { useParams } from "react-router-dom";
import GetStartedBusiness from "./app/getStarted/Business";
import GetStartedInvestor from "./app/getStarted/Investor";
import { ErrorPage } from "./error";

export const Authentication = ({handleConnectWallet}:{ handleConnectWallet: () => void }): JSX.Element => {
  const { accType } = useParams<{ accType?: string }>();
if(accType==="business"){
  return <GetStartedBusiness handleConnectWallet={handleConnectWallet}/>
}
if(accType==="investor"){

return <GetStartedInvestor/>
}
else {
  return <ErrorPage/>
}

};
