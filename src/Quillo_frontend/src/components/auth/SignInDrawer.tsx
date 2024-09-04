import { CSSProperties, JSX, useState } from "react";

import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useMediaQuery, Drawer, Radio } from "@mui/material";
import { accType } from "../../pages/auth";
import { useAuthDrawer } from "../../context/authdrawerctx";
import { useSnackbar } from "../../context/snackbarctx";
import { Wallet } from "../../assets/icons";
import { colors } from "../../constants/colors";
import { logoFont, baseFont } from "../../constants/styles";
import LoadingAnimation from "../../assets/animations/loading.json";
import { usePlugWallet } from "../../store";
import { PlugMobileProvider } from '@funded-labs/plug-mobile-sdk';

export const SignInDrawer = (): JSX.Element => {
  const { setPlug } = usePlugWallet((state: any) => state);
  const [accountType, setAccountType] = useState<accType>("business");
  const [isConnecting, setIsConnecting] = useState(false);

  // const navigate: NavigateFunction = useNavigate();
  const matchesSM: boolean = useMediaQuery("(min-width:768px)");
  const { authDrawerOpen, authType, closeAuthdrawer } = useAuthDrawer();

  const { showsuccesssnack, showerrorsnack } = useSnackbar();

  const onConnectionUpdate = (): void => {};
  const ConnectPlugWallet = async (): Promise<void> => {
    setIsConnecting(true);

    const live_host = "https://ieffn-gaaaa-aaaap-qhkwa-cai.icp0.io";
    // const live_host = "http://127.0.0.1:4943/";
    const isMobile = PlugMobileProvider.isMobileBrowser()
    try {
      if (isMobile){
        const mobileProvider = new PlugMobileProvider({
          debug: true,
          walletConnectProjectId: 'b321809d2b78a6d1ec98fe2d4accf5ad',
          window: window,
        });
        await mobileProvider.initialize();
           console.log("initialised")
        if (!mobileProvider.isPaired()) {
        
          await mobileProvider.pair();
          console.log("pared")
        }
   // Create agent using mobile provider
      const agent = await mobileProvider.createAgent({
        host: live_host,
        targets: [ 'ircua-hiaaa-aaaap-qhkvq-cai'], // Specify the canisters
      });
      console.log("created Agent",agent)
      const user_principal=  await agent.getPrincipal();
      localStorage.setItem("principal", user_principal as unknown as string);
      setPlug(agent);

      }else{
      await (window as any).ic.plug.requestConnect({
        host: live_host,
        onConnectionUpdate,
        timeout: 5000,
      });
      let user_principal = await (
        window as any
      ).ic?.plug?.agent?.getPrincipal();
      localStorage.setItem("principal", user_principal);
      console.log((window as any).ic?.plug?.agent);
      setPlug((window as any).ic?.plug);
      closeAuthdrawer();
      showsuccesssnack("You signed in successfully");
    } 
  }catch (e) {
      console.error(e);
      if (e  ){
        const message = JSON.stringify(e);
        if (message=="Uncaught, Cannot read properties of undefined (reading 'plug')"){

console.log({message});
        }
      }
      showerrorsnack(
        "An error occurred, please try again." + JSON.stringify(e)
      );
    
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
              ? "Authenticate into Reorg"
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
                  sx={{ color: "white" }}
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
            Authenticate with Plug wallet
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
            
            className="
            text-gray-300
            "
            style={{
              ...baseFont,
              marginTop: "0.5rem",
            
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
  color: "white",
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
  backgroundColor: "#1409",
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
