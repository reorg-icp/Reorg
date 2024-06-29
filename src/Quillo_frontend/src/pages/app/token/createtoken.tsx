import {
  Grid,
  TextField,
  MenuItem,
  Button,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
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
            color: "#00FF00",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00FF00",
          },
        },
      },
    },
  },
});

const CreateToken = (): JSX.Element => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    teamMembers: "",
    platform: "",
    projectDescription: "",
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputProps = {
    style: {
      backgroundColor: "#222",
      color: "#fff",
      borderRadius: "0px",
      borderBottom: "2px solid transparent",
    },
    focused: {
      style: {
        borderBottomColor: "#00FF00",
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        spacing={4}
        sx={{
          padding: "20px",
          backgroundColor: "#111",
          color: "#fff",
        }}
      >
        <Grid item xs={12} textAlign="center">
          <h1 style={{ fontWeight: "bold", color: "#00FF00" }}>Reorg</h1>
          <h2 style={{ color: "#00FF00" }}>for Startups</h2>
          <p>
            Reorg empowers Web3 startups, dApps, protocols, and DAOs to
            seamlessly raise funds by leveraging the power of tokenization.
          </p>
        </Grid>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Product Name"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...inputProps,
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = "#00FF00";
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  select
                  label="Product Category"
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  SelectProps={{
                    IconComponent: () => null,
                    ...inputProps,
                  }}
                >
                  <MenuItem value="tokenization">Tokenization</MenuItem>
                  <MenuItem value="defi">DeFi</MenuItem>
                  <MenuItem value="nft">NFT</MenuItem>
                  <MenuItem value="gaming">Gaming</MenuItem>
                  <MenuItem value="dapp">dApp</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Team Members"
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...inputProps,
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = "#00FF00";
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  select
                  label="Platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  SelectProps={{
                    IconComponent: () => null,
                    ...inputProps,
                  }}
                >
                  <MenuItem value="mobile">Mobile</MenuItem>
                  <MenuItem value="web">Web</MenuItem>
                  <MenuItem value="desktop">Desktop</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <TextField
                  label="Project Description"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  InputProps={{
                    ...inputProps,
                    onFocus: (e) => {
                      e.target.style.borderBottomColor = "#00FF00";
                    },
                    onBlur: (e) => {
                      e.target.style.borderBottomColor = "transparent";
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    height: "50px",
                    backgroundColor: "#00FF00",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#00CC00",
                    },
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

export default CreateToken;
