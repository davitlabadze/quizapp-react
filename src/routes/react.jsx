import { useState } from "react";
import reactQuiz from "../db/reactQuiz.json";
import { BiLogoReact } from "react-icons/bi";
import FinalComponent from "../components/FinalComponent";
import QuizComponent from "../components/QuizComponent";
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
            <QuizComponent
              icon={<BiLogoReact className="h-auto mx-auto mb-6 w-44" />}
              currentQuestion={currentQuestion}
              length={reactQuiz.length}
              optionClicked={optionClicked}
              quiz={reactQuiz}
              color="hover:bg-sky-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default React;
