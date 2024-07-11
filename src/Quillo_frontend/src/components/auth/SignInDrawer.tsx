import { CSSProperties, JSX, useState } from "react";
import { Principal } from "@dfinity/principal";
import Lottie from "lottie-react";
import { NavigateFunction, Link, useNavigate } from "react-router-dom";
import { useMediaQuery, Drawer, Radio } from "@mui/material";
import { accType } from "../../pages/auth";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { useSnackbar } from "../../context/snackbarctx";
import { Wallet } from "../../assets/icons";
import { colors } from "../../constants/colors";
import { logoFont, baseFont } from "../../constants/styles";
import LoadingAnimation from "../../assets/animations/loading.json";

export const SignInDrawer = (): JSX.Element => {
  const [accountType, setAccountType] = useState<accType>("business");
  const [isConnecting, setIsConnecting] = useState(false);

  const navigate: NavigateFunction = useNavigate();
  const matchesSM: boolean = useMediaQuery("(min-width:768px)");
  const { authDrawerOpen, authType, closeAuthdrawer } = useAuthDrawer();

  const { showsuccesssnack, showerrorsnack } = useSnackbar();

  const onConnectionUpdate = (): void => {};
  const ConnectPlugWallet = async (): Promise<void> => {
    setIsConnecting(true);

    const host: string = "http://127.0.0.1:4943/";

    try {
      const publicKey: Uint8Array = await (
        window as any
      ).ic.plug.requestConnect({
        host,
        onConnectionUpdate,
        timeout: 5000,
      });

      localStorage.setItem(
        "principal",
        Principal.selfAuthenticating(publicKey).toString()
      );
      closeAuthdrawer();
      showsuccesssnack("You signed in successfully");

      setTimeout(() => {
        if (authType == "signup" && accountType == "business") {
          navigate("/auth/business");
        } else {
          navigate("/app");
        }
      }, 2500);
    } catch (e) {
      showerrorsnack("An error occurred, please try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  const drawerstyles: CSSProperties = {
    width: matchesSM ? "24rem" : "100vw",
    minHeight: matchesSM ? "80vh" : "58vh",
    padding: "1rem",
    position: matchesSM ? "absolute" : undefined,
    left: matchesSM ? "75%" : undefined,
    bottom: matchesSM ? "1rem" : 0,
    borderRadius: matchesSM ? "0.5rem" : 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: colors.darkdefault,
  };

  return (
    <Drawer
      open={authDrawerOpen}
      onClose={closeAuthdrawer}
      anchor="bottom"
      elevation={0}
      PaperProps={{ style: drawerstyles }}
    >
      <div>
        <p style={logotxt}>reorg.</p>
        <div style={divider} />

        <div style={{ marginTop: "1rem" }}>
          <p
            style={{
              ...baseFont,
              fontSize: "1.125rem",
              fontWeight: 400,
              color: colors.primary,
            }}
          >
            {authType == "signin"
              ? "Sign in to your reorg. account"
              : "Create a reorg. account"}
          </p>

          {authType == "signup" && (
            <div style={{ marginTop: "0.5rem" }}>
              <span style={radioBtn}>
                <Radio
                  checked={accountType == "business"}
                  onChange={() => setAccountType("business")}
                  sx={{ color: colors.bluee }}
                />
                Create a startup/founder account
              </span>

              <span style={radioBtn}>
                <Radio
                  checked={accountType == "investor"}
                  onChange={() => setAccountType("investor")}
                  sx={{ color: colors.bluee }}
                />
                Create an investor account
              </span>
            </div>
          )}

          <button
            style={{ ...button, ...signinbtn }}
            title="Sign in to reorg"
            onClick={ConnectPlugWallet}
            disabled={isConnecting}
          >
            Sign in with Plug wallet
            {isConnecting ? (
              <Lottie
                animationData={LoadingAnimation}
                autoplay
                loop
                style={{ width: "1.75rem", height: "1.75rem" }}
              />
            ) : (
              <Wallet color={colors.primary} />
            )}
          </button>

          <p
            style={{
              ...baseFont,
              marginTop: "0.5rem",
              color: colors.text_secondary,
            }}
          >
            Plug is a crypto wallet for the Internet Computer that allows you to
            hold, send, and swap ICP.
            <Link
              to="https://plugwallet.ooo/"
              target="_blank"
              style={{ marginLeft: "0.25rem", color: colors.bluee }}
            >
              Learn More
            </Link>
          </p>
        </div>
      </div>

      <button
        style={{ ...button, ...cancelBtn }}
        title="Cancel"
        onClick={closeAuthdrawer}
      >
        Cancel
      </button>
    </Drawer>
  );
};

const logotxt: CSSProperties = {
  ...logoFont,
  fontSize: "2.5rem",
  fontWeight: 600,
  color: colors.bluee,
};

const divider: CSSProperties = {
  width: "100%",
  height: "1px",
  marginTop: "1rem",
  backgroundColor: colors.divider,
};

const button: CSSProperties = {
  ...baseFont,
  width: "100%",
  padding: "0.5rem",
  border: 0,
  borderRadius: "0.25rem",
  outline: "none",
  outlineColor: "transparent",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  fontSize: "1rem",
  fontWeight: 500,
  color: colors.primary,
  cursor: "pointer",
};

const signinbtn: CSSProperties = {
  marginTop: "1rem",
  gap: "0.5rem",
  backgroundColor: colors.bluee,
};

const cancelBtn: CSSProperties = {
  backgroundColor: colors.danger,
};

const radioBtn: CSSProperties = {
  ...baseFont,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  color: colors.primary,
};
