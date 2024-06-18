import { JSX } from "react";

export const Faqs = (): JSX.Element => {
  return (
    <div className="fraqs">
      <p className="textLG">FAQs</p>

      <span>
        <p className="title">What is Reorg ?</p>
        <p className="desc">
          Reorg is a platform that facilitates the creation and operation of
          Tokenized Decentralized Autonomous Organizations (DAOs). We empower
          startups to tokenize their ownership and assets, allowing them to
          raise funds from a global pool of investors and operate with
          transparent and democratic governance.
        </p>
      </span>

      <span>
        <p className="title">How does Reorg work ?</p>
        <p className="desc">
          Startups apply to have their ownership tokenized into NFTs
          (Non-Fungible Tokens) on the Reorg platform. These tokens represent
          ownership and are sold to investors, who become members of a DAO
          governing the startup. Through this DAO, investors can participate in
          decision-making processes, ensuring transparent and decentralized
          governance.
        </p>
      </span>

      <span>
        <p className="title">What are Tokenized DAOs ?</p>
        <p className="desc">
          Tokenized DAOs combine the principles of Decentralized Autonomous
          Organizations (DAOs) with asset tokenization. They allow stakeholders
          to govern, manage, and tokenize assets in a decentralized and
          transparent manner. Tokenized DAOs enable the creation of tokenized
          ownership structures, providing increased liquidity, accessibility,
          and programmability to traditional assets.
        </p>
      </span>

      <span>
        <p className="title">What is the Reorg Token ?</p>
        <p className="desc">
          The Reorg token is the native token of our platform. It is used for
          various purposes, including applying for tokenization, governance
          within DAOs, and facilitating transactions on the platform. Reorg
          tokens can be traded on supported exchanges.
        </p>
      </span>

      <span>
        <p className="title">
          How can a startup apply for tokenization on Reorg?
        </p>
        <p className="desc">
          Startups need to acquire Reorg tokens and use them to submit an
          application for tokenization. Once approved, the startup's ownership
          is converted into NFTs that can be sold to investors.
        </p>
      </span>

      <span>
        <p className="title">
          What are the benefits of tokenizing a startup on Reorg?
        </p>
        <p className="desc">
          Tokenizing a startup on Reorg allows for efficient fundraising by
          selling ownership tokens to a global pool of investors. It also
          provides a transparent and democratic governance structure through a
          DAO, where investors can contribute to important decisions.
        </p>
      </span>

      <span>
        <p className="title">
          What criteria do startups need to meet to get approved for
          tokenization on Reorg?
        </p>
        <p className="desc">
          The specific criteria for approval will be outlined in our application
          guidelines, which typically include factors such as the viability of
          the business model, the potential for growth, and the team’s track
          record.
        </p>
      </span>

      <span>
        <p className="title">What rights do I get as an investor?</p>
        <p className="desc">
          As an investor, you become a member of the startup’s DAO on Reorg.
          This grants you voting rights on key decisions affecting the startup,
          allowing you to have a direct impact on its governance and strategic
          direction.
        </p>
      </span>
    </div>
  );
};
