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
    <div className= "bg-emerald-950 desktopnavctr" style={{ zIndex: 1000, overflow: "hidden" }}>
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
           className="logo flex items-center"
           style={{ textDecoration: "none", color: "white", outline: "none", fontFamily:"Press Start 2P, sans-serif" }}
          >
            <img src="/images/logo.png" alt="react" className="w-12 h-auto m-2" />
             REORG.
          </span>

        </Link>
        <div className=" links">
          <Link className="text-blue-50 hover:text-emerald-100 border border-emerald-800 hover:border-amber-400 px-4 py-2 rounded transition-all duration-300" to="/token">
          <span className="text-blue-50">Tokenize game</span>
          
          </Link>

          <Link className="text-white hover:text-emerald-100 border border-emerald-800 hover:border-amber-400 px-4 py-2 rounded transition-all duration-300" to="/market">
          <span className="text-blue-50">Marketplace</span>
          
          </Link>
             {/* <Link className="text-white hover:text-emerald-100 border border-emerald-800 hover:border-amber-400 px-4 py-2 rounded transition-all duration-300" to="pool">
          <span className="text-blue-50">Pools</span>
              </Link>
             <Link className="text-white hover:text-emerald-100 border border-emerald-800 hover:border-amber-400 px-4 py-2 rounded transition-all duration-300" to="pool">
          <span className="text-blue-50">Dex</span>
          </Link> */}
        </div>
      </div>

      <div className="actions ">
        {localStorage.getItem("principal") && (
          <p className="principal text-white ">{localStorage.getItem("principal")}</p>
        )}
        {!localStorage.getItem("principal") && (
          <button
          className="_connect text-white hover:text-emerald-100 border border-emerald-800 hover:border-amber-400 px-4 py-2 rounded transition-all duration-300" // Apply Tailwind's border color class
          style={{
            border: "2px solid",
            borderColor: "transparent" // Ensure no conflict with Tailwind's class
          }}
          title="Authenticate in to reorg."
          onClick={() => openAuthDrawer("signin")}
        >
          
          <span className="text-blue-50">Connect Wallet</span>
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