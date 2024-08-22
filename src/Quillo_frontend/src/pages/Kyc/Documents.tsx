
import "../../styles/pages/KYC.scss";

const ProjectDetails = ({ data, onChange, onBack, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold">Project details</h2>
     
      <form>
        <label className="block">
     Project start date
          <input
          placeholder="Estimated start date"
            type="date"
            name="projectStartDate"
            className="border p-2 w-full"
            value={data.projectStartDate || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
      Project description
          <textarea
         
            placeholder="Describe the scope of the project and also how mature the project is"
            name="projectDescription"
            className="border p-2 w-full"
            value={data.projectDescription || ""}
            onChange={handleChange}
          />
        </label>
            <label className="block mt-2">
  Ecosystem
          <textarea
         
            placeholder="Explain where the project is hosted, the token to be issued e.t.c"
            name="ecosystem"
            className="border p-2 w-full"
            value={data.ecosystem || ""}
            onChange={handleChange}
          />
        </label>


         <label className="block mt-2">
Team description
          <textarea
         
            placeholder="Describe the story of the team met with relevant experience. Include linkedin links"
            name="teamDescription"
            className="border p-2 w-full"
            value={data.teamDescription || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
Team size
          <input
         type="number"
            placeholder="How many people are in the team"
            name="amountOfTeamMembers"
            className="border p-2 w-full"
            value={data.amountOfTeamMembers || ""}
            onChange={handleChange}
          />
        </label>
      
        <label className="block mt-2">
  Existing users
          <textarea
          placeholder="How many users does yout product have and what is the total TVL"
     
            name="existingUsers"
            className="border p-2 w-full bg-[#1414]"
            value={data.existingUsers || ""}
            onChange={handleChange}
          />
          
        </label>
         <label className="block mt-2">
Community
          <textarea
          placeholder="How large is your community"
     
            name="community"
            className="border p-2 w-full bg-[#1414]"
            value={data.community || ""}
            onChange={handleChange}
          />
          
        </label>
           
        <label className="block mt-2">
 investment rounds
          <textarea
          placeholder="How many investments rounds have you had and how much have you raised"
     
            name="investmentRounds"
            className="border p-2 w-full bg-[#1414]"
            value={data.investmentRounds || ""}
            onChange={handleChange}
          />
          
        </label>

          <label className="block mt-2">
Target fundraising amount
          <input
          placeholder="How much are you looking to raise via token sales"
     type="number"
            name="amountToBeRaised"
            className="border p-2 w-full bg-[#1414]"
            value={data.amountToBeRaised || ""}
            onChange={handleChange}
          />
          
        </label>


         <label className="block mt-2">
Planned FDV of tokens at launch?
          <input
          placeholder="$10000000"
     type="number"
            name="fdv"
            className="border p-2 w-full bg-[#1414]"
            value={data.fdv|| ""}
            onChange={handleChange}
          />
          
        </label>
        
        
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-600 text-white rounded"
            onClick={onBack}
          >
            Back
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded"
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
