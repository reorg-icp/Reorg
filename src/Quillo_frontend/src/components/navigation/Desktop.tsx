import { JSX, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { Wallet } from "../../assets/icons";
import "../../styles/components/navigation.scss";
import { requestUserBalance } from "../../utils/transactions";

export const DesktopNav = (): JSX.Element => {
  const { openAuthDrawer } = useAuthDrawer();

  useEffect(() => {
    requestUserBalance();
  });

  return (
    <div className="desktopnavctr" style={{ zIndex: 1000, overflow:"hidden" }}>
      <div className="logo_links">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            outline: "none",
            fontWeight: "bold",
          }}
        >
          <span
            className="logo"
            style={{ textDecoration: "none", color: "white", outline: "none" }}
          >
            reorg.
          </span>
        </Link>

        <div className="links">
          <Link to="tokens">Tokens</Link>

          <Link to="comingSoon">LaunchPad</Link>

          <Link to="comingSoon">Liquidity pools</Link>
        </div>
      </div>

      <div className="actions">
        {localStorage.getItem("principal") && (
          <p className="principal">{localStorage.getItem("principal")}</p>
        )}
        {!localStorage.getItem("principal") && (
          <button
            className="_connect"
            title="Authenticate in to reorg."
            onClick={() => openAuthDrawer("signin")}
          >
            <span>Connect Wallet</span>
            <Wallet width={20} height={18} />
          </button>
        )}

        {/* <button
          title="Create a reorg. account"
          onClick={() => openAuthDrawer("signup")}
        >
          <span>Get Started</span>
          <ArrowRight width={20} height={20} />
        </button> */}
      </div>
    </div>
  );
};
