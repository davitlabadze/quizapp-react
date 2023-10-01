import MainComponent from "../components/MainComponent";
import { RiJavascriptLine } from "react-icons/ri";
import jsQuiz from "../db/jsQuiz.json";
const Javascript = () => {
  return (
    <MainComponent
      quiz={jsQuiz}
      icon={<RiJavascriptLine className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-yellow-400"
      bgColor="bg-yellow-500"
      hoverBgColor="lg:hover:bg-yellow-400"
    />
  );
};

export default Javascript;
