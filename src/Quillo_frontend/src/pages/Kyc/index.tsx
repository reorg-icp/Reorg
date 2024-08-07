import  { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import AccountInfoForm from './AccountInfoForm';
import ReviewForm from './ReviewForm';
import '../../styles/pages/KYC.scss'
import Documents from './Documents';
export default function KYC() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    accountInfo: {},
  });

  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handleBack = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleFormDataChange = (step, newData) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: { ...prevData[step], ...newData },
    }));
  };

  return (
    <div className="p-4">
      <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
        <li className={`flex items-center ${currentStep === 1 ? 'text-blue-600 dark:text-blue-500' : ''}`}>
          <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${currentStep === 1 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400'} rounded-full shrink-0`}>
            1
          </span>
          Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          {currentStep < 4 && (
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          )}
        </li>
        <li className={`flex items-center ${currentStep === 2 ? 'text-blue-600 dark:text-blue-500' : ''}`}>
          <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${currentStep === 2 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400'} rounded-full shrink-0`}>
            2
          </span>
          Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          {currentStep < 4 && (
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          )}
        </li> 
         <li className={`flex items-center ${currentStep === 3 ? 'text-blue-600 dark:text-blue-500' : ''}`}>
          <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${currentStep === 3 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400'} rounded-full shrink-0`}>
            3
          </span>
        Documents <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          {currentStep < 4 && (
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          )}
        </li>
        <li className={`flex items-center ${currentStep === 4 ? 'text-blue-600 dark:text-blue-500' : ''}`}>
          <span className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${currentStep === 4 ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400'} rounded-full shrink-0`}>
            4
          </span>
          Review
        </li>
      </ol>

      <div className="mt-4">
        {currentStep === 1 && (
          <PersonalInfoForm
            data={formData.personalInfo}
            onChange={(newData) => handleFormDataChange('personalInfo', newData)}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <AccountInfoForm
            data={formData.accountInfo}
            onChange={(newData) => handleFormDataChange('accountInfo', newData)}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}
            {currentStep === 3&& 
        <Documents  
         data={formData}
     onBack={handleBack}
        onNext={handleNext}/>
        }
        {currentStep === 4 && (
          <ReviewForm
            data={formData}
            onBack={handleBack}
            onSubmit={() => console.log('Submit data:', formData)}
          />
        )}
    
      </div>
    </div>
  );
}
