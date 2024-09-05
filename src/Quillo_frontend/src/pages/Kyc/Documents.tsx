
import "../../styles/pages/KYC.scss";

const ProjectDetails = ({ data, onChange, onBack, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold mb-6">Project details</h2>
     
      <form>
      <div className="grid md:grid-cols-3  grid-cols-1 gap-6 ">
        <label className="block">
     Project start date
          <input
          placeholder="Estimated start date"
            type="date"
            name="projectStartDate"
            className="border  border-emerald-800   p-4 w-full"
            value={data.projectStartDate || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block ">
      Project description
          <textarea
         
            placeholder="Describe the scope of the project and also how mature the project is"
            name="projectDescription"
            className="border  border-emerald-800   p-2 w-full"
            value={data.projectDescription || ""}
            onChange={handleChange}
          />
        </label>
            <label className="block ">
  Ecosystem
          <textarea
         
            placeholder="Explain where the project is hosted, the token to be issued e.t.c"
            name="ecosystem"
            className="border  border-emerald-800   p-2 w-full"
            value={data.ecosystem || ""}
            onChange={handleChange}
          />
        </label>


         <label className="block ">
Team description
          <textarea
         
            placeholder="Describe the story of the team met with relevant experience. Include linkedin links"
            name="teamDescription"
            className="border  border-emerald-800   p-2 w-full"
            value={data.teamDescription || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block ">
Team size
          <input
         type="number"
            placeholder="How many people are in the team"
            name="amountOfTeamMembers"
            className="border  border-emerald-800   p-4 w-full"
            value={data.amountOfTeamMembers || ""}
            onChange={handleChange}
          />
        </label>
      
        <label className="block ">
  Existing users
          <textarea
          placeholder="How many users does yout product have and what is the total TVL"
     
            name="existingUsers"
            className="border  border-emerald-800   p-2 w-full bg-[#1414]"
            value={data.existingUsers || ""}
            onChange={handleChange}
          />
          
        </label>
         <label className="block ">
Community
          <textarea
          placeholder="How large is your community"
     
            name="community"
            className="border  border-emerald-800   p-2 w-full bg-[#1414]"
            value={data.community || ""}
            onChange={handleChange}
          />
          
        </label>
           
        <label className="block ">
 investment rounds
          <textarea
          placeholder="How many investments rounds have you had and how much have you raised"
     
            name="investmentRounds"
            className="border  border-emerald-800   p-2 w-full bg-[#1414]"
            value={data.investmentRounds || ""}
            onChange={handleChange}
          />
          
        </label>

          <label className="block ">
Target fundraising amount
          <input
          placeholder="How much are you looking to raise via token sales"
     type="number"
            name="amountToBeRaised"
            className="border  border-emerald-800   p-4 w-full bg-[#1414]"
            value={data.amountToBeRaised || ""}
            onChange={handleChange}
          />
          
        </label>


         <label className="block ">
Planned FDV of tokens at launch?
          <input
          placeholder="$10000000"
     type="number"
            name="fdv"
            className="border  border-emerald-800   p-4 w-full bg-[#1414]"
            value={data.fdv|| ""}
            onChange={handleChange}
          />
          
        </label>
        </div>
        
        <div className="flex justify-between mt-6 md:mt-12  mb-6">
          <button
            type="button"
            className="px-4 py-2 border border-emerald-800 focus:ring-1 focus:ring-emerald-400  hover:border-amber-400 text-white rounded"
            onClick={onBack}
          >
            Back
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-emerald-800  bg-[#1417] hover:border-amber-400  hover:bg-[#1409] focus:ring-1 focus:ring-emerald-400 text-white rounded"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectDetails;
