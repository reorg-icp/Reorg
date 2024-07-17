import { JSX } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ChevronLeft } from "../assets/icons";
import { colors } from "../constants/colors";
import "../styles/pages/errorpage.scss";

export default function ComingSoon(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  return (
    <section className="errorpage">
      <p>This feature is coming soon!</p>

      <button title="Go Back" onClick={() => navigate(-1)}>
        <ChevronLeft color={colors.primary} /> GO Back
      </button>
    </section>
  );
}