import MainComponent from "../components/MainComponent";
import { RiJavascriptLine } from "react-icons/ri";
import JsQuiz from "../db/js/jsQuiz.json";
import JsJob from "../db/js/JsJob";
import JsDoc from "../db/js/JsDoc";
const Javascript = () => {
  return (
    <MainComponent
      quiz={JsQuiz}
      icon={<RiJavascriptLine className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-yellow-400"
      bgColor="bg-yellow-500"
      hoverBgColor="lg:hover:bg-yellow-400"
      job={JsJob}
      documentation={JsDoc}
      textColor="text-sky-500"
      jobText="You can find job here"
      learnText="You can learn here"
    />
  );
};

export default Javascript;
