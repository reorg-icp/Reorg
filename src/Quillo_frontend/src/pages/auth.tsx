import { JSX } from "react";
import { useParams } from "react-router-dom";

export const Authentication = (): JSX.Element => {
  const { accType } = useParams<{ accType?: string }>();

  return <div>auth {accType}</div>;
};
