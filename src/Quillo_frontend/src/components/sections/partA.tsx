import React from 'react';
import '../../styles/components/PartA.scss'; // Import the SCSS file

const PartA = () => {
  return (
    <div className="image-text-section">
      <div className="image-container">
        <img src="https://img.freepik.com/free-vector/gradient-colored-cardano-illustration_52683-78514.jpg?t=st=1722094319~exp=1722097919~hmac=40ae8b753a9585b61e3ac6283c45b081d47441a5968a0e305470fb3abe426528&w=740" alt="Descriptive Alt Text" />
      </div>
      <div className="text-container">
        <h1 className="title">Multichain Token Launch</h1>
        <p className="description">We support the launch of both ICRC and EVM-based tokens, enabling a versatile and robust token ecosystem..</p>
        <button className="get-started-button">Get Started</button>
      </div>
   
    </div>
  );
}

export default PartA;
