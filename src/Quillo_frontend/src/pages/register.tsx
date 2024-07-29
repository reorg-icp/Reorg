import "../styles/pages/register.scss";
// import Deploy from "@mui/icons-material/Upload";
import { useProjectInfo } from "../store";
import {
  Quillo_backend,
  createActor,
} from "../../../declarations/Quillo_backend";
// import { HttpAgent } from "@dfinity/agent";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { e8sToIcp } from "../utils/transactions";
import { usePlugWallet } from "../store";

import { Oval } from "react-loader-spinner";

enum InputType {
  Text = "text",
  TextArea = "textArea",
  SingleDropDown = "singleDropDown",
  number = "number",
  file = "file",
}
type InputData = {
  id: number;
  label: string;
  type: InputType;
  value: string;
};

const inputData: Array<InputData> = [
  {
    id: 1,
    label: "Project name",
    type: InputType.Text,
    value: "project_name",
  },
  {
    id: 2,
    label: "Project description",
    type: InputType.TextArea,
    value: "project_description",
  },
  {
    id: 3,
    label: "Github link",
    type: InputType.Text,
    value: "github",
  },
  {
    id: 2,
    label: "Website link",
    type: InputType.Text,
    value: "website",
  },
];
const tokenData: Array<InputData> = [
  {
    id: 1,
    label: "Token name",
    type: InputType.Text,
    value: "token_name",
  },
  {
    id: 2,
    label: "Token symbol",
    type: InputType.Text,
    value: "token_symbol",
  },
  {
    id: 3,
    label: "Total supply",
    type: InputType.number,
    value: "total_supply",
  },
  {
    id: 4,
    label: "Transfer fee",
    type: InputType.number,
    value: "transfer_fee",
  },
  {
    id: 5,
    label: "Token logo",
    type: InputType.file,
    value: "token_logo",
  },
];

function Disclaimer() {
  return (
    <div className="disclaimer">
      <div className="disclaimer-list">
        - The token deployed is an ICRC2 token
      </div>
      <div className="disclaimer-list">
        - <span className="fee">1 ICP</span> is charged as service fee
      </div>
    </div>
  );
}

