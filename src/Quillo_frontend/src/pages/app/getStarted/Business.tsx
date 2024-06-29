import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import List from "../../../components/reusables/AuthList";
import { colors } from "../../../assets/colors";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
const GetStartedBusiness = ({
  handleConnectWallet,
}: {
  handleConnectWallet: () => void;
}): JSX.Element => {
  const [accountType, setAccountType] = useState<"business" | "investor">(
    "business"
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      direction={isMobile ? "column" : "row"}
      container
      spacing={0}
      sx={{ padding: "10px" }}
    >
      <Grid item xs={8}>
        <CreateAccount
          handleConnectWallet={handleConnectWallet}
          accountType={accountType}
        />
      </Grid>
      <Grid item xs={4}>
        <ChooseAccount
          accountType={accountType}
          setAccountType={setAccountType}
        />
      </Grid>
    </Grid>
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
          "Sign in to Reorg with",
          "Connect Wallet",
        ]}
        handleConnectWallet={handleConnectWallet}
      />
      <p className="desc">
        Plug is a crypto wallet for the Internet Computer that allows you to
        hold, send, and swap ICP, Cycles,NFTs, and other tokens.
        <br></br>
        <a style={{ color: colors.textPrimary }} href="https://plugwallet.ooo/">
          Learn more
        </a>
        <br></br>
        NFID is the easiest and most secure digital identity for the modern
        world.
        <br></br>
        <a style={{ color: colors.textPrimary }} href="https://nfid.one/">
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
            background: colors.primary,
            margin: "0 10px",
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "space-between",
            textDecoration: "none",
            "&:hover": {
              background: colors.primary,
            },
          }}
        >
          <span>Next</span>
        </Button>
      </Link>
    </>
  );
};

const ChooseAccount = ({
  accountType,
  setAccountType,
}: {
  accountType: "investor" | "business";
  setAccountType: (accountType: "investor" | "business") => void;
}): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Reorg</h1>
      <h2 style={{ textAlign: "center" }}>for Startups</h2>
      <p style={{ textAlign: "center" }} className="desc">
        Reorg empowers Web3 startups, dApps, protocols, and DAOs, to seamlessly
        raise funds by leveraging the power of tokenization.
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          onClick={() => {
            const newAccountType =
              accountType === "business" ? "investor" : "business";
            setAccountType(newAccountType);

            // Update the URL query parameter
            const url = new URL(window.location.href);
            url.searchParams.set("accountType", newAccountType);
            window.history.pushState({}, "", url.toString());
          }}
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
                border: `2px solid ${theme.palette.divider}`,
                transition: "border-color 0.3s ease",
              }}
            >
              <ArrowForward />
            </div>
          }
          sx={{
            height: "50px",
            background: colors.primary,
            color: theme.palette.getContrastText(theme.palette.primary.main),
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "10px",

            fontWeight: "bold",
            textTransform: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              background: colors.primary,
            },
            "& .MuiButton-endIcon": {
              marginLeft: "10px",
              transition: "margin-left 0.3s ease",
            },
            "&:hover .MuiButton-endIcon": {
              marginLeft: "15px",
            },
          }}
        >
          <span>
            {accountType === "business"
              ? "Authenticate as an investor"
              : "Authenticate as an business"}
          </span>
        </Button>
      </div>
    </>
  );
};

export default GetStartedBusiness;
