import { useState } from "react";
import angularQuiz from "../db/angularQuiz.json";
import { BiLogoAngular } from "react-icons/bi";
import FinalComponent from "../components/FinalComponent";
import QuizComponent from "../components/QuizComponent";
const Angular = () => {
  const [showFinaleResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < angularQuiz.length) {
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
    <div className="h-screen py-2 font-mono bg-red-600 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          {showFinaleResult ? (
            <FinalComponent
              tryAgin={tryAgin}
              score={score}
              length={angularQuiz.length}
              color="red"
            />
          ) : (
            <QuizComponent
              icon={<BiLogoAngular className="h-auto mx-auto w-44" />}
              currentQuestion={currentQuestion}
              length={angularQuiz.length}
              optionClicked={optionClicked}
              quiz={angularQuiz}
              color={"red"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Angular;
