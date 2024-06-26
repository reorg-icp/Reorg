import { JSX, Dispatch, SetStateAction } from "react";
import { sectionType } from "../../pages/about";
import { ArrowLeft, ArrowRight } from "../../assets/icons";

interface controlsprops {
  currSection: sectionType;
  setCurrSection: Dispatch<SetStateAction<sectionType>>;
}

export const Controls = ({
  currSection,
  setCurrSection,
}: controlsprops): JSX.Element => {
  const onGoToNext = (): void => {
    if (currSection == "about") setCurrSection("daos");
    if (currSection == "daos") setCurrSection("fraqs");
    if (currSection == "fraqs") setCurrSection("about");
  };

  const onGoToPrev = (): void => {
    if (currSection == "daos") setCurrSection("about");
    if (currSection == "fraqs") setCurrSection("daos");
    if (currSection == "about") setCurrSection("fraqs");
  };

  return (
    <div className="controls">
      <button className="getstarted">Get Started</button>

      <span>
        <button className="prevbtn" onClick={onGoToPrev}>
          <ArrowLeft />
        </button>

        <button className="nextbtn" onClick={onGoToNext}>
          {currSection == "about"
            ? "Reorg Dao ?"
            : currSection == "daos"
            ? "FAQs"
            : "About Reorg"}
          <ArrowRight />
        </button>
      </span>
    </div>
  );
};
