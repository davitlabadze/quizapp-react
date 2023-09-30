// eslint-disable-next-line react/prop-types
const FinalComponent = ({ tryAgin, score, length, color }) => {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Final Results
        </h3>
        <div className="max-w-xl mt-2 text-lg text-gray-500">
          {score} out of {length} correct - ({(score / length) * 100}%)
        </div>
        <div className="mt-5">
          <button
            type="button"
            className={`inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-${color}-600 rounded-md shadow-sm hover:bg-${color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-500`}
            onClick={tryAgin}
          >
            Try Agin
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalComponent;
