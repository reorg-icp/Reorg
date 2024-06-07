import { motion } from 'framer-motion';
import { useState } from 'react';

const benefits = [
  {
    title: "Access global capital markets",
    description: "Expand your reach to global investors and unlock new capital sources."
  },
  {
    title: "Increase transparency and trust",
    description: "Enhance transparency with blockchain technology and build trust with your stakeholders."
  },
  {
    title: "Enable decentralized governance",
    description: "Empower your community with decentralized governance and decision-making."
  },
  {
    title: "Enhance liquidity for investors",
    description: "Provide liquidity for your investors through tokenized assets."
  },
  {
    title: "Automate processes with smart contracts",
    description: "Streamline operations with automated smart contracts, reducing manual intervention."
  }
];

const WhyTurnYourStartupIntoDAO = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);

  return (
    <section id="why-dao" className="w-full relative container">
      <div className="container mx-auto relative z-10 flex flex-col justify-center items-center h-full">
        <h2 className="text-3xl lg:text-5xl font-bold mb-12  text-center">
          Why Turn Your Startup into a DAO?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`container p-8 rounded-lg shadow-lg transition-all duration-300 ${
                selectedBenefit === index ? 'transform scale-105' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedBenefit(index)}
            >
              <h3 className="text-xl font-bold mb-4 text-emerald-500">{benefit.title}</h3>
              <p className="text-lg ">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {selectedBenefit !== null && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8 bg-gray-800 rounded-t-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-500">
              {benefits[selectedBenefit].title}
            </h3>
            <p className="text-lg text-gray-300">
              {benefits[selectedBenefit].description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhyTurnYourStartupIntoDAO;
