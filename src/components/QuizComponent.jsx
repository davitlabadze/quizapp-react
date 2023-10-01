/* eslint-disable react/prop-types */

const QuizComponent = ({
  icon,
  currentQuestion,
  length,
  optionClicked,
  quiz,
  color,
}) => {
  return (
    <div>
      {icon}
      <h2>
        Question {currentQuestion + 1} out of {length}
      </h2>
      <h3 className="p-4 mt-6 text-base font-semibold leading-6 text-white border rounded">
        {quiz[currentQuestion].question}
      </h3>
      <ul className="mt-12 space-y-3">
        {quiz[currentQuestion].options.map((option) => {
          return (
            <li
              className={`px-6 py-4 overflow-hidden font-mono bg-white rounded-md shadow cursor-pointer  lg:hover:text-white ${color}`}
              onClick={() => optionClicked(option.isCorrect)}
              key={option.id}
            >
              {option.answer}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizComponent;
