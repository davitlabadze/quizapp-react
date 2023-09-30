import { useState } from "react";
import vueQuiz from "../db/vueQuiz.json";
import { FaVuejs } from "react-icons/fa";
import FinalComponent from "../components/FinalComponent";
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
    <div className="h-screen py-2 font-mono bg-green-600 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          {showFinaleResult ? (
            <FinalComponent
              tryAgin={tryAgin}
              score={score}
              length={vueQuiz.length}
              color="green"
            />
          ) : (
            <div>
              <FaVuejs className="h-auto mx-auto w-44" />
              {/* <icon className={"h-5 w-5 flex-none "+feature.textColor} aria-hidden="true" /> */}
              <h2>
                Question {currentQuestion + 1} out of {vueQuiz.length}
              </h2>
              <h3 className="p-4 mt-6 text-base font-semibold leading-6 text-white border rounded">
                {vueQuiz[currentQuestion].question}
              </h3>
              <ul className="mt-12 space-y-3">
                {vueQuiz[currentQuestion].options.map((option) => {
                  return (
                    <li
                      className="px-6 py-4 overflow-hidden font-mono bg-white rounded-md shadow cursor-pointer hover:bg-green-500 hover:text-white"
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
