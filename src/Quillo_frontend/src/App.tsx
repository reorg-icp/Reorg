import { About } from "./components/About";

import { FAQ } from "./components/FAQ";

import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";

import { ScrollToTop } from "./components/ScrollToTop";
import Sponsors from "./components/Sponsors";

import { LaunchBanner } from "./components/ui/banner";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <LaunchBanner />
      <Hero />
         <About />
      <Sponsors />
   
      <HowItWorks />
 

    
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
