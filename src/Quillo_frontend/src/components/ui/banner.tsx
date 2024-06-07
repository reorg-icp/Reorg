import React from "react";
import { Box, Typography, Button } from "@mui/material";

export const LaunchBanner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "50px",
        backgroundColor: "#50C878",
        color: "#fff",
        padding: "0 20px",
        borderRadius: "8px",
        width: "96vw",
        marginInline: "2vw",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginTop: "3px",
      }}
    >
      <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
  Reorg is launching soon.  Launch Your Startup DAO Soon by  joining the Waitlist Now!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#fff",
          color: "#50C878",
          marginLeft: "20px",
          height: "40px",
          fontSize: "0.75rem",
          ":hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <a href="#waitlist">Join Waitlist</a>
      </Button>
    </Box>
  );
};
