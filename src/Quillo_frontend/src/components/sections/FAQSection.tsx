
import Accordion_Feature from './Features/Accordion';
import "../../styles/components/FAQ.scss"
const FAQSection = () => {
    const faqData = [
        {
          question: 'What is a multichain token launch?',
          answer: 'A multichain token launch involves launching a token that is compatible with multiple blockchain networks, such as ICRC and EVM.'
        },
        {
          question: 'How do I get started with Reorg?',
          answer: 'You can get started by signing up on our platform and following the onboarding process to launch your token.'
        },
        {
          question: 'How does Reorg support trading and liquidity?',
          answer: 'Our platform allows for the creation of liquidity pools, enhancing the trading experience and providing ample liquidity for token projects.'
        },
        // {
        //   question: 'What funding opportunities are available through Reorg?',
        //   answer: 'Through our launchpad, projects can secure the necessary funding to thrive and innovate.'
        // },
        {
          question: 'What investor opportunities does Reorg offer?',
          answer: 'Reorg offers investors the chance to invest in cutting-edge and innovative projects, opening doors to new possibilities.'
        }
      ];
      

  return (
    <div className="faq-section">
          <div className="accordion-title">
        <h1>Frequently Asked Questions</h1>
      </div>
      {faqData.map((faq, index) => (
        <Accordion_Feature key={index} title={faq.question} content={faq.answer} />
      ))}
    </div>
  );
}

export default FAQSection;
