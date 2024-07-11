import { JSX } from "react";
import { Link } from "react-router-dom";
import {
  AutoAwesome,
  Feature,
  Github,
  Investor,
  Twitter,
} from "../assets/icons";
import { colors } from "../constants/colors";
import TokensImg from "../assets/images/tokens.png";
import OnboardingImg from "../assets/images/onboarding.png";
import KYCImg from "../assets/images/kyc.png";
import TokenImg from "../assets/images/token.png";
import DAOImg from "../assets/images/dao.png";
import AITknsImg from "../assets/images/ai-tokenomics.png";
import GovernImg from "../assets/images/governance.png";
import "../styles/pages/about.scss";

export default function AboutReorg(): JSX.Element {
  return (
    <section id="aboutreorg">
      <div className="about_features">
        <div className="about">
          <p className="p0">
            A tokens platform for projects on the Internet Computer.
          </p>

          <p className="p1">
            reorg. <span className="tge">TGE</span>
          </p>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div
              key={feature.title + index}
              title={feature.title}
              id="_feat_base"
              className={feature.complete ? "_feat" : "_feat_incomplete"}
            >
              <Feature
                color={feature.complete ? colors.primary : colors.bluee}
              />
              {feature.title}
            </div>
          ))}
        </div>
      </div>

      <div className="for_founders_investors">
        <div className="for_founders">
          <p className="p0">
            For Founders & Startups <AutoAwesome />
          </p>
          <p className="p1">
            We help internet computer projects launch tokens easily with a sound
            token economics model. Tokens created on reorg can be swapped on
            ICPSWAP. We offer liquidity pools, a Dex and we partner with other
            Dexes to list tokens on those Dexes. Reorg DAO is a DAO of investors
            interested in outstanding ICP projects like yours. After launching
            your token, you can apply for funding from the DAO.
          </p>
        </div>

        <div className="for_investors">
          <p className="p0">
            For Investors <Investor />
          </p>
          <p className="p1">
            Discover, invest, and profit from innovative internet computer
            dApps, Protocols and DAOS. At Reorg, we provide you with
            unparalleled access to a diverse portfolio of these Web3 projects
            and allow you to invest in them by buying tokens and profit from
            their growth.
          </p>
        </div>

        <div className="growth">
          <img src={TokensImg} alt="reorg token" />
        </div>
      </div>

      <div className="how_it_works">
        <p className="p0">how it works</p>

        <div className="_steps">
          {howitworksSteps.map((step, index) => (
            <div key={step.title + index} className="_stepp">
              <p className="step_count">Step {index + 1}</p>

              <div className="title_img">
                <p>{step.title}</p>
                <img src={step.image} alt={step.text} />
              </div>

              <p className="step_desc">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="copy_contact">
        <p className="copy">&copy; reorg.</p>

        <p className="reserved">
          {new Date().getUTCFullYear()}, All Rights Reserved
        </p>

        <div className="contact">
          <Link to="https://x.com/ReorgDaos" target="_blank">
            <Twitter width={18} height={18} color={colors.bluee} />
          </Link>

          <Link to="https://github.com/TefroTech" target="_blank">
            <Github width={24} height={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}

type featuresType = {
  title: string;
  complete: boolean;
};

type howstepstype = {
  title: string;
  text: string;
  image: string;
};

const features: featuresType[] = [
  { title: "Tokens Creation", complete: true },
  {
    title: "Launchpad",
    complete: false,
  },
  { title: "AI Tokenomics", complete: false },
  { title: "Tokens Exchange", complete: false },
  {
    title: "Airdrop Mechanisms",
    complete: false,
  },
  {
    title: "DAO Systems",
    complete: false,
  },
];

const howitworksSteps: howstepstype[] = [
  {
    title: "Onboarding",
    text: "Startups seeking to leverage the benefits of DAOs can integrate with the Reorg platform through a streamlined onboarding process. Following successful onboarding, they launch their token.",
    image: OnboardingImg,
  },
  {
    title: "Proof of Existence & Identity",
    text: "Reorg employs a comprehensive due diligence process to ensure the legitimacy of startups seeking to launch tokens on our platform.",
    image: KYCImg,
  },
  {
    title: "Tokenize Ownership",
    text: "Reorg facilitates the tokenization of startups ownership structures, by, creating tokens that represent a quantifiable stake in the company.",
    image: TokenImg,
  },
  {
    title: "Operate as a DAO",
    text: "Reorg empowers startups to operate with a robust and secure governance structure. Investors holding tokens within a DAO enjoy a suite of rights, including the ability to propose amendments.",
    image: DAOImg,
  },
  {
    title: "AI Tokenomics",
    text: "Reorg's token creation platform includes an AI model trained on tokenomics. Based on the startup's business model, we can recommends an optimal tokenomics structure.",
    image: AITknsImg,
  },
  {
    title: "DAO Governance",
    text: "Investors participate in a DAO that governs the startup. This includes voting on key decisions, and aligns investor and startup interests.",
    image: GovernImg,
  },
];
