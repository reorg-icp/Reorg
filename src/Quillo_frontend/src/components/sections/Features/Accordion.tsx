import { useState } from 'react';
import '../../../styles/components/Accordion.scss';

type Prop = {
  title: string;
  content: string;
}

const Accordion_Feature = ({ title, content }: Prop) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="accordion">
    
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span className={`arrow  text-gray-300 ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion_Feature;
