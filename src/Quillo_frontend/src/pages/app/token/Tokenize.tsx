import {
  Grid,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ArrowForward, UploadFile } from "@mui/icons-material";
import { colors } from "../../../constants/colors";
import { Auth, useAuthStore, useProjectInfo } from "../../../store";
import {
  Quillo_backend,
  createActor,
} from "../../../../../declarations/Quillo_backend";
import { HttpAgent } from "@dfinity/agent";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3D5AFE", // Primary color similar to ICP blue
    },
    secondary: {
      main: colors.green, // Accent color
    },
    text: {
      primary: "#FFF", // White text color
      secondary: "#B0BEC5", // Lighter text color
    },
    background: {
      default: "#121212", // Dark background color
      paper: "#1E1E1E", // Darker card background color
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "0px",
            backgroundColor: "#2B2B2B", // Dark input background
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
          "& .MuiInputLabel-root": {
            color: colors.green, // Accent color for labels
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: colors.green, // Accent color for focused labels
          },
        },
      },
    },
  },
});

const Tokenize = () => {
  let actor = Quillo_backend;
  const agent: any = new HttpAgent();
  //backend canister name
  actor = createActor("ircua-hiaaa-aaaap-qhkvq-cai", {
    agent,
  });
  const { principal } = useAuthStore((state: Auth) => state);
  const {
    tokenomics,
    setTokenomics,
    project_name,
    project_description,

    socials,
  } = useProjectInfo((state: any) => state);
  let project_details = {
    project_name: project_name,
    project_description: project_description,

    socials: [socials],
    tokenomics: [tokenomics],
    project_principal: [principal] as [string],
  };

  async function registerProject() {
    console.log(JSON.stringify(project_details));
    let response: any = await actor.register_dao({
      project_details: [project_details] as [any],
      transfer_fee: [],
      token_canister: [],
      proposal_vote_threshold: [],
      proposal_submission_deposit: [],
      total_token_supply: [],
    });
    if (response?.Ok) {
      alert("Success");
      console.log(response?.Ok?.id);
    }
    if (response?.Err) {
      alert("Error");
    }
  }

  const inputProps = {
    style: {
      backgroundColor: "#2B2B2B", // Dark input background
      borderRadius: "0px",
      borderBottom: "2px solid transparent",
      color: "#FFF", // White text color
    },
    focused: {
      style: {
        borderBottomColor: colors.green, // Accent color on focus
      },
    },
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Ensure files array exists and get the first file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string; // Cast reader.result to string
        const base64String = result.split(",")[1]; // Get base64 string without data:image/jpeg;base64, prefix
        setTokenomics({ ...tokenomics, token_image: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        spacing={4}
        sx={{
          padding: "20px",
          backgroundColor: "#121212", // Dark background color
          color: "#FFF", // White text color
          borderRadius: "8px",
        }}
      >
        <Grid item xs={12} textAlign="center">
          <h1 style={{ fontWeight: "bold", color: "#00FF00" }}>
            Launch a token
          </h1>
          <h4 style={{ color: "#00FF00" }}>
            Proceed to create an icrc2 token.
          </h4>
        </Grid>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Token Name"
                  name="token_name"
                  value={tokenomics?.token_name}
                  onChange={(e: any) => {
                    setTokenomics({
                      ...tokenomics,
                      token_name: e.target.value,
                    });
                  }}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...inputProps,
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = colors.green;
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Token Symbol"
                  name="token_symbol"
                  value={tokenomics?.token_symbol}
                  onChange={(e) => {
                    setTokenomics({
                      ...tokenomics,
                      token_symbol: e.target.value,
                    });
                  }}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...inputProps,
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = colors.green;
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Total Supply"
                  name="total_supply"
                  value={tokenomics?.total_supply}
                  onChange={(e: any) => {
                    setTokenomics({
                      ...tokenomics,
                      total_supply: Number(e.target.value),
                    });
                  }}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...inputProps,
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = colors.green;
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Transfer Fee"
                  name="transfer_fee"
                  value={tokenomics?.transfer_fee}
                  onChange={(e: any) => {
                    setTokenomics({
                      ...tokenomics,
                      transfer_fee: Number(e.target.value),
                    });
                  }}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...inputProps,
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = colors.green;
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  name="token_image"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton component="span">
                          <UploadFile />
                        </IconButton>
                      </InputAdornment>
                    ),
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = colors.green;
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                  onChange={handleFileChange}
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    height: "50px",
                    backgroundColor: "#3D5AFE", // ICP blue color
                    color: "#FFF", // White text color
                    "&:hover": {
                      backgroundColor: "#304FFE", // Darker blue on hover
                    },
                  }}
                  onClick={async () => {
                    await registerProject();
                  }}
                >
                  <span>Submit</span>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Tokenize;
