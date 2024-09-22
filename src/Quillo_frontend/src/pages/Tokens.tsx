import React from "react";
import "../styles/pages/tokens.scss";
import { Switch } from "@mui/material";
import TokenImg from "../assets/images/token.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import '../styles/components/ComponentWithTailwind.css'

function Token() {
  return (
    <div className="genesis-item">
      <div>
        <img className="logo-img" src={TokenImg} alt="Token Logo" />
      </div>
      <p className="text-white">Reorg Test</p>
      <p className="text-white">RTST</p>
      <p className="text-white">2EIRIRI449399393993</p>
      <p className="text-white">ICRC2</p>
      <div>
        <IconButton className="text-emerald-900">
          <ArrowForwardIosIcon className="text-emerald-900" style={{ zIndex: 1 }} />
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
      <div className="breadcrumb-container">
        <nav
          aria-label="breadcrumb"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" >
              <span className="text-emerald-200">Home</span>
              </Link>
            </li>
            <li className="breadcrumb-item active text-white" aria-current="page">
              View Tokens
            </li>
            <li></li>
          </ol>
          <Link to="/app/token">
            <button
              className="bg-emerald-900 text-white"
              style={{
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
            >
              Launch Token
            </button>
          </Link>
        </nav>
        <div className="view-tokens">
          <a href="/app/tokens" className="text-emerald-900"></a>
        </div>
      </div>
      <div className="container bg-emerald-900">
        <div className="nav">
          <div className="title text-white">
            <h4>Tokens</h4>
            <span className="number bg-[#34d399] ">1</span>
          </div>
          <FormControlLabel
            control={
              <Switch
              style={{
                color:"#34d399"
              }}
                checked={open}
                onChange={handleSwitch}
                name="toggleSwitch"
                classes={{
                  switchBase: '#34d399', // Applies to the switch color
                }}
              />
            }
            label={<span className="text-white">Show only my tokens</span>}
          />
        </div>

        <Token />
      </div>
    </>
  );
};

export default Tokens;