function Input({
  label,
  type,
  value,
}: {
  label: string;
  type: InputType;
  value: string;
}) {
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

  const {
    socials,

    tokenomics,
    setProjectName,
    setProjectDescription,
    setTokenomics,
    setSocials,
  } = useProjectInfo((state: any) => state);

  return (
    <div className="field">
      <div className="label">
        <h6>{label}</h6>{" "}
        <span>
          <sup>*</sup>
        </span>
      </div>
      {type === InputType.Text && (
        <input
          className="input"
          type="text"
          placeholder={label}
          onChange={(e: any) => {
            if (value == "project_name") {
              setProjectName(e.target.value);
            }
            if (value == "website") {
              setSocials({ ...socials, website: [e.target.value] });
            }
            if (value == "github") {
              setSocials({ ...socials, github: [e.target.value] });
            }
            if (value == "token_name") {
              setTokenomics({ ...tokenomics, token_name: e.target.value });
            }
            if (value == "token_symbol") {
              setTokenomics({ ...tokenomics, token_symbol: e.target.value });
            }
          }}
        />
      )}
      {type === InputType.number && (
        <input
          className="input"
          type="number"
          placeholder={label}
          onChange={(e: any) => {
            if (value == "total_supply") {
              setTokenomics({
                ...tokenomics,
                total_supply: Number(e.target.value),
              });
            }
            if (value == "transfer_fee") {
              setTokenomics({
                ...tokenomics,
                transfer_fee: Number(e.target.value),
              });
            }
          }}
        />
      )}
      {type === InputType.TextArea && (
        <textarea
          className="textArea"
          placeholder={label}
          onChange={(e: any) => {
            if (value == "project_description") {
              setProjectDescription(e.target.value);
            }
          }}
        >
          {/* {label} */}
        </textarea>
      )}
      {type === InputType.file && (
        <input type="file" accept="image/*" onChange={handleFileChange}></input>
      )}
    </div>
  );
}
const Register = () => {
  const { plug } = usePlugWallet((state: any) => state);
  const [_, setDaoId] = React.useState<BigInt>(-1n);
  const [disabled, setDisabled] = React.useState(false);
  const agent = plug?.agent; // use plug's agent so that caller is authenticated user
  console.log(agent);

  console.log(`Type of agent is ${agent}`);
  // const { socials, project_name, project_description, tokenomics } =
  //   useProjectInfo((state: any) => state);
  let actor = Quillo_backend;
  // const agent: any = new HttpAgent();
  //backend canister name
  actor = createActor("ircua-hiaaa-aaaap-qhkvq-cai", {
    agent,
  });

  const { socials, project_name, project_description, tokenomics } =
    useProjectInfo((state: any) => state);

  let project_details = {
    project_name: project_name,
    project_description: project_description,

    socials: [socials],
    tokenomics: [tokenomics],
    project_principal: [localStorage.getItem("principal")] as [string],
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
      setDaoId(response?.Ok?.id);
      console.log(typeof response?.Ok?.id);
      toast.success("Success... your token is being created..");
      let principal_id = localStorage.getItem("principal");
      let result: any = await actor.get_icp_balance(principal_id as string);
      if (result?.e8s < BigInt(101000000)) {
        console.log(result?.e8s);
        return toast.error(
          `You don't have enough ICP to complete the transaction, you need atleast 1.0001 ICP. Your balance is ${e8sToIcp(
            result?.e8s
          )}`
        );
      } else if (result?.e8s >= BigInt(101000000)) {
        //create transferParams

        let transfer_params = {
          to: "ircua-hiaaa-aaaap-qhkvq-cai",
          amount: 101_000_000,
          opts: {
            memo: "123451231231",
          },
        };
        const result = await plug?.requestTransfer(transfer_params);
        console.log(`The res is ${JSON.stringify(result)}`);

        if (result?.height) {
          let tokenResponse: any = await actor.launch_token(response?.Ok?.id);

          if (tokenResponse?.Ok) {
            toast.success(
              `Token created and the canister id is ${tokenResponse?.Ok}`
            );
            setDisabled(false);
            
          } else if (tokenResponse?.Err) {
            console.log(tokenResponse?.Err);
            setDisabled(false);
            toast.error(`There was an error creating the token error:${tokenResponse?.Err}`);
          }
        }
        if (response?.Err) {
          setDisabled(false);
          toast.error(`There was an error creating the token`);
        }
      }
    }
  }
  console.log("d",disabled);
  return (
    <>
      <div
        style={{
          display: disabled ? "flex" : "none",
          alignItems: "center",

          width: "100vw",
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
        }}
      >
        <Oval  height={100} width={100} color="black" ariaLabel="loading" />
      </div>

      <div style={{ opacity: disabled ? 0.2 : 1 }}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container">
          <div className="children">
            <h4>Project information</h4>
          </div>
          <div className="form">
            {inputData.map((input) => {
              return (
                <Input
                  key={input.id}
                  label={input.label}
                  type={input.type}
                  value={input.value}
                />
              );
            })}
          </div>

          {/*Tokenomics */}

          <div className="children">
            <h4>Token Information</h4>
          </div>
          <div className="form">
            {tokenData.map((input) => {
              return (
                <Input
                  key={input.id}
                  label={input.label}
                  type={input.type}
                  value={input.value}
                />
              );
            })}
          </div>

          <Disclaimer />
          <button
            disabled={disabled}
            className="btn"
            onClick={() => {
              setDisabled(true);

              registerProject();
            }}
          >
            Deploy token
          </button>
          {/* <Deploy
          style={{
            position: "relative",
            left: "56%",
            bottom: "35px",
            color: "white",
          }}
        /> */}
        </div>
      </div>
    </>
  );
};
export default Register;
