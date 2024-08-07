import '../../styles/pages/KYC.scss'

const PersonalInfoForm = ({ data, onChange, onNext }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className='text-white'>
      <h2 className="text-xl text-white  font-semibold">Personal Info</h2>
      <form>
        <label className=" block">
          Full Name:
          <input
            type="text"
            name="fullName"
            className="border p-2 w-full"
            value={data.fullName || ''}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
          Date of Birth:
          <input
            type="date"
            name="dob"
            className="border p-2 w-full"
            value={data.dob || ''}
            onChange={handleChange}
          />
        </label>
        <label className="block mt-2">
          Phone Number:
          <input
            type="tel"
            name="phone"
            className="border p-2 w-full"
            value={data.phone || ''}
            onChange={handleChange}
          />
        </label>
        <div className="flex justify-end mt-4">
          <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded" onClick={onNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
