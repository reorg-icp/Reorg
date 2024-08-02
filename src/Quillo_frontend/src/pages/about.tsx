import { JSX } from "react";
import { Link } from "react-router-dom";

import { AutoAwesome, Feature, Investor } from "../assets/icons";
import { colors } from "../constants/colors";

// import OnboardingImg from "../assets/images/onboarding.png";
// import KYCImg from "../assets/images/kyc.png";
// import TokenImg from "../assets/images/token.png";
// import DAOImg from "../assets/images/dao.png";
// import AITknsImg from "../assets/images/ai-tokenomics.png";
// import GovernImg from "../assets/images/governance.png";
import "../styles/pages/about.scss";
import PartA from "../components/sections/partA";
import FAQSection from "../components/sections/FAQSection";
// import TestimonialCarousel from "../components/Reviews";

export default function AboutReorg(): JSX.Element {
  return (
    <section id="aboutreorg">
 <div className="md:mt-12 mt-8 w-full  py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
        Launch your token with{" "}
        <span className="text-blue-400">confidence</span> on the best{" "}
        <span className="text-green-400">token generation</span> event platform
      </h1>
      <p className="font-joz text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Join our platform for{" "}
        <span className="font-semibold text-yellow-300">secure</span>,{" "}
        <span className="font-semibold text-yellow-300">expert-backed</span>{" "}
        token generation events
      </p>
    </div>

    <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <Link to="/app/token">
        <button className="w-64 sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
          Launch Token
        </button>
      </Link>
      <Link to="/tokens">
        <button className="w-64 sm:w-auto px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
          Tokens
        </button>
      </Link>
    </div>
  </div>
</div>

      <div className="">
        <h1 className=" mb-6 md:mb-12 font-jost text-4xl text-center space-y-8 font-extrabold  text-white tracking-tight leading-tight">How it works </h1>
        <div className="features">
        {features.map((feature, index) => (
          <div
            key={feature.title + index}
            title={feature.title}
            className={`feature-card ${
              feature.complete ? "complete" : "incomplete"
            }`}
          >
            <div className="feature-icon">
              <Feature
                color={feature.complete ? colors.primary : colors.bluee}
              />
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.content}</p>
            </div>
            <div className="feature-status">
              {feature.complete ? (
                <span className="status complete">Complete</span>
              ) : (
                <span className="status incomplete">Incomplete</span>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>


      <div className="mt-4 md:mt-12">
        <h1 className="font-jost text-4xl text-center space-y-8 font-extrabold  text-white tracking-tight leading-tight">Why Reorg?</h1>
        <div className="for_founders_investors ">
        <div className="for_founders">
          <p className="p0">
            Launch multichain tokens
            <AutoAwesome />
          </p>
          <p className="p1">Launch ICRC and EVM based tokens</p>
        </div>

        <div className="for_founders">
          <p className="p0">
            Trading & Liquidity
            <AutoAwesome />
          </p>
          <p className="p1">Create liquidity pools</p>
        </div>

        <div className="for_founders">
          <p className="p0">
            Funding Potential
            <AutoAwesome />
          </p>
          <p className="p1">
            Get funding for your project through our launchpad.
          </p>
        </div>

        <div className="for_investors">
          <p className="p0">
            For Investors <Investor />
          </p>
          <p className="p1">Invest in innovative projects</p>
        </div>
      </div>
      </div>
     
      <PartA />
      <FAQSection />
      {/* <TestimonialCarousel /> */}
      {/* <div className="how_it_works">
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
      </div> */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p className="copy">&copy; {new Date().getUTCFullYear()} Reorg</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/token">Deploy Token</Link>
                </li>
                <li>
                  <Link to="/comingSoon">Liquidity pools</Link>
                </li>
                <li>
                  <Link to="/comingSoon">Launchpad</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>More of Reorg</h4>
              <ul>
                <li>
                  <Link to="/comingSoon">Terms of service</Link>
                </li>
                <li>
                  <Link to="/comingSoon">Whitepaper</Link>
                </li>
                <li>
                  <Link to="/comingSoon">Launchpad</Link>
                </li>
                <li>
                  <Link to="/comingSoon">Roadmap</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="https://x.com/ReorgDaos" target="_blank">
                    X
                  </a>
                </li>
                <li>
                  <a href="https://github.com/TefroTech" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

type featuresType = {
  title: string;
  complete: boolean;
  content: string;
};

// type howstepstype = {
//   title: string;
//   text: string;
//   image: string;
// };

const features: featuresType[] = [
  {
    title: "Token Creation",
    complete: true,
    content: "Create ICRC and ERC compatible tokens powered by chainfusion",
  },
  {
    title: "Liquidity pools",
    complete: false,
    content: "Create liquidity pools by locking a token pair",
  },
  {
    title: "Launchpad",
    complete: false,
    content: "Get funding through our launchpad",
  },
  {
    title: "AI powered tokenomics",
    complete: false,
    content: "AI powered economic engineering",
  },
  
];

// const howitworksSteps: howstepstype[] = [
//   {
//     title: "Onboarding",
//     text: "Startups seeking to leverage the benefits of DAOs can integrate with the Reorg platform through a streamlined onboarding process. Following successful onboarding, they launch their token.",
//     image: OnboardingImg,
//   },
//   {
//     title: "Proof of Existence & Identity",
//     text: "Reorg employs a comprehensive due diligence process to ensure the legitimacy of startups seeking to launch tokens on our platform.",
//     image: KYCImg,
//   },
//   {
//     title: "Tokenize Ownership",
//     text: "Reorg facilitates the tokenization of startups ownership structures, by, creating tokens that represent a quantifiable stake in the company.",
//     image: TokenImg,
//   },
//   {
//     title: "Operate as a DAO",
//     text: "Reorg empowers startups to operate with a robust and secure governance structure. Investors holding tokens within a DAO enjoy a suite of rights, including the ability to propose amendments.",
//     image: DAOImg,
//   },
//   {
//     title: "AI Tokenomics",
//     text: "Reorg's token creation platform includes an AI model trained on tokenomics. Based on the startup's business model, we can recommends an optimal tokenomics structure.",
//     image: AITknsImg,
//   },
//   {
//     title: "DAO Governance",
//     text: "Investors participate in a DAO that governs the startup. This includes voting on key decisions, and aligns investor and startup interests.",
//     image: GovernImg,
//   },
// ];
