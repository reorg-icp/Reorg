import {
  Grid,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useProjectInfo } from "../../../store";

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

const CreateToken = () => {
  const {
    project_name,
    project_description,
    setProjectName,
    setProjectDescription,

    // projectCategory,
    socials,
    setSocials,
  } = useProjectInfo((state: any) => state);

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
                  label="Project Name"
                  name="projectName"
                  value={project_name}
                  onChange={(e: any) => {
                    setProjectName(e.target.value);
                  }}
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

              {/* <Grid item xs={12} sm={6} md={4}>
                <TextField
                  select
                  label="Platform"
                  name="platform"
                  value={platform}
                  onChange={(e: any) => {
                    if (e.target.value === "Mobile") {
                      setPlatform({ Mobile: null });
                    } else if (e.target.value === "Web") {
                      setPlatform({ Web: null });
                    } else if (e.target.value === "Desktop") {
                      setPlatform({ Desktop: null });
                    }
                  }}
                  variant="outlined"
                  fullWidth
                  SelectProps={{
                    IconComponent: () => null,
                    ...inputProps,
                  }}
                >
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="Web">Web</MenuItem>
                  <MenuItem value="Desktop">Desktop</MenuItem>
                </TextField>
              </Grid> */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Project Description"
                  name="projectDescription"
                  value={project_description}
                  onChange={(e: any) => {
                    setProjectDescription(e.target.value);
                  }}
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
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Website"
                  name="website"
                  value={socials.website}
                  onChange={(e: any) => {
                    setSocials({ ...socials, website: [e.target.value] });
                  }}
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
                  label="Twitter (X)"
                  name="x"
                  value={socials.x}
                  onChange={(e: any) => {
                    setSocials({ ...socials, x: [e.target.value] });
                  }}
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
                  label="LinkedIn"
                  name="linkedin"
                  value={socials.linkedin}
                  onChange={(e: any) => {
                    setSocials({ ...socials, linkedin: [e.target.value] });
                  }}
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
                  label="Discord"
                  name="discord"
                  value={socials.discord}
                  onChange={(e: any) => {
                    setSocials({ ...socials, discord: [e.target.value] });
                  }}
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

              <Grid item xs={12} textAlign="center">
                <Link to="/tokenize">
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
                    <span>Next</span>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default CreateToken;
