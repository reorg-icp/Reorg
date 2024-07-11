import { JSX, useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { ArrowRight, ChevronDown, MenuIcon } from "../../assets/icons";
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
      <div className="mobilenavctr">
        <span className="logo">reorg.</span>

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

          <button
            style={{
              ...actionBtn,
              border: `1px solid ${colors.bluee}`,
              backgroundColor: "transparent",
            }}
            onClick={() => {
              setDrawerOpen(false);
              openAuthDrawer("signin");
            }}
          >
            Connect Wallet
          </button>

          <button
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
          </button>

          <div style={links}>
            <Link to="/" style={aLink}>
              Tokens
              <ChevronDown />
            </Link>

            <Link to="/" style={aLink}>
              LaunchPad
              <ChevronDown />
            </Link>

            <Link to="/" style={aLink}>
              MarketPlace
              <ChevronDown />
            </Link>
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
  backgroundColor: colors.darkdefault,
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
  color: colors.primary,
};
