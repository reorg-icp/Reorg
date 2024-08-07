import '../../styles/pages/KYC.scss';
const ReviewForm = ({ data, onBack, onSubmit }) => {
  return (
    <div className='text-white'>
      <h2 className="text-xl font-semibold">Review Your Information</h2>
      <div>
        <p><strong>Full Name:</strong> {data.personalInfo.fullName}</p>
        <p><strong>Date of Birth:</strong> {data.personalInfo.dob}</p>
        <p><strong>Phone Number:</strong> {data.personalInfo.phone}</p>
        <p><strong>Email Address:</strong> {data.accountInfo.email}</p>
        <p><strong>Username:</strong> {data.accountInfo.username}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded" onClick={onBack}>
          Back
        </button>
        <button type="button" className="px-4 py-2 bg-green-600 text-white rounded" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
