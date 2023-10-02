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
}) => {
  return (
    <>
      <div className="py-24">
        <div className="bg-white shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Final Results
            </h3>
            <div className="mt-2 text-lg text-gray-500">
              {score} out of {length} correct
            </div>
            {score >= 17 ? (
              <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  You can find job here
                </h3>

                <ul
                  role="list"
                  className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
                >
                  {job.map((item) => (
                    <li
                      key={item.id}
                      className="col-span-1 flex rounded-md shadow-sm"
                    >
                      <div className="flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
                        <div className="flex-1 truncate px-4 py-2 text-sm">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={item.href}
                            className="font-medium text-black"
                          >
                            {item.name}
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-base mt-2 font-semibold leading-6 text-gray-900">
                  You can learn here
                </h3>
                <ul
                  role="list"
                  className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
                >
                  {documentation.map((item) => (
                    <li
                      key={item.id}
                      className="col-span-1 flex rounded-md shadow-sm"
                    >
                      <div className="flex  items-center justify-between truncate rounded-md border border-gray-200 bg-white">
                        <div className="flex truncate px-4 py-2 text-sm">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={item.href}
                            className="font-medium text-black"
                          >
                            {item.name}
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-5">
              <button
                type="button"
                className={`inline-flex items-center px-3 py-2 text-sm font-semibold text-white ${bgColor} rounded-md shadow-sm ${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focus}`}
                onClick={tryAgin}
              >
                Try Agin
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalComponent;
