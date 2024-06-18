import { JSX } from "react";

export const Intro = (): JSX.Element => {
  return (
    <div className="reorgintro">
      <div className="forstartups">
        <p className="textLG">
          turn your startup <br />
          into a tokenized DAO <br />& unlock new capital
        </p>

        <p className="desc">
          Reorg is a pioneering platform positioned at the forefront of the DAO
          movement. We empower startups to unlock the full potential of
          decentralization by facilitating the creation and operation of
          Tokenized Decentralized Autonomous Organizations (DAOs). We enable
          startups to tokenize ownership and assets, granting access to a global
          pool of investors seeking alternative investment opportunities.
        </p>
      </div>

      <div className="forinvestors">
        <p className="textMD">for investors;</p>
        <p className="desc">
          Reorg unlocks a new frontier for investors seeking diversification and
          democratic participation. Through our platform, you gain access to
          innovative startups shaping the future of blockchain technology.
          Invest in tokenized ownership and assets, fostering a direct stake in
          a company's success. Reorg empowers you to join a global community and
          actively participate in governance decisions, shaping the direction of
          these pioneering ventures.
        </p>
      </div>
    </div>
  );
};
