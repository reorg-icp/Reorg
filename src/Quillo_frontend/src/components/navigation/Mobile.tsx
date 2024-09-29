import { JSX, useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { MenuIcon } from "../../assets/icons";
import { colors } from "../../constants/colors";
import { logoFont, jockeyOneFont } from "../../constants/styles";
import "../../styles/components/navigation.scss";

export const MobileNav = (): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { openAuthDrawer } = useAuthDrawer();

  const toggleDrawer = (newOpen: boolean) => (): void => {
    setDrawerOpen(newOpen);
  };

  return (
    <>
      <div className="bg-emerald-950 mobilenavctr">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black", outline: "none" }}
        >
          <span
            className="logo text-blue-50 flex items-center "
            style={{ fontWeight: "bold", marginLeft: "5px" }}
          >
            <img src="/images/logo.png" alt="logo" className="w-6 h-auto m-2" />
            <span className="text-lg">REORG.</span>
          </span>
        </Link>

        <button onClick={toggleDrawer(true)} className="drawerbtn">
          <MenuIcon color={colors.bluee} />
        </button>
      </div>

      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        anchor="bottom"
        elevation={0}
        PaperProps={{ style: drawerstyles }}
      >
        <span style={divider} />

        <div style={actionsCtr}>
          <span
            style={{ ...logoFont, fontSize: "2rem", color: colors.primary }}
          >
            reorg.
          </span>

          {localStorage.getItem("principal") && (
            <p className="principal text-white">{localStorage.getItem("principal")}</p>
          )}
          {!localStorage.getItem("principal") && (
            <button
              style={{
                ...actionBtn,
                border: `1px solid #004d40`,
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setDrawerOpen(false);
                openAuthDrawer("signin");
              }}
            >
              Connect Wallet
            </button>
          )}

          {/* <button
            style={{
              ...actionBtn,
              marginTop: "0.75rem",
            }}
            onClick={() => {
              setDrawerOpen(false);
              openAuthDrawer("signup");
            }}
          >
            Get Started <ArrowRight width={20} height={20} />
          </button> */}

          <div style={links}>
            <Link to="app/token" style={aLink}>
            Tokenize game
            </Link>
            <Link to="/market" style={aLink}>
            Marketplace
            </Link>
                 {/* <Link to="pool" style={aLink}>Pools</Link>
                  <Link to="dex" style={aLink}>DEX</Link> */}

            {/* <Link to="comingSoon" style={aLink}>
              LaunchPad
            </Link>

            <Link to="comingSoon" style={aLink}>
              Liquidity pools
            </Link> */}
          </div>
        </div>
      </Drawer>
    </>
  );
};

const drawerstyles: CSSProperties = {
  width: "100vw",
  minHeight: "50vh",
  padding: "0.5rem",
  paddingTop: "0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: " #002d1b"
};

const divider: CSSProperties = {
  width: "8rem",
  height: "0.375rem",
  marginTop: "0.25rem",
  marginBottom: "1.5rem",
  borderRadius: "0.5rem",
  backgroundColor: colors.divider,
};

const actionsCtr: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const actionBtn: CSSProperties = {
  ...jockeyOneFont,
  width: "100%",
  marginTop: "2rem",
  padding: "0.5rem",
  border: 0,
  borderRadius: "0.25rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  color: colors.primary,
  fontSize: "1.25rem",
  fontWeight: 400,
  backgroundColor: colors.bluee,
};

const links: CSSProperties = {
  marginTop: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const aLink: CSSProperties = {
  ...jockeyOneFont,
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "1.25rem",
  color: "white",
 
};
