import "../../styles/pages/KYC.scss";

const PersonalInfoForm = ({ data, onChange, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white">
      <h2 className="text-xl text-white  font-semibold">Project information</h2>
      <form>
        <label className=" block">
          Project name
          <input
            type="text"
            name="projectName"
            className="border p-2 w-full"
            value={data.projectName || ""}
            onChange={handleChange}
          />
        </label>
        <label className=" block">
          Project description
          <input
            type="text"
            name="projectDescription"
            className="border p-2 w-full"
            value={data.projectDescription || ""}
            onChange={handleChange}
          />
        </label>
        <label className=" block">
          Project ecosystem
          <textarea
            placeholder="Where is the project hosted? The token to be issued and grants received"
            name="projectEcosystem"
            className="border p-2 w-full"
            value={data.projectEcosystem || ""}
            onChange={handleChange}
          />
        </label>
        <label className=" block">
          Team Description
          <textarea
            placeholder="Tell us the story of how the team came together with the relevant experience. Linkedin links "
            name="projectEcosystem"
            className="border p-2 w-full"
            value={data.projectEcosystem || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
          Date of Birth:
          <input
            type="date"
            name="dob"
            className="border p-2 w-full"
            value={data.dob || ""}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
          Phone Number:
          <input
            type="tel"
            name="phone"
            className="border p-2 w-full"
            value={data.phone || ""}
            onChange={handleChange}
          />
        </label>
        <div className="flex justify-end mt-4">
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

export default PersonalInfoForm;
