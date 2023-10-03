import ResultComponent from "./ResultComponent";

/* eslint-disable react/prop-types */
const FinalComponent = ({
  tryAgin,
  score,
  length,
  focus,
  bgColor,
  hoverBgColor,
  job,
  documentation,
  textColor,
  jobText,
  learnText,
}) => {
  return (
    <>
      <div className="py-24 text-center">
        <div className="bg-white shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Final Results
            </h3>

            <div className="mt-2 text-lg text-gray-500">
              {score} out of {length} correct
            </div>
            <div className="mt-5">
              <button
                type="button"
                className={`inline-flex items-center px-3 py-2 text-sm font-semibold text-white ${bgColor} rounded-md shadow-sm ${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focus}`}
                onClick={tryAgin}
              >
                Try Agin
              </button>
            </div>
            {score >= 17 ? (
              <ResultComponent
                textColor={textColor}
                text={jobText}
                data={job}
              />
            ) : (
              <ResultComponent
                textColor={textColor}
                text={learnText}
                data={documentation}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalComponent;
