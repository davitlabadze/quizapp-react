import { useState } from "react";
import vueQuiz from "../db/vueQuiz.json";
import { FaVuejs } from "react-icons/fa";
const Vue = () => {
  const [showFinaleResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < vueQuiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResult(true);
    }
  };
  const tryAgin = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResult(false);
  };
  return (
    <div className="bg-green-600 h-screen font-mono py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {showFinaleResult ? (
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Final Results
                </h3>
                <div className="mt-2 max-w-xl  text-lg text-gray-500">
                  <p>
                    {score} out of {vueQuiz.length} correct - (
                    {(score / vueQuiz.length) * 100}%)
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                    onClick={() => tryAgin()}
                  >
                    Try Agin
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <FaVuejs className="mx-auto w-44 h-auto" />
              {/* <icon className={"h-5 w-5 flex-none "+feature.textColor} aria-hidden="true" /> */}
              <h2>
                Question {currentQuestion + 1} out of {vueQuiz.length}
              </h2>
              <h3 className="text-base mt-6 font-semibold leading-6 text-white border rounded p-4">
                {vueQuiz[currentQuestion].question}
              </h3>
              <ul className="space-y-3 mt-12">
                {vueQuiz[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="hover:bg-green-500 hover:text-white font-mono overflow-hidden rounded-md bg-white px-6 py-4 shadow cursor-pointer"
                      onClick={() => optionClicked(option.isCorrect)}
                      key={option.id}
                    >
                      {option.answer}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Vue;
