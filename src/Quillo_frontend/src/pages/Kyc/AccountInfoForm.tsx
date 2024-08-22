import "../../styles/pages/KYC.scss";

const AccountInfoForm = ({ data, onChange, onBack, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold">Project information</h2>
      <form>
        <label className="block">
          Email Address:
          <input
            type="email"
            name="email"
            className="border p-2 w-full"
            value={data.email || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
          Username:
          <input
            type="text"
            name="username"
            className="border p-2 w-full"
            value={data.username || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
          Password:
          <input
            type="password"
            name="password"
            className="border p-2 w-full bg-[#1414]"
            value={data.password || ""}
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
