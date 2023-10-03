import { useState } from "react";
import FinalComponent from "./FinalComponent";
import QuizComponent from "./QuizComponent";

// eslint-disable-next-line react/prop-types
const MainComponent = ({
  quiz,
  icon,
  focus,
  bgColor,
  hoverBgColor,
  job,
  documentation,
  textColor,
  jobText,
  learnText,
}) => {
  const [showFinaleResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quiz.length) {
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
    <div className={`h-screen py-2 font-mono ${bgColor}`}>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          {showFinaleResult ? (
            <FinalComponent
              tryAgin={tryAgin}
              score={score}
              length={quiz.length}
              focus={focus}
              bgColor={bgColor}
              job={job}
              documentation={documentation}
              hoverBgColor={hoverBgColor}
              textColor={textColor}
              jobText={jobText}
              learnText={learnText}
            />
          ) : (
            <QuizComponent
              icon={icon}
              currentQuestion={currentQuestion}
              length={quiz.length}
              optionClicked={optionClicked}
              quiz={quiz}
              hoverBgColor={hoverBgColor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
