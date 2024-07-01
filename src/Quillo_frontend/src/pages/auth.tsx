import { JSX } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./error";
import BusinessOnboarding from "./app/onboarding/business";
import InvestorOnboarding from "./app/onboarding/investor";

type accType = "business" | "investor";

export default function Authentication(): JSX.Element {
  const { accType } = useParams<{ accType?: accType }>();

  if (accType == "business") {
    return <BusinessOnboarding />;
  } else if (accType == "investor") {
    return <InvestorOnboarding />;
  } else {
    return <ErrorPage />;
  }
}
