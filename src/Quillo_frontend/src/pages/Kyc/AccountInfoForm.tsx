import "../../styles/pages/KYC.scss";

const AccountInfoForm = ({ data, onChange, onBack, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white mb-4">
      <h2 className="text-xl font-semibold mb-6 ">Links</h2>
      <form>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-6  mb-4 md:mb-6">
        <label className="block">
       Pitch deck
          <input
          placeholder="Link to pitch deck"
            type="text"
            name="pitch"
            className="border  border-emerald-800   p-3 w-full"
            value={data.pitch || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block ">
       Tokenomics
          <input
            type="text"
            placeholder="Link to tokenomics"
            name="tokenomics"
            className="border  border-emerald-800   p-3 w-full"
            value={data.tokenomics || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block ">
      Other links
          <input
          placeholder="Other relevant links"
            type="text"
            name="otherLinks"
            className="border  border-emerald-800   p-3 w-full bg-[#1414]"
            value={data.otherLinks || ""}
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
            className="px-4 py-2 border border-emerald-800  bg-[#1417]  hover:bg-[#1409]  hover:border-amber-400 focus:ring-1 focus:ring-emerald-400 text-white rounded"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfoForm;
