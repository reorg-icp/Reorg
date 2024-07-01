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
import { colors } from "../../constants/colors";

type howitworksSteps =
  | "onboarding"
  | "tokenize"
  | "aiTokenomics"
  | "daoGovernance";

export const HowItWorks = (): JSX.Element => {
  const [currSteps, setCurrSteps] = useState<howitworksSteps>("onboarding");

  useEffect(() => {
    const steps: howitworksSteps[] = [
      "onboarding",
      "tokenize",
      "aiTokenomics",
      "daoGovernance",
    ];
    const currentIndex = steps.indexOf(currSteps);
    const nextIndex = (currentIndex + 1) % steps.length;
    const timeout = setTimeout(() => setCurrSteps(steps[nextIndex]), 10000);

    return () => clearTimeout(timeout);
  }, [currSteps]);

  return (
    <div id="howitworks">
      <div className="workscontent">
        <p className="workstitle">How it works</p>

        {currSteps === "onboarding" && (
          <>
            <span className="span">
              <Onboarding
                width={24}
                height={24}
                color={colors.text_secondary}
              />
              <p className="title">Onboarding</p>
              <p className="text">
                Startups seeking to leverage the benefits of DAOs can integrate
                with the Reorg platform through a streamlined onboarding
                process. Following successful onboarding, they launch their
                token.
              </p>
            </span>

            <span>
              <ProofOfID width={24} height={24} color={colors.text_secondary} />
              <p className="title">Proof of Existence & Identity</p>
              <p className="text">
                Reorg employs a comprehensive due diligence process to ensure
                the legitimacy of startups seeking to launch tokens on our
                platform. This process incorporates rigorous verification of a
                startup's existence, identity (through Know Your Customer [KYC]
                and Know Your Business [KYB] procedures), and valuation to
                foster trust and transparency for all participants in the Reorg
                ecosystem.
              </p>
            </span>
          </>
        )}

        {currSteps === "tokenize" && (
          <>
            <span className="span">
              <Tokenize width={24} height={24} color={colors.text_secondary} />
              <p className="title">Tokenize Ownership</p>
              <p className="text">
                Reorg facilitates the tokenization of startups' ownership
                structures. This involves creating tokens that represent a
                quantifiable stake in the company, enabling fractional ownership
                and increased liquidity in the fundraising process.
              </p>
            </span>

            <span>
              <SiteMap width={24} height={24} color={colors.text_secondary} />
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

        {currSteps === "aiTokenomics" && (
          <>
            <span className="span">
              <Tokenize width={24} height={24} color={colors.text_secondary} />
              <p className="title">AI-Powered Tokenomics</p>
              <p className="text">
                Reorg's token creation platform includes an AI model trained on
                tokenomics. Based on the startup's business model, the AI
                recommends an optimal tokenomics structure, including total
                token supply, transfer fees, and more, ensuring a well-balanced
                and sustainable token ecosystem.
              </p>
            </span>
          </>
        )}

        {currSteps === "daoGovernance" && (
          <>
            <span>
              <SiteMap width={24} height={24} color={colors.text_secondary} />
              <p className="title">DAO Governance</p>
              <p className="text">
                Investors participate in a DAO that governs the startup. This
                includes voting on key decisions, managing the token supply, and
                ensuring transparent operations. The DAO structure aligns
                investor and startup interests, fostering a collaborative and
                engaged community.
              </p>
            </span>
          </>
        )}
      </div>

      <div className="contact">
        <div className="social">
          <Github color={colors.text_primary} />
          <Twitter color={colors.text_primary} />
          <Discord color={colors.text_primary} />
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
