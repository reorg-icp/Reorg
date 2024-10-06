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
// import PartA from "../components/sections/partA";
// import FAQSection from "../components/sections/FAQSection";
import FeatureCards from "../components/ howItworks/featuresCard";
import { features } from "../utils/howItworksFeatures";
// import WhyReorg from "../components/WhyReorg";
import Animation from "../components/Animation";
import JoinCommunity from "../components/JoinCommunity";
// import TestimonialCarousel from "../components/Reviews";

export default function AboutReorg(): JSX.Element {
  const colors = {
    primary: "#50C878",
    bluee: "#ffff",
  };

  return (
    <section id="aboutreorg">
      <div className="md:mt-12 mt-8 w-full  py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Where gamers and collectors unite
           
            </h1>
            <p className="font-jozi text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tokenize, Trade, and {" "}
              <span className="font-semibold text-yellow-300"> own</span>,{" "} the {" "}
              <span className="font-semibold text-yellow-300">
                 assets
              </span>{" "}
          that define your play
            </p>
          </div>
<Animation/>
          <div className="mt-12 flex flex-row justify-center  md:gap-8 items-center space-x-2 sm:space-x-2">
            <Link to="/token">
              <button className="md:px-12  px-8 py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-emerald-900 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
            I'm a game developer
              </button>
            </Link>
            <Link to="/market">
              <button className="md:px-12 px-4 py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-emerald-900 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1">
           I'm a collector
              </button>
            </Link>
          </div>
        </div>
      </div>

      <FeatureCards features={features} colors={colors} />
      <JoinCommunity/>
{/* meet the delegates  */}
      {/* <PartA /> */}
      {/* why reorg sllyder */}
      {/* <WhyReorg /> */}
      {/* <FAQSection /> */}
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
                  <Link to="/token">
                  <span
                  className="text-blue-50 hover:text-amber-500"
                  >Tokenize game</span>
                  
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
                 
                    X
                  </a>
                
               
                  <a href="https://github.com/reorg-icp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-blue-50 hover:text-amber-500"> 

                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                   <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.304 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.302 3.492.996.108-.775.418-1.302.762-1.602-2.665-.305-5.466-1.337-5.466-5.948 0-1.314.47-2.387 1.24-3.23-.124-.304-.537-1.527.118-3.181 0 0 1.01-.323 3.3 1.233a11.52 11.52 0 013.007-.404c1.02.004 2.048.137 3.007.404 2.29-1.556 3.3-1.233 3.3-1.233.656 1.654.244 2.877.12 3.181.77.843 1.24 1.916 1.24 3.23 0 4.62-2.803 5.64-5.473 5.938.43.371.824 1.104.824 2.228 0 1.609-.014 2.908-.014 3.302 0 .32.218.694.824.577C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
                 </svg>        
                
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
