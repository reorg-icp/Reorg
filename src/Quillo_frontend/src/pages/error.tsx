import { JSX } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ChevronLeft } from "../assets/icons";
import { colors } from "../constants/colors";
import "../styles/pages/errorpage.scss";

export default function ErrorPage(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  return (
    <section className="errorpage">
      <p>Oops !</p>
      <p>Sorry, an unexpected error occurred !</p>

      <button title="Go Back" onClick={() => navigate(-1)}>
        <ChevronLeft color={colors.primary} /> GO Back
      </button>
    </section>
  );
}
