import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import List from "../../../components/reusables/AuthList";
import { colors } from "../../../assets/colors";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import "../../../styles/pages/about.scss";
const GetStartedBusiness = ({
  handleConnectWallet,
}: {
  handleConnectWallet: () => void;
}): JSX.Element => {
  const [accountType, _] = useState<"business" | "investor">("business");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <p
        className="textLG"
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          color: colors.green,
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        Connect Plug wallet and continue
      </p>

      <Grid
        direction={isMobile ? "column" : "column"}
        container
        spacing={0}
        sx={{
          padding: "10px",
          alignItems: "center",
          paddingTop: "50px",
          // background: "rgba(255, 255, 255, 0.16)",
        }}
      >
        {" "}
        <Grid item xs={12}>
          <CreateAccount
            handleConnectWallet={handleConnectWallet}
            accountType={accountType}
          />
        </Grid>
      </Grid>
    </>
  );
};

const CreateAccount = ({
  handleConnectWallet,
  accountType,
}: {
  handleConnectWallet: () => void;
  accountType: string;
}): JSX.Element => {
  return (
    <>
      <List
        items={[
          "Get started by creating an account",
          "Sign in to Reorg with Plug or NFID",
          "Connect Wallet",
        ]}
        handleConnectWallet={handleConnectWallet}
      />
      <p className="desc" style={{ marginBlock: "15px" }}>
        Plug is a crypto wallet for the Internet Computer that allows you to
        hold, send, and swap ICP, Cycles,NFTs, and other tokens.
        <br></br>
        <br></br>
        <a
          style={{ color: colors.textPrimary, marginBlock: "15px" }}
          href="https://plugwallet.ooo/"
        >
          Learn more
        </a>
        <br></br>
        <br></br>
        NFID is the easiest and most secure digital identity for the modern
        world.
        <br></br>
        <br></br>
        <a
          style={{ color: colors.textPrimary, marginBlock: "15px" }}
          href="https://nfid.one/"
        >
          Learn more
        </a>
      </p>

      <Link
        to={accountType === "business" ? `/create-token` : `/`}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          endIcon={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: `2px solid ${colors.divider}`,
              }}
            >
              <ArrowForward />
            </div>
          }
          sx={{
            height: "26px",
            width: "100px",
            background: colors.green,
            margin: "0 10px",
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "space-between",
            color: colors.primary,
            alignContent: "center",
            textDecoration: "none",
            "&:hover": {
              background: colors.green,
            },
          }}
        >
          <span>Next</span>
        </Button>
      </Link>
    </>
  );
};

export default GetStartedBusiness;
