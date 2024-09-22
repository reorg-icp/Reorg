import { useState } from "react";
import Accordion_Feature from "./Features/Accordion";
import "../../styles/components/FAQ.scss";
import { faqData } from "../../utils/FAQ";

const FAQSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = faqData.length;

  const handleViewMore = () => {
    if (visibleIndex + itemsPerPage < totalItems) {
      setVisibleIndex(visibleIndex + itemsPerPage);
    } else {
      // Restart from the beginning
      setVisibleIndex(0);
    }
  };

  return (
    <div className="faq-section p-4 rounded-lg">
      <div className="accordion-title mb-4 font-leagueSpartan">
        <h1 className="text-2xl font-bold text-gray-800 pt-2">Frequently Asked Questions</h1>
      </div>
      <div className="space-y-4">
        {faqData.slice(visibleIndex, visibleIndex + itemsPerPage).map((faq, index) => (
          <div
            key={index}
            className="transition transform duration-500 ease-in-out origin-top accordion-feature"
          >
            <Accordion_Feature title={faq.question} content={faq.answer} />
          </div>
        ))}
      </div>
      <div className="flex justify-start mt-6">
        <button
          onClick={handleViewMore}
          className="px-4 py-2 font-semibold text-white bg-emerald-900 rounded-full shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 font-leagueSpartan rounded-lg  transition duration-300"
        >
          {visibleIndex + itemsPerPage >= totalItems ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
