import { useState } from "react";
import vueQuiz from "../db/vueQuiz.json";
import { FaVuejs } from "react-icons/fa";
import FinalComponent from "../components/FinalComponent";
import QuizComponent from "../components/QuizComponent";
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
    <div className="h-screen py-2 font-mono bg-green-600">
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
            <QuizComponent
              icon={<FaVuejs className="h-24 mx-auto w-44" />}
              currentQuestion={currentQuestion}
              length={vueQuiz.length}
              optionClicked={optionClicked}
              quiz={vueQuiz}
              color="lg:hover:bg-green-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Vue;
