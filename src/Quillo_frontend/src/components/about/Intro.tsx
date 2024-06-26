import { JSX } from "react";

export const Intro = (): JSX.Element => {
  return (
    <div className="reorgintro">
      <div className="forstartups">
        <p className="textLG">
          Empowering Web3 Startups, dApps, and Protocols through Tokenization
        </p>

        <p className="desc">
          At Reorg, we empower Web3 startups, including dApps, protocols, and
          DAOs, to seamlessly raise funds by leveraging the power of
          tokenization. Our platform simplifies the fundraising process,
          providing startups with the tools and support needed to tokenize their
          assets and attract global investors.
        </p>
      </div>

      <div className="forinvestors">
        <p className="textMD">for investors;</p>
        <p className="desc">
          Discover, Invest, and Profit from Innovative Web3 Startups, dApps, and
          Protocols. At Reorg, we provide investors with unparalleled access to
          a diverse portfolio of Web3 startups, including dApps, protocols, and
          DAOs. Our platform enables you to discover amazing projects, invest in
          tokenized assets, and participate in decentralized governance.
        </p>
      </div>
    </div>
  );
};
