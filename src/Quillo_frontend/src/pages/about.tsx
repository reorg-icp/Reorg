import { JSX } from "react";
import { Link } from "react-router-dom";

// import { colors } from "../constants/colors";

// import OnboardingImg from "../assets/images/onboarding.png";
// import KYCImg from "../assets/images/kyc.png";
// import TokenImg from "../assets/images/token.png";
// import DAOImg from "../assets/images/dao.png";
// import AITknsImg from "../assets/images/ai-tokenomics.png";
// import GovernImg from "../assets/images/governance.png";
import "../styles/pages/about.scss";
import PartA from "../components/sections/partA";
import FAQSection from "../components/sections/FAQSection";
import FeatureCards from "../components/ howItworks/featuresCard";
import { features } from "../utils/howItworksFeatures";
import WhyReorg from "../components/WhyReorg";
// import TestimonialCarousel from "../components/Reviews";

export default function AboutReorg(): JSX.Element {
  const colors = {
    primary: "#00ff00",
    bluee: "#0000ff",
  };

  return (
    <section id="aboutreorg">
      <div className="md:mt-12 mt-8 w-full  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Launch, Trade and scale tokens seamlessly across multiple blockchains
           
            </h1>
            <p className="font-joz text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our platform for{" "}
              <span className="font-semibold text-yellow-300"> a secure</span>,{" "}
              <span className="font-semibold text-yellow-300">
                expert-backed
              </span>{" "}
              token generation event, multichain DEX and expert-backed launchpad.
            </p>
          </div>

          <div className="mt-12 flex flex-row justify-center  md:gap-8 items-center space-x-2 sm:space-x-2">
            <Link to="apply">
              <button className="px-8 sm:px-6 md:px-8 py-4 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
                Apply for TGE
              </button>
            </Link>
            <Link to="/tokens">
              <button className="px-12 sm:px-6 md:px-8 py-4 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
                Upcoming tokens
              </button>
            </Link>
          </div>
        </div>
      </div>

      <FeatureCards features={features} colors={colors} />

      <PartA />
      <WhyReorg />
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
              <h4>Tools</h4>
              <ul>
                <li>
                  <Link to="/tokens">Token creator</Link>
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
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/comingSoon">Delegate</Link>
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
                  <a href="https://github.com/reorg-icp" target="_blank">
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
