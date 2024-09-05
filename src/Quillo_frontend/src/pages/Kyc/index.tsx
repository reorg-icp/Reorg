import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import AccountInfoForm from "./AccountInfoForm";
import ReviewForm from "./ReviewForm";
import "../../styles/pages/KYC.scss";
import Documents from "./Documents";
export default function KYC() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    accountInfo: {},
    projectInfo:{}
  });

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);

    // Smoothly scroll to the top of the window
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  };

  const handleFormDataChange = (step, newData) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], ...newData },
    }));
  };

  return (
    <div className=" md:mt-18 mt-6 w-full mx-auto md:px-2 px-1 h-[1400px] h-full mb-30 flex flex-col ">
      <ol className="mt-4 flex  flex-row inset-0 items-center md:justify-center w-full   px-4 justify-between text-sm font-medium text-center text-gray-500  border  rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-[#1409] border-gray-700 py-4  md:space-x-24 rtl:space-x-reverse">
        <li
          className={`flex items-center ${
            currentStep === 1 ? "text-blue-600 dark:text-blue-500" : ""
          }`}
        >
          <span
            className={`flex items-center justify-center w-5 h-5 me-2 text-xs border border-emerald-800  hidden md:block ${
              currentStep === 1
                ? "border-blue-500"
                : "border-gray-400"
            } rounded-full shrink-0`}
          >
            1
          </span>
          Project 
          <span className="hidden sm:inline-flex sm:ms-2">Information</span>
          {currentStep < 4 && (
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          )}
        </li>
        <li
          className={`flex items-center ${
            currentStep === 2 ? "text-blue-600 dark:text-blue-500" : ""
          }`}
        >
          <span
            className={`flex items-center justify-center w-5 h-5 me-2 text-xs border border-emerald-800    hidden md:block    ${
              currentStep === 2
                ? "border-blue-500"
                : "border-gray-400"
            } rounded-full shrink-0`}
          >
            2
          </span>
        Links <span className="hidden sm:inline-flex sm:ms-2"></span>
          {currentStep < 4 && (
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          )}
        </li>
        <li
          className={`flex items-center ${
            currentStep === 3 ? "text-blue-600 dark:text-blue-500" : ""
          }`}
        >
          <span
            className={`flex items-center justify-center w-5 h-5 me-2 text-xs border  border-emerald-800 hidden md:block   ${
              currentStep === 3
                ? " border-blue-500"
                : " border-gray-400"
            } rounded-full shrink-0`}
          >
            3
          </span>
        Project <span className="hidden sm:inline-flex sm:ms-2">description</span>
          {currentStep < 4 && (
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          )}
        </li>
        <li
          className={`flex items-center ${
            currentStep === 4 ? "text-blue-600 dark:text-blue-500" : ""
          }`}
        >
          <span
            className={`flex items-center justify-center w-5 h-5 me-2 text-xs border  border-emerald-800  hidden md:block   ${
              currentStep === 4
                ? "border-blue-500"
                : "border-gray-400"
            } rounded-full shrink-0`}
          >
            4
          </span>
          Review
        </li>
      </ol>

      <div className="mt-4 mb-24">
        {currentStep === 1 && (
          <PersonalInfoForm
            data={formData.personalInfo}
            onChange={(newData) =>
              handleFormDataChange("personalInfo", newData)
            }
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <AccountInfoForm
            data={formData.accountInfo}
            onChange={(newData) => handleFormDataChange("accountInfo", newData)}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}
        {currentStep === 3 && (
          <Documents    data={formData.projectInfo}
            onChange={(newData) => handleFormDataChange("projectInfo", newData)}
            onBack={handleBack}
            onNext={handleNext} />
        )}
        {currentStep === 4 && (
          <ReviewForm
            data={formData}
            onBack={handleBack}
    
          />
        )}
      </div>
    </div>
  );
}
