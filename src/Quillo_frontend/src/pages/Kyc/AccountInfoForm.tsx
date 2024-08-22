import "../../styles/pages/KYC.scss";

const AccountInfoForm = ({ data, onChange, onBack, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold">Links</h2>
      <form>
        <label className="block">
       Pitch deck
          <input
          placeholder="Link to pitch deck"
            type="text"
            name="pitch"
            className="border p-2 w-full"
            value={data.pitch || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
       Tokenomics
          <input
            type="text"
            placeholder="Link to tokenomics"
            name="tokenomics"
            className="border p-2 w-full"
            value={data.tokenomics || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
      Other links
          <input
          placeholder="Other relevant links"
            type="text"
            name="otherLinks"
            className="border p-2 w-full bg-[#1414]"
            value={data.otherLinks || ""}
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

export default AccountInfoForm;
