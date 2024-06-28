import {
  Grid,
  TextField,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import { colors } from "../../../assets/colors";

const CreateToken = (): JSX.Element => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    teamMembers: "",
    platform: "",
    projectDescription: "",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Grid
      container
      direction={isMobile ? "column" : "row"}
      spacing={2}
      sx={{ padding: "10px" }}
    >
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Reorg</h1>
        <h2 style={{ textAlign: "center" }}>for Startups</h2>
        <p style={{ textAlign: "center" }} className="desc">
          Reorg empowers Web3 startups, dApps, protocols, and DAOs to seamlessly
          raise funds by leveraging the power of tokenization.
        </p>
      </Grid>
      <Grid item xs={12}>
        <form noValidate autoComplete="off">
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                fullWidth
                label="Product Name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                select
                label="Product Category"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="tokenization">Tokenization</MenuItem>
                <MenuItem value="defi">DeFi</MenuItem>
                <MenuItem value="nft">NFT</MenuItem>
                <MenuItem value="gaming">Gaming</MenuItem>
                <MenuItem value="dapp">dApp</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Team Members"
                name="teamMembers"
                value={formData.teamMembers}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                select
                label="Platform"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="mobile">Mobile</MenuItem>
                <MenuItem value="web">Web</MenuItem>
                <MenuItem value="desktop">Desktop</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Project Description"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item>
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
                  height: "50px",
                  background: colors.primary,
                  margin: "0 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  "&:hover": {
                    background: colors.primary,
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
  );
};

export default CreateToken;
