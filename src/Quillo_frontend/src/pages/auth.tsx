import { JSX } from "react";
import { useParams } from "react-router-dom";

export type accType = "business" | "investor";
export type bnsAccSteps = "signin" | "companyinfo" | "address" | "foundersinfo";

export default function Authentication(): JSX.Element {
  const { accType } = useParams<{ accType?: accType }>();

  return (
    <section id="authentication">
      <p>Authentication {accType}</p>
    </section>
  );
}
