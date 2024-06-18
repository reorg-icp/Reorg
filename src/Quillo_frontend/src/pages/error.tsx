import { JSX } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ChevronLeft } from "../assets/icons";
import "../styles/pages/errorpage.scss";

export const ErrorPage = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <section className="errorpage">
      <p>Oops !</p>
      <p>Sorry, an unexpected error occurred !</p>

      <button title="Go Back" onClick={() => navigate(-1)}>
        <ChevronLeft /> GO Back
      </button>
    </section>
  );
};
