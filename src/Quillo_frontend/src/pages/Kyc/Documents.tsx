import DropZoneFile from "./DropZoneFile";

function Documents({ onBack, onNext }) {
  return (
    <div className="text-white flex flex-col mb-8 ">
      <h2 className="text-white mb-4  text-xl ">
        Please provide your Documents.
      </h2>

      <div className="flex flex-col gap-6">
        <div className="">
          <h4 className="text-lg mb-4 ">Frontal passport/Id</h4>
          <DropZoneFile />
        </div>

        <div className="">
          <h4 className="text-lg mb-4 ">Backend passport/id</h4>
          <DropZoneFile />
        </div>
      </div>
      <div className="flex justify-between mt-6">
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
    </div>
  );
}

export default Documents;
