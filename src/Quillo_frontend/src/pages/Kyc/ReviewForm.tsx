import '../../styles/pages/KYC.scss';
import { Quillo_backend, createActor } from '../../../../declarations/Quillo_backend';
import { usePlugWallet } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';

const ReviewForm = ({ data, onBack}) => {

// pub struct Application {
//     pub projectName: String,
//     pub contactName: String,
//     pub contactTelegramHandle: String,
//     pub email: String,
//     pub website: String,
//     pub x: String,
//     pub pitch: String,
//     pub tokenomics: String,
//     pub otherLinks: String,
//     pub projectStartDate: String,
//     pub projectDescription: String,
//     pub ecosystem: String,
//     pub teamDescription: String,
//     pub amountOfTeamMembers: u32,
//     pub community: String,
//     pub existingUsers: String,
//     pub investmentRounds: String,
//     pub amountToBeRaised: u128,
//     pub fdv: u128,
// }
let payload={
  projectName:data.personalInfo.projectName,
  contactName:data.personalInfo.contactName,
  contactTelegramHandle:data.personalInfo.contactTelegramHandle,
  email:data.personalInfo.email,
  website:data.personalInfo.website,
  x:data.personalInfo.x,
  pitch:data.accountInfo.pitch,
  tokenomics:data.accountInfo.tokenomics,
  otherLinks:data.accountInfo.otherLinks,
  projectStartDate:data.projectInfo.projectStartDate,
  projectDescription:data.projectInfo.projectDescription,
  ecosystem:data.projectInfo.ecosystem,
  teamDescription:data.projectInfo.teamDescription,
  amountOfTeamMembers:Number(data.projectInfo.amountOfTeamMembers),
  community:data.projectInfo.community,
  existingUsers:data.projectInfo.existingUsers,
  investmentRounds:data.projectInfo.investmentRounds,
  amountToBeRaised:BigInt(data.projectInfo.amountToBeRaised),
  fdv:BigInt(data.projectInfo.fdv)
  

  


}
  const { plug } = usePlugWallet((state: any) => state);
  const [disabled, setDisabled]=React.useState(false)

  const agent = plug?.agent; // use plug's agent so that caller is authenticated user
  console.log(agent);
 let actor = Quillo_backend;
  // const agent: any = new HttpAgent();
  //backend canister name
  actor = createActor("ircua-hiaaa-aaaap-qhkvq-cai", {
    agent,
  });


async function apply(){

  setDisabled(true)
     let response: any = await actor.apply(payload)
    
     console.log(response)
     if(response=="Application was saved succesfully"){
      toast.success(`Application sent succesfully. We will be in touch`)
      setDisabled(false)

     }
     else{
      toast.error(`Application not succesful, check again later`)
      setDisabled(false)
     }
    
    }
  return (
    <div className="bg-darkdefault text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <h2 className="text-2xl font-bold mb-4">
        By submitting, you confirm that the information provided is correct.
      </h2>
      <p className="mb-6">
        We shall keep in touch to update you on the status of your application.
      </p>
   
      <div className="flex justify-between items-center">
        <button 
          type="button" 
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition-colors"
          onClick={onBack}
        >
          Back
        </button>
        <button 
        disabled={disabled}
          type="button" 
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-500 transition-colors"
          onClick={async ()=>{
await apply()
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
