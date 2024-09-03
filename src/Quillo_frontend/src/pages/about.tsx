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
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Launch, Trade and scale tokens seamlessly across multiple blockchains
           
            </h1>
            <p className="font-jozi text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              <button className="md:px-12  px-8 py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
                Apply for TGE
              </button>
            </Link>
            <Link to="/tokens">
              <button className="md:px-12 px-4 py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
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
                  <Link to="/tokens">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Token creator</span>
                  
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>More of Reorg</h4>
              <ul>
                {/* <TermsOfService/> */}
                <li>
                  <Link to="/TermsOfServices">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Terms of service</span>
                  </Link>
                </li>
                <li>
                  <Link to="/WhitePaper">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Whitepaper</span>                  
                  </Link>
                </li>
                <li>
                  <Link to="/comingSoon">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Launchpad</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Roadmap">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Roadmap</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Blog</span>
                  </Link>
                </li>
                <li>
                  <Link to="/comingSoon">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Delegate</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="flex space-x-4 mt-4 md:mt-0">
                    
        
                  <a href="https://twitter.com/ReorgDaos" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-50 hover:text-amber-500">
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M24 4.557a9.993 9.993 0 01-2.828.775A4.932 4.932 0 0023.338 3a9.865 9.865 0 01-3.127 1.195 4.923 4.923 0 00-8.38 4.482A13.966 13.966 0 011.671 3.149a4.923 4.923 0 001.524 6.573 4.896 4.896 0 01-2.228-.616c-.054 2.283 1.579 4.415 3.925 4.89a4.897 4.897 0 01-2.224.084c.626 1.956 2.444 3.379 4.6 3.419A9.878 9.878 0 010 19.54a13.939 13.939 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.424 0-.22-.005-.437-.014-.653A10.224 10.224 0 0024 4.557z" />
                   </svg>
                    X
                  </a>
                
               
                  <a href="https://github.com/reorg-icp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-blue-50 hover:text-amber-500"> 

                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.302 3.492.996.108-.775.418-1.302.762-1.602-2.665-.305-5.466-1.337-5.466-5.948 0-1.314.47-2.387 1.24-3.23-.124-.304-.537-1.527.118-3.181 0 0 1.01-.323 3.3 1.233a11.52 11.52 0 013.007-.404c1.02.004 2.048.137 3.007.404 2.29-1.556 3.3-1.233 3.3-1.233.656 1.654.244 2.877.12 3.181.77.843 1.24 1.916 1.24 3.23 0 4.62-2.803 5.64-5.473 5.938.43.371.824 1.104.824 2.228 0 1.609-.014 2.908-.014 3.302 0 .32.218.694.824.577C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
                 </svg>        
                    GitHub
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
