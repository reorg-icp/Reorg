import "../../styles/pages/KYC.scss";

const PersonalInfoForm = ({ data, onChange, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="text-white mb-4 ">
      <h2 className="text-xl text-white  font-semibold mb-4">Project information</h2>
      <form className="">
        <div className="grid md:grid-cols-3  grid-cols-1 gap-6 ">
        <label className=" block">
          Project name
          <input
            type="text"
            name="projectName"
            className="border  border-emerald-800   p-3 w-full"
            value={data.projectName || ""}
            onChange={handleChange}
          />
        </label>
        <label className=" block">
         Contact name
          <input
            type="text"
            name="contactName"
            className="border  border-emerald-800   p-3 w-full"
            value={data.contactName || ""}
            onChange={handleChange}
          />
        </label>
        <label className=" block">
     Contact Telegram handle
          <input
            placeholder=""
            name="contactTelegramHandle"
            className="border  border-emerald-800   p-3 w-full"
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
            className="border  border-emerald-800   p-3 w-full"
            value={data.email || ""}
            onChange={handleChange}
          />
        </label>

    <label className=" block">
Project website
          <input
            placeholder=""
            name="website"
            className="border  border-emerald-800   p-3 w-full"
            value={data.website || ""}
            onChange={handleChange}
          />
        </label>
         <label className=" block">
X link
          <input
            placeholder=""
            name="x"
            className="border  border-emerald-800   p-3 w-full"
            value={data.x || ""}
            onChange={handleChange}
          />
        </label>
        </div>
       
        <div className="flex justify-between mt-6 md:mt-12  mb-6">
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

export default PersonalInfoForm;
