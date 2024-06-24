import { JSX, useEffect, useState } from "react";
import {
  Discord,
  Github,
  Onboarding,
  ProofOfID,
  SiteMap,
  Tokenize,
  Twitter,
} from "../../assets/icons";

type howitworksSteps = "onboarding" | "tokenize";

export const HowItWorks = (): JSX.Element => {
  const [currSteps, setCurrSteps] = useState<howitworksSteps>("onboarding");

  useEffect(() => {
    setTimeout(() => {
      if (currSteps == "onboarding") setCurrSteps("tokenize");
      if (currSteps == "tokenize") setCurrSteps("onboarding");
    }, 10000);
  }, [currSteps]);

  return (
    <div className="howitworks">
      <div className="workscontent">
        <p className="workstitle">How it works</p>

        {currSteps == "onboarding" && (
          <>
            <span className="span">
              <Onboarding width={24} height={24} />
              <p className="title">Onboarding</p>
              <p className="text">
                Startups seeking to leverage the benefits of DAOs can integrate
                with the Reorg platform through a streamlined onboarding
                process. Following successful onboarding, they launch their DAO
                and operate within the Reorg ecosystem while maintaining their
                legal status as separate entities.
              </p>
            </span>

            <span>
              <ProofOfID width={24} height={24} />
              <p className="title">Proof of Existence & Identity</p>
              <p className="text">
                Reorg employs a comprehensive due diligence process to ensure
                the legitimacy of startups seeking to launch DAOs on our
                platform. This process incorporates rigorous verification of a
                startup's existence, identity (through Know Your Customer [KYC]
                and Know Your Business [KYB] procedures), and valuation to
                foster trust and transparency for all participants in the Reorg
                ecosystem.
              </p>
            </span>
          </>
        )}

        {currSteps == "tokenize" && (
          <>
            <span className="span">
              <Tokenize width={24} height={24} />
              <p className="title">Tokenize Ownership</p>
              <p className="text">
                Reorg facilitates the tokenization of startups' ownership
                structures. This involves creating tokens that represent a
                quantifiable stake in the company. Additionally, a corresponding
                number of fungible tokens are issued, enabling fractional
                ownership and increased liquidity in the fundraising process.
              </p>
            </span>

            <span>
              <SiteMap width={24} height={24} />
              <p className="title">Operate As a DAO</p>
              <p className="text">
                Reorg empowers startups to operate with a robust and secure
                governance structure. Investors holding tokens within the DAO
                ecosystem enjoy a suite of rights, including the ability to
                trade these tokens, propose amendments to the DAO's governing
                policies, and participate in voting processes that shape the
                direction of the organization. This fosters a collaborative and
                transparent decision-making model, aligning investor interests
                with the long-term success of the startup.
              </p>
            </span>
          </>
        )}
      </div>

      <div className="contact">
        <div className="social">
          <Github />
          <Twitter />
          <Discord />
        </div>
        <div className="links">
          <span>FAQ</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};
