import { JSX } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "../../assets/icons";

export const DesktopNav = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const goToGetStarted = (): void => {
    navigate("/auth/business");
  };

  return (
    <div className="desktopnavctr">
      <div className="logo_links">
        <span className="logo">reorg.</span>

        <div className="links">
          <Link to="/">
            Tokens
            <ChevronDown />
          </Link>

          <Link to="/">
            LaunchPad
            <ChevronDown />
          </Link>

          <Link to="/">
            MarketPlace
            <ChevronDown />
          </Link>
        </div>
      </div>

      <div className="actions">
        <button className="_connect" title="Sign in to reorg.">
          Connect Wallet
        </button>

        <button title="Create a reorg. account" onClick={goToGetStarted}>
          Get Started <ArrowRight width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
