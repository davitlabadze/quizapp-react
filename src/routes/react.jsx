import { useState } from "react";
import reactQuiz from "../db/reactQuiz.json";
import { BiLogoReact } from "react-icons/bi";
const React = () => {
  const [showFinaleResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < reactQuiz.length) {
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
    <div className="bg-sky-600 font-mono h-screen py-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {showFinaleResult ? (
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Final Results
                </h3>
                <div className="mt-2 max-w-xl  text-lg text-gray-500">
                  {score} out of {reactQuiz.length} correct - (
                  {(score / reactQuiz.length) * 100}%)
                </div>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    onClick={() => tryAgin()}
                  >
                    Try Agin
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <BiLogoReact className="mx-auto mb-6 w-44 h-auto" />
              <h2 className="font-semibold text-white">
                Question {currentQuestion + 1} out of {reactQuiz.length}
              </h2>
              <h3 className="text-base mt-6 font-semibold leading-6 text-white rounded border p-4">
                {reactQuiz[currentQuestion].question}
              </h3>

              <ul className="space-y-3 mt-12">
                {reactQuiz[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="hover:bg-sky-500 hover:text-white font-mono overflow-hidden rounded-md bg-white px-6 py-4 shadow cursor-pointer"
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
export default React;
