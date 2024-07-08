import { JSX } from "react";

export const Intro = (): JSX.Element => {
  return (
    <div className="reorgintro">
      <div className="forstartups">
        <p className="textLG" style={{ fontWeight: "bold" }}>
          Token generation platform for outstanding projects on the internet
          computer
        </p>

        <p className="desc" style={{ fontSize: "18px" }}>
          We help internet computer projects launch tokens. Easily launch a
          token with a sound token economics model with the help of our
          tokenomics GPT. Tokens created on reorg can be swapped on ICPSWAP. We
          also offer liquidity pools, a Dex and we also partner with other Dexes
          to list tokens on those Dexes. Reorg DAO is a DAO of investors
          interested in outstanding ICP projects. After launching your token,
          you can apply for funding from the DAO.
        </p>
      </div>

      <div className="forinvestors">
        <p className="textMD" style={{ fontWeight: "bold" }}>
          For Investors
        </p>
        <p className="desc" style={{ fontSize: "18px" }}>
          Discover, Invest, and Profit from Innovative Internet computer dApps,
          and Protocols. At Reorg, we provide investors with unparalleled access
          to a diverse portfolio of Web3 projects, including dApps, protocols,
          and DAOs. Our platform enables you to discover amazing projects,
          invest by buying tokens and profit from the growth of this projects.
        </p>
      </div>
    </div>
  );
};
