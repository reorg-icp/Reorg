import "../styles/pages/register.scss";
// import Deploy from "@mui/icons-material/Upload";
import { useProjectInfo } from "../store";
import {
  Quillo_backend,
  createActor,
} from "../../../declarations/Quillo_backend";
// import { HttpAgent } from "@dfinity/agent";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { e8sToIcp } from "../utils/transactions";
import { usePlugWallet } from "../store";

// // import { createWalletClient,getContract, custom, WalletClient } from 'viem';
// import {  polygonMumbai } from 'viem/chains';

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
    <div className=" mb-6 font-leagueSpartan text-lg bg-[#1414] p-4 rounded-md shadow-lg border border-red-300  flex flex-col gap-2 justify-center items-center">
      <div className="disclaimer-list text-gray-200">
        - The token deployed is an ICRC2 token !
      </div>
      <div className=" text-gray-200">
        - <span className="fee text-white-700 font-bold">1 ICP</span> is charged
        as service fee !
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
    <div className="field bg-emerald-950 ">
      <div className="label mb-4 text-gray-400 font-medium">
        <h6>{label}</h6>{" "}
        <span>
          <sup>*</sup>
        </span>
      </div>
      {type === InputType.Text && (
        <input
          className="input"
          type="text"
          style={{
            borderColor:"#50C878"
          }}
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
          style={{
               borderColor:"#50C878"
          }}
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
        style={{
             borderColor:"#50C878"
        }}
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
        <input style={{   borderColor:"#50C878"}} type="file" accept="image/*" onChange={handleFileChange}></input>
      )}
    </div>
  );
}
const Register = () => {
  // const walletClient = createWalletClient({
  //         chain: polygonMumbai,
  //         transport: custom((window as any).ethereum),
          
  //       });



//       async function deployToPolygon(){
//       // const accounts=  await walletClient.requestAddresses();
//       //   const [address] = accounts;
//         let contractAdress="0x7b8De207eb7a38a370db5d94Ae8A952e13098341" 
//         let contractABI= [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "approve",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "symbol",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "initialSupply",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_transferFee",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "_feeReceiver",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "payable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "allowance",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "needed",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ERC20InsufficientAllowance",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "balance",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "needed",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ERC20InsufficientBalance",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "approver",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidApprover",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "receiver",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidReceiver",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidSender",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC20InvalidSpender",
// 		"type": "error"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Approval",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "recipient",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transfer",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "recipient",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferFrom",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "allowance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "decimals",
// 		"outputs": [
// 			{
// 				"internalType": "uint8",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "feeReceiver",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "symbol",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalSupply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			} 
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "transferFee",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]


// // const token_creator_instance= getContract({
// //           address: "0x7b8De207eb7a38a370db5d94Ae8A952e13098341",
// //           abi: contractABI,
// //         client:walletClient
// //         });



// // await token_creator_instance.write() 
//       }

const blockchainOptions = [
  { label: "Internet Computer (ICP)", value: "icp" },
  { label: "Polygon", value: "polygon" },
  { label: "Arbitrum", value: "arbitrum" },
];

 const [blockchain, setBlockchain] = useState("icp");

  const { plug } = usePlugWallet((state: any) => state);
  const [_, setDaoId] = React.useState<BigInt>(-1n);
  const [disabled, setDisabled] = React.useState("");
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

    if(blockchain!=="icp"){
      return alert("Cannot deploy to evm chains right now...")
    }

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
      toast.loading("Success... your token is being created..");
      let principal_id = localStorage.getItem("principal");
      let result: any = await actor.get_icp_balance(principal_id as string);
      if (result?.e8s < BigInt(101000000)) {
        console.log(result?.e8s);
        setDisabled("");
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
            setDisabled("");
          } else if (tokenResponse?.Err) {
            console.log(tokenResponse?.Err);
            setDisabled("");
            toast.error(
              `There was an error creating the token error:${tokenResponse?.Err}`
            );
          }
        }
        if (response?.Err) {
          setDisabled("");
          toast.error(`There was an error creating the token`);
        }
      }
    }
  }

  return (
    <>
      <div className="bg-emerald-950 mt-28 h-90 w-full  ">
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
        <div className="  w-full h-full px-4 sm:px-6 lg:px-8 py-4 ">
          <div className="flex flex-start text-center mb-4">
            <h4 className="text-gray-300 font-leagueSpartan font-bold text-lg md:text-xl ">
              Project information.
            </h4>
          </div>
          <div className="grid xlg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
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
            <div className="mt-6 flex flex-col items-start text-left">
            <h4 className="text-gray-300 font-leagueSpartan font-bold text-lg md:text-xl">Select Blockchain</h4>
            <select
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
              className="mt-2 p-2 text-lg bg-gray-800 text-white rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {blockchainOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-6 flex flex-start text-center mb-6">
            <h4 className="text-gray-300 font-leagueSpartan font-bold text-xl md:text-2xl ">
              Token Information.
            </h4>
          </div>
          <div className="mb-6 w-full grid xlg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
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

          {blockchain==="icp" &&   <Disclaimer /> }
        
          <button
            disabled={disabled.includes("set")}
            className={`w-full mt-2 mb-6 px-8 py-3 text-lg font-semibold text-center text-white bg-emerald-900 rounded-md shadow-lg hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 ${
              disabled.includes("set")
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white"
            }`}
            onClick={() => {
              setDisabled("set");
              registerProject();
            }}
          >
            {disabled.includes("set") ? (
              <span className="flex items-center justify-center gap-4 ">
                <span>Deploying...</span>
                <Oval
                  height={20}
                  width={20}
                  color="white"
                  ariaLabel="loading"
                />
              </span>
            ) : (
              "Deploy Token"
            )}
          </button>
        </div>
      </div>

      {/*Tokenomics */}

      {/*
          <button
            disabled={disabled.includes("set")? true : false}
            className="btn"
            onClick={() => {
              setDisabled("set");

              registerProject();
            }}
          >
           { disabled ? <><span style={{marginRight:"10px"}}> Deploying...</span><Oval height={20} width={20} color="blue"  ariaLabel="loading" /></> :' Deploy token'}
          </button> */}
      {/* <Deploy
          style={{
            position: "relative",
            left: "56%",
            bottom: "35px",
            color: "white",
          }}
        /> */}
      {/* </div>
      </div> */}
    </>
  );
};
export default Register;
