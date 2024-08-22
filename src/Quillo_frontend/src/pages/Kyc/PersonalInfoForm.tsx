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
         Contact name
          <input
            type="text"
            name="contactName"
            className="border p-2 w-full"
            value={data.contactName || ""}
            onChange={handleChange}
          />
        </label>
        <label className=" block">
     Contact Telegram handle
          <input
            placeholder=""
            name="contactTelegramHandle"
            className="border p-2 w-full"
            value={data.contactTelegramHandle || ""}
            onChange={handleChange}
          />
        </label>
         <label className=" block">
Email
          <input
          type="email"
            placeholder=""
            name="email"
            className="border p-2 w-full"
            value={data.email || ""}
            onChange={handleChange}
          />
        </label>

    <label className=" block">
Project website
          <input
            placeholder=""
            name="website"
            className="border p-2 w-full"
            value={data.website || ""}
            onChange={handleChange}
          />
        </label>
         <label className=" block">
X link
          <input
            placeholder=""
            name="x"
            className="border p-2 w-full"
            value={data.x || ""}
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
