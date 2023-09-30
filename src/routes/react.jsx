import { useState } from "react";
import reactQuiz from "../db/reactQuiz.json";
import { BiLogoReact } from "react-icons/bi";
import FinalComponent from "../components/FinalComponent";
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
    <div className="h-screen py-2 font-mono bg-sky-600 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          {showFinaleResult ? (
            <FinalComponent
              tryAgin={tryAgin}
              score={score}
              length={reactQuiz.length}
              color="sky"
            />
          ) : (
            <div>
              <BiLogoReact className="h-auto mx-auto mb-6 w-44" />
              <h2 className="font-semibold text-white">
                Question {currentQuestion + 1} out of {reactQuiz.length}
              </h2>
              <h3 className="p-4 mt-6 text-base font-semibold leading-6 text-white border rounded">
                {reactQuiz[currentQuestion].question}
              </h3>

              <ul className="mt-12 space-y-3">
                {reactQuiz[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="px-6 py-4 overflow-hidden font-mono bg-white rounded-md shadow cursor-pointer hover:bg-sky-500 hover:text-white"
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
