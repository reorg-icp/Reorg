import React from "react";
import "../styles/pages/tokens.scss";
import { Switch } from "@mui/material";
import TokenImg from "../assets/images/token.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function Token() {
  return (
    <div className="genesis-item">
      <div>
        <img className="logo-img" src={TokenImg} alt="Token Logo"></img>
      </div>
      <p>Reorg Test</p>
      <p>RTST</p>
      <p>2EIRIRI449399393993</p>
      <p>ICRC2</p>
      <div>
        <IconButton>
          <ArrowForwardIosIcon style={{ zIndex: 1 }} />{" "}
          {/* Replace with the icon you prefer */}
        </IconButton>
      </div>
    </div>
  );
}

const Tokens = () => {
  const [open, setOpen] = React.useState(false);
  const handleSwitch = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* <div className="view-tokens">
        <Link to="/app/tokens">
          <button
            style={{
              background: "linear-gradient(90deg, #006ad4 0%, #004d40 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "25px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              outline: "none",
              marginTop: "30px",
              alignSelf: "center",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #004d40 0%, #00251a 100%)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #006ad4 0%, #004d40 100%)")
            }
          >
            Launch Token
          </button>
        </Link>
      </div> */}
      <div className="breadcrumb-container" style={{ background: "white" }}>
        <nav
          aria-label="breadcrumb"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
            background: "white",
          }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              View Tokens
            </li>
            <li></li>
          </ol>
          <Link to="/app/token">
            <button
              style={{
                background: "linear-gradient(90deg, #006ad4 0%, #004d40 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "25px",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                outline: "none",
                marginTop: "5px",
                alignSelf: "center",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #004d40 0%, #00251a 100%)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #006ad4 0%, #004d40 100%)")
              }
            >
              Launch Token
            </button>
          </Link>
        </nav>
        <div className="view-tokens">
          <a href="/app/tokens"></a>
        </div>
      </div>
      <div className="container">
        <div className="nav">
          <div className="title">
            <h4>Tokens</h4>
            <span className="number">1</span>
          </div>
          <FormControlLabel
            control={
              <Switch
                checked={open}
                onChange={handleSwitch}
                name="toggleSwitch"
                color="primary" // You can change the color if needed
              />
            }
            label="Show only my tokens"
          />
        </div>
        {/* <div className="genesis">
          <h4>Token logo</h4>
          <h4>Token name</h4>
          <h4>Token symbol</h4>
          <h4>Canister ID</h4>
          <h4>Standard</h4>
          <h4>More</h4>
        </div> */}

        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
        <Token />
      </div>
    </>
  );
};
export default Tokens;
