import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Reorg?",
    answer:
      "Reorg is a platform that facilitates the creation and operation of Tokenized Decentralized Autonomous Organizations (DAOs). We empower startups to tokenize their ownership and assets, allowing them to raise funds from a global pool of investors and operate with transparent and democratic governance.",
    value: "item-1",
  },
  {
    question: "How does Reorg work?",
    answer:
      "Startups apply to have their ownership tokenized into NFTs (Non-Fungible Tokens) on the Reorg platform. These tokens represent ownership and are sold to investors, who become members of a DAO governing the startup. Through this DAO, investors can participate in decision-making processes, ensuring transparent and decentralized governance.",
    value: "item-2",
  },
  {
    question: "What are Tokenized DAOs?",
    answer:
      "Tokenized DAOs combine the principles of Decentralized Autonomous Organizations (DAOs) with asset tokenization. They allow stakeholders to govern, manage, and tokenize assets in a decentralized and transparent manner. Tokenized DAOs enable the creation of tokenized ownership structures, providing increased liquidity, accessibility, and programmability to traditional assets.",
    value: "item-3",
  },
  {
    question: "What is the Reorg token?",
    answer:
      "The Reorg token is the native token of our platform. It is used for various purposes, including applying for tokenization, governance within DAOs, and facilitating transactions on the platform. Reorg tokens can be traded on supported exchanges.",
    value: "item-4",
  },
  {
    question: "How can a startup apply for tokenization on Reorg?",
    answer:
      "Startups need to acquire Reorg tokens and use them to submit an application for tokenization. Once approved, the startup's ownership is converted into NFTs that can be sold to investors.",
    value: "item-5",
  },
  {
    question: "What are the benefits of tokenizing a startup on Reorg?",
    answer:
      "Tokenizing a startup on Reorg allows for efficient fundraising by selling ownership tokens to a global pool of investors. It also provides a transparent and democratic governance structure through a DAO, where investors can contribute to important decisions.",
    value: "item-6",
  },
  {
    question:
      "What criteria do startups need to meet to get approved for tokenization on Reorg?",
    answer:
      "The specific criteria for approval will be outlined in our application guidelines, which typically include factors such as the viability of the business model, the potential for growth, and the team’s track record.",
    value: "item-7",
  },
  {
    question: "What rights do I get as an investor?",
    answer:
      "As an investor, you become a member of the startup’s DAO on Reorg. This grants you voting rights on key decisions affecting the startup, allowing you to have a direct impact on its governance and strategic direction.",
    value: "item-8",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:kariukiamschel9@gmail.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
