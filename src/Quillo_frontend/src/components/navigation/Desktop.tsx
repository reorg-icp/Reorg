import { JSX } from "react";
import { Link } from "react-router-dom";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { ArrowRight, ChevronDown, Wallet } from "../../assets/icons";
import "../../styles/components/navigation.scss";

export const DesktopNav = (): JSX.Element => {
  const { openAuthDrawer } = useAuthDrawer();

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
        <button
          className="_connect"
          title="Sign in to reorg."
          onClick={() => openAuthDrawer("signin")}
        >
          <span>Connect Wallet</span>
          <Wallet width={20} height={18} />
        </button>

        <button
          title="Create a reorg. account"
          onClick={() => openAuthDrawer("signup")}
        >
          <span>Get Started</span>
          <ArrowRight width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
