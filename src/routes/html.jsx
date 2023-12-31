import MainComponent from "../components/MainComponent";
import { AiOutlineHtml5 } from "react-icons/ai";
import HtmlQuiz from "../db/html/HtmlQuiz.json";
import CssDoc from "../db/css/CssDoc";
import HtmlDoc from "../db/html/HtmlDoc";
const Html = () => {
  return (
    <MainComponent
      quiz={HtmlQuiz}
      icon={<AiOutlineHtml5 className="h-24 mx-auto mb-6 w-44" />}
      focus="focus-visible:outline-orange-400"
      bgColor="bg-orange-500"
      hoverBgColor="lg:hover:bg-orange-400"
      job={CssDoc}
      documentation={HtmlDoc}
      textColor="text-orange-500"
      jobText="You are awesome! Now you don't have to stop, keep learning CSS"
      learnText="You can learn here"
    />
  );
};

export default Html;
