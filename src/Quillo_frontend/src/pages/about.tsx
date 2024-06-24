import { JSX, useState } from "react";
import { Intro } from "../components/about/Intro";
import { Daos } from "../components/about/Daos";
import { Faqs } from "../components/about/Faqs";
import { HowItWorks } from "../components/about/HowItWorks";
import { Controls } from "../components/about/Controls";
import "../styles/pages/about.scss";

export type sectionType = "about" | "daos" | "fraqs";

export default function AboutReorg(): JSX.Element {
  const [currSection, setCurrSection] = useState<sectionType>("about");

  return (
    <section id="aboutreorg">
      <div className="c01">
        <p className="reorg">reorg.</p>

        {currSection == "about" && <Intro />}
        {currSection == "daos" && <Daos />}
        {currSection == "fraqs" && <Faqs />}

        <Controls currSection={currSection} setCurrSection={setCurrSection} />
      </div>

      <div className="c02">
        <HowItWorks />
      </div>
    </section>
  );
}
